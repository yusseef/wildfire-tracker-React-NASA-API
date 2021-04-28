import React from 'react'

const LocationinfoBox = ({info}) => {
    return (
        <div className="location-info">
            <h2>Event Location info</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>title: <strong>{info.title}</strong></li>
                
            </ul>
        </div>
    )
}

export default LocationinfoBox
