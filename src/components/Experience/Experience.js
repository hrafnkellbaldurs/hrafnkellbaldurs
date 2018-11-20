import React from 'react'

class Experience extends React.PureComponent {
    render() {
        const {
            icon,
            title,
            subtitle,
            startDate,
            endDate,
            description
        } = this.props

        return (
            <div className="row item">
                <div className="one columns">
                    <div style={{
                        fontSize: '40px',
                        width: '1em',
                        height: 'auto'
                    }}>
                        { icon }
                    </div>
                </div>
                <div className="eleven columns">
                    <h3>{ title }</h3>
    
                    <p className="info">
                        { subtitle }
                        <span>&bull;&nbsp;</span>
                        <em className="date">{ startDate } - { endDate }</em>
                    </p>
                    <p>{ description }</p>
                </div>
            </div>
        )
    }
}

export default Experience
