import React from 'react'
import classnames from 'classnames'
import { ReactComponent as DownArrowIcon } from '../../assets/images/arrow_drop_down.svg'
import Link from '../Link'
import { debounce, createHashHref } from '../../scripts/utils'
import { SECTION_IDS } from '../../constants'
import styles from './Hero.module.scss'
import EventListener, { withOptions } from 'react-event-listener'

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
        this.handleOnWindowScroll = this.handleOnWindowScroll.bind(this)
        this.handleOnWindowResize = this.handleOnWindowResize.bind(this)
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

        const debouncedHandleWindowResize = debounce(this.handleOnWindowResize, this.WINDOW_CHANGE_DEBOUNCE_DURATION)
        const windowEventListener = (
            <EventListener
                target="window"
                onResize={ debouncedHandleWindowResize }
                onScroll={ withOptions(debouncedHandleWindowResize, { passive: true, capture: false }) }
            />
        )

        return (
            <div { ...heroProps }>
                { windowEventListener }

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
