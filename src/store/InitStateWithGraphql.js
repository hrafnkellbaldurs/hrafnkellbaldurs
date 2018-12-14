import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { actions } from '../store'
import * as R from 'ramda'

/**
 * Takes an object that
 * @param {Object} obj
 * @param {Object[]} obj.edges - A list of literal edge objects
 * @param {Object} obj.edges[].node - Should contain the data we want to pluck
 * @returns {any[]} - Returns an array of the contents of each edge node
 */
const pluckEdgeNodes = R.pipe(
    R.prop('edges'),
    R.pluck('node')
)

/**
 * WARNING: This is a hacky way of initiating the provider state with graphql data.
 * This will have to do until I stumble upon a cleaner way to do this
 */
class InitStateWithGraphql extends React.PureComponent {
    constructor(props) {
        super(props)

        const mappedData = R.pipe(
            // Pluck the edge nodes of each property in data.
            // This eliminates the deep nesting of the data we want (data[prop].edges[i].node[dataWeWant] => data[prop][dataWeWant])
            R.mapObjIndexed(pluckEdgeNodes),
            // I think we'll only ever need 1 item for aboutMe, so only get the first item
            R.evolve({ aboutMe: R.head })
        )(props.data)

        actions.initStateWithGraphqlData({ ...mappedData })
    }

    render() {
        return null
    }
}

const InitStateWithGraphqlContainer = () => {
    return <StaticQuery
        query={ initStateQuery }
        render={ data => <InitStateWithGraphql data={ data } /> }
    />
}

export default InitStateWithGraphqlContainer

export const initStateQuery = graphql`
  query InitStateQuery {
    ...AboutMeFragment
    ...ExperienceFragment
    ...SkillsFragment
    ...ShowcasesFragment
  }
`
