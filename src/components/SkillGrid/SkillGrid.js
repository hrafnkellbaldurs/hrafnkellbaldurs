import React from 'react'
import styles from './SkillGrid.module.scss'

class SkillGrid extends React.PureComponent {
    render() {
        const { items = [] } = this.props

        return (
            <div className={ styles.container }>
                {
                    items.map(item => {
                        return (
                            <div className={ styles.item } key={ item.id }>
                                <img className={ styles.itemLogo } src={ item.logo.publicURL }/>
                                <span className={ styles.itemLabel }>
                                    { item.name }
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default SkillGrid
