import React from 'react'
import styles from './SkillGrid.module.scss'
import * as R from 'ramda'
import { ReactComponent as DropdownArrow } from '../../assets/images/arrow_drop_down.svg'
import classnames from 'classnames'
import SkillBadge from '../SkillBadge'

class SkillGrid extends React.Component {
    constructor(props) {
        super(props)

        const { additionalOpen = false } = props

        this.state = { additionalOpen }
    }

    toggleAdditional = () => {
        this.setState(state => {
            return {
                additionalOpen: !state.additionalOpen
            }
        })
    }

    render() {
        const {
            skills = []
        } = this.props

        const top5 = skills.filter(R.pipe(
            R.prop('rating'),
            R.both(
                R.complement(R.isNil),
                R.lte(R.__, 4)
            )
        ))

        const rest = skills.filter(R.pipe(
            R.prop('rating'),
            R.either(
                R.isNil,
                R.gt(R.__, 4)
            )
        ))

        const renderSkill = skill => {
            return (
                <div className={ styles.itemContainer } key={ skill.id }><SkillBadge { ...skill }/></div>
            )
        }

        const additionalLabelClassNames = classnames([ styles.groupLabel, styles.additionalLabel ])

        const arrowClassNames = classnames({
            [styles.arrow]: true,
            [styles.up]: this.state.additionalOpen
        })

        const additionalChildrenClassNames = classnames({
            [styles.items]: true,
            [styles.hidden]: !this.state.additionalOpen
        })
        return (
            <div className={ styles.container }>
                <div className={ styles.groupLabel }>Top 5</div>
                <div className={ styles.items } style={{ height: 'auto' }}>
                    { top5.map(renderSkill) }
                </div>

                <button
                    className={ additionalLabelClassNames }
                    onClick={ this.toggleAdditional }>
                    <span>Additional</span>
                    <span className={ arrowClassNames }>
                        <DropdownArrow />
                    </span>
                </button>
                <div className={ additionalChildrenClassNames }>
                    { rest.map(renderSkill) }
                </div>
            </div>
        )
    }
}

export default SkillGrid
