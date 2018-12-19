import React from 'react'
import classnames from 'classnames'
import { ReactComponent as DownArrowIcon } from '../../assets/icons/arrow_drop_down.svg'
import Link from '../Link'
import { debounce, createHashHref, createGlobalLocalClassnames } from '../../scripts/utils'
import { SECTION_IDS } from '../../constants'
import styles from './Hero.module.scss'
import EventListener from 'react-event-listener'
import * as R from 'ramda'

class Hero extends React.PureComponent {
    constructor(props) {
        super(props)

        this.WINDOW_CHANGE_DEBOUNCE_DURATION = 66

        this.heroRef = React.createRef()
        this.state = {
            height: 95,
            heightUnit: 'vh'
        }
        this.updateHeight = this.updateHeight.bind(this)
        this.handleOnWindowScroll = debounce(this.handleOnWindowScroll.bind(this), this.WINDOW_CHANGE_DEBOUNCE_DURATION)
        this.handleOnWindowResize = debounce(this.handleOnWindowResize.bind(this), this.WINDOW_CHANGE_DEBOUNCE_DURATION)
        this.onWindowChange = this.onWindowChange.bind(this)
    }

    handleOnWindowResize() {
        this.onWindowChange(window)
    }

    handleOnWindowScroll() {
        this.onWindowChange(window)
    }

    onWindowChange(windowObject = {}) {
        this.updateHeightWhenVisible(windowObject.scrollY, windowObject.innerHeight)
    }

    componentDidMount() {
        this.updateHeightWhenVisible(window.scrollY, window.innerHeight)
    }

    // Only update height when Hero is in the viewport
    updateHeightWhenVisible = (containerScrollY, containerHeight) => {
        if (this.heroRef.current && containerScrollY <= this.heroRef.current.offsetTop) {
            this.updateHeight(containerHeight)
        }
    }

    // Hero should not exceed container height
    getNewHeight(containerHeight, heroOffsetTop) {
        return containerHeight - heroOffsetTop
    }

    updateHeight(containerHeight) {
        if (this.heroRef.current) {
            // Make hero fill out the rest of the screen
            const newHeight = this.getNewHeight(containerHeight, this.heroRef.current.offsetTop)
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

        const backgroundUrlMissing = R.either(R.isNil, R.isEmpty)(backgroundUrl)
        const heroProps = {
            className: classnames(createGlobalLocalClassnames(styles, 'Hero'), className),
            style: {
                height: `${ height }${ heightUnit }`,
                backgroundImage: backgroundUrlMissing ? 'none' : `url(${ backgroundUrl })`
            },
            ref: this.heroRef
        }

        const childrenClassnames = classnames(
            'row',
            styles.children
        )

        const windowEventListener = (
            <EventListener
                target="window"
                onResize={ this.handleOnWindowResize }
                onScroll={ this.handleOnWindowScroll }
            />
        )

        return (
            <div { ...heroProps }>
                { windowEventListener }

                <div className="overlay"></div>

                <div className={ childrenClassnames }>
                    { children }
                </div>

                <Link className="scrolldown" to={ createHashHref(SECTION_IDS.ABOUT) } smoothScroll>
                    <DownArrowIcon />
                </Link>
            </div>
        )
    }
}

export default Hero
