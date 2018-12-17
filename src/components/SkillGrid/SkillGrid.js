import React from 'react'
import styles from './SkillGrid.module.scss'
import * as R from 'ramda'
import { ReactComponent as DropdownArrow } from '../../assets/icons/arrow_drop_down.svg'
import classnames from 'classnames'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import SkillBadge from '../SkillBadge'

const sortBySkillLevel = R.sortWith([
    R.descend(R.prop('skillLevel')),
    R.descend(R.prop('years'))
])

const filterByRating = ratingCheck => skills => R.filter(R.pipe(
    R.prop('rating'),
    ratingCheck
), skills)

const filterByRatingAndSort = ratingCheck => R.pipe(
    filterByRating(ratingCheck),
    sortBySkillLevel
)

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
            skills = [],
            onSkillClick
        } = this.props

        const top5Skills = filterByRatingAndSort(
            // Skills with rating that have a value and less than 4
            R.both(
                R.complement(R.isNil),
                R.lte(R.__, 4)
            )
        )(skills)

        const additionalSkills = filterByRatingAndSort(
            // Skills with rating that have a value and less than 4
            R.either(
                R.isNil,
                R.gt(R.__, 4)
            )
        )(skills)

        const Skill = skill => {
            return (
                <div className={ styles.skillContainer } key={ skill.id }>
                    <SkillBadge { ...skill } onClick={ onSkillClick } />
                </div>
            )
        }

        const containerProps = {
            className: classnames(
                createGlobalLocalClassnames(styles, 'SkillGrid')
            )
        }

        const additionalButtonProps = {
            className: classnames(
                styles.groupLabel,
                styles.additionalLabel
            ),
            onClick: this.toggleAdditional
        }

        const dropdownArrowContainerProps = {
            className: classnames({
                [styles.arrow]: true,
                [styles.up]: this.state.additionalOpen
            })
        }

        const additionalSkillsProps = {
            className: classnames({
                [styles.skills]: true,
                [styles.expandable]: true,
                [styles.hidden]: !this.state.additionalOpen
            })
        }

        return (
            <div { ...containerProps }>
                <div className={ styles.skillGroup }>
                    <div className={ styles.groupLabel }>Top 5</div>
                    <div className={ styles.skills }>
                        { top5Skills.map(Skill) }
                    </div>
                </div>

                <div className={ styles.skillGroup }>
                    <button { ...additionalButtonProps }>
                        <span>Additional</span>
                        <span { ...dropdownArrowContainerProps }>
                            <DropdownArrow />
                        </span>
                    </button>
                    <div { ...additionalSkillsProps }>
                        { additionalSkills.map(Skill) }
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillGrid
