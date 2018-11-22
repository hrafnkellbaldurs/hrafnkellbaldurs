import React from 'react'
import styles from './SkillGrid.module.scss'
import * as R from 'ramda'
import { ReactComponent as DropdownArrow } from '../../assets/images/arrow_drop_down.svg'
import classnames from 'classnames'

class SkillGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            additionalOpen: true
        }

        this.toggleAdditional = this.toggleAdditional.bind(this)
    }

    toggleAdditional() {
        this.setState({
            additionalOpen: !this.state.additionalOpen
        })
    }

    render() {
        const top5 = this.props.children.filter(x => R.both(
            R.complement(R.isNil),
            R.lte(R.__, 5)
        )(x.props.rating))

        const rest = this.props.children.filter(x => R.either(
            R.isNil,
            R.gte(R.__, 5)
        )(x.props.rating))

        const renderItem = item => {
            return (
                <div className={ styles.itemContainer }>{ item }</div>
            )
        }

        const additionalChildrenClassNames = classnames({
            [styles.items]: true,
            [styles.hidden]: !this.state.additionalOpen
        })

        const arrowClassNames = classnames({
            [styles.arrow]: true,
            [styles.up]: this.state.additionalOpen
        })

        return (
            <div className={ styles.container }>
                <div className={ styles.groupLabel }>Top 5</div>
                <div className={ styles.items } style={{ height: 'auto' }}>
                    { top5.map(renderItem) }
                </div>

                <button
                    className={ styles.groupLabel }
                    style={{ marginTop: '20px' }}
                    onClick={ this.toggleAdditional }>
                    <span>Additional</span>
                    <span className={ arrowClassNames }>
                        <DropdownArrow />
                    </span>
                </button>
                <div className={ additionalChildrenClassNames }>
                    { rest.map(renderItem) }
                </div>
            </div>
        )
    }
}

export default SkillGrid
