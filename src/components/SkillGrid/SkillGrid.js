import React from 'react'
import styles from './SkillGrid.module.scss'
import * as R from 'ramda'
import { ReactComponent as DropdownArrow } from '../../assets/images/arrow_drop_down.svg'
import classnames from 'classnames'
import { createGlobalLocalClassnames } from '../../scripts/utils'
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

        const top5Skills = skills.filter(R.pipe(
            R.prop('rating'),
            R.both(
                R.complement(R.isNil),
                R.lte(R.__, 4)
            )
        ))

        const additionalSkills = skills.filter(R.pipe(
            R.prop('rating'),
            R.either(
                R.isNil,
                R.gt(R.__, 4)
            )
        ))

        const Skill = skill => {
            return (
                <div className={ styles.skillContainer } key={ skill.id }>
                    <SkillBadge { ...skill } />
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
