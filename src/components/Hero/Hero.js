import React from 'react'
import classnames from 'classnames'
import { ReactComponent as DownArrowIcon } from '../../assets/images/arrow_drop_down.svg'
import Link from '../Link'
import { debounce } from '../../scripts/utils'
import styles from './Hero.module.scss'

class Hero extends React.PureComponent {
    constructor(props) {
        super(props)

        this.heroRef = React.createRef()
        this.state = { height: null }
    }

    componentDidMount() {
        this.updateHeight()

        // Debounce the window resize event to improve performance
        window.addEventListener('resize', debounce(this.updateHeight, 66))
    }

    updateHeight = () => {
        if (this.heroRef.current) {
            // Make hero fill out the rest of the screen
            const newHeight = window.innerHeight - this.heroRef.current.offsetTop

            this.setState({ height: newHeight })
        }
    }

    render() {
        const {
            backgroundUrl,
            className
        } = this.props

        const {
            height
        } = this.state

        const heroProps = {
            className: classnames(styles.Hero, className),
            style: {
                height: `${ height }px`,
                backgroundImage: `url(${ backgroundUrl })`
            },
            ref: this.heroRef
        }

        const childrenClassnames = classnames(
            'row',
            styles.children
        )

        return (
            <div { ...heroProps }>
                <div className={ childrenClassnames }>
                    { this.props.children }
                </div>

                <Link className="scrolldown" to="/#about" smoothScroll>
                    <DownArrowIcon />
                </Link>
            </div>
        )
    }
}

export default Hero
