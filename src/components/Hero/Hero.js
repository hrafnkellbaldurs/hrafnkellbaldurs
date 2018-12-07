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
        this.state = {
            height: 95,
            heightUnit: 'vh'
        }
        this.updateHeight = this.updateHeight.bind(this)
        this.debouncedTryUpdateHeight = debounce(this.tryUpdateHeight, 66)
    }

    componentDidMount() {
        this.tryUpdateHeight()

        // Debounce the window resize event to improve performance
        window.addEventListener('resize', this.debouncedTryUpdateHeight)
        window.addEventListener('scroll', this.debouncedTryUpdateHeight)
    }

    componentWillUnmount() {
        // Remove listeners
        window.removeEventListener('resize', this.debouncedTryUpdateHeight)
        window.removeEventListener('scroll', this.debouncedTryUpdateHeight)
    }

    tryUpdateHeight = () => {
        if (this.heroRef.current && window.scrollY <= this.heroRef.current.offsetTop) {
            this.updateHeight()
        }
    }

    // Hero should not exceed window height
    getNewHeight(windowHeight, heroOffsetTop) {
        return windowHeight - heroOffsetTop
    }

    updateHeight() {
        if (this.heroRef.current) {
            // Make hero fill out the rest of the screen
            const newHeight = this.getNewHeight(window.innerHeight, this.heroRef.current.offsetTop)

            this.setState({ height: newHeight, heightUnit: 'px' })
        }
    }

    render() {
        const {
            backgroundUrl = '',
            className = '',
            children
        } = this.props

        const {
            height,
            heightUnit
        } = this.state

        const heroProps = {
            className: classnames(styles.Hero, className),
            style: {
                height: `${ height }${ heightUnit }`,
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
                    { children }
                </div>

                <Link className="scrolldown" to="/#about" smoothScroll>
                    <DownArrowIcon />
                </Link>
            </div>
        )
    }
}

export default Hero
