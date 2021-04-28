import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationinfoBox from './LocationinfoBox'
const Map = ({eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    
    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({id: ev.id, title: ev.title})} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDWzhRp-_oBcLpJl_QlQtJNXgfDT9Ue91Q'}}
                defaultCenter = {center}
                defaultZoom = {zoom}
            >
                {markers}
                
            </GoogleMapReact>
            {locationInfo && <LocationinfoBox info={locationInfo} />}
        </div>
    )
}
Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756,
    },
    zoom: 6
}

export default Map
