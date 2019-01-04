import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { actions } from './index'
import { pluckEdgeNodes, getDateRangeDuration } from '../scripts/utils'
import { SKILL_LEVELS } from '../constants'
import * as R from 'ramda'

const mapGraphqlAsset = (asset, label) => ({
    src: R.prop('publicURL', asset),
    label
})

const skillLevelTextMap = {
    [SKILL_LEVELS.NOVICE]: 'Novice',
    [SKILL_LEVELS.PROFICIENT]: 'Proficient',
    [SKILL_LEVELS.EXPERT]: 'Expert'
}

const mapData = R.pipe(
    // Pluck the edge nodes of each property in data.
    // This eliminates the deep nesting of the data we want (data[prop].edges[i].node[dataWeWant] => data[prop][dataWeWant])
    R.mapObjIndexed(pluckEdgeNodes),
    // I think we'll only ever need 1 item for aboutMe, so only get the first item
    R.evolve({
        aboutMe: R.head,
        showcases: R.map(showcase => ({
            ...showcase,
            image: mapGraphqlAsset(showcase.image, showcase.title),
            internalLink: mapGraphqlAsset(showcase.internalLink, R.prop('name', showcase.internalLink))
        })),
        skills: R.map(skill => ({
            ...skill,
            logo: mapGraphqlAsset(skill.logo, skill.name),
            skillLevelText: skillLevelTextMap[skill.skillLevel],
            years: getDateRangeDuration(skill.startDate, skill.endDate, true).years
        }))
    })
)

/**
 * WARNING: This is a hacky way of initiating the provider state with graphql data.
 * This will have to do until I stumble upon a cleaner way to do this
 */
class InitStateWithGraphql extends React.PureComponent {
    constructor(props) {
        super(props)

        const mappedData = mapData(props.data)

        actions.initStateWithGraphqlData({ ...mappedData })
    }

    render() {
        return null
    }
}

const InitStateWithGraphqlContainer = () => {
    return <StaticQuery
        query={ graphql`
            query InitStateQuery {
                ...AboutMeFragment
                ...ExperienceFragment
                ...SkillsFragment
                ...ShowcasesFragment
            }
        ` }
        render={ data => <InitStateWithGraphql data={ data } /> }
    />
}

export default InitStateWithGraphqlContainer
