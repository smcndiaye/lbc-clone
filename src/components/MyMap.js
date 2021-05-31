import React from 'react';
import mapData from '../france.json'
import { Map,GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const MyMap = () => {
  const FStyle = {
     
      fillColor:'#3d6abe',
      strock:'#1e357d',

  }
  return (
    <Map style={{height:'320px',
      width:'330px',
      margin:'0px',
     
      background:'#fff',
    }}
      zoom={5}
      center={[ 46.7111, 1.7191 ]}
    >
      <GeoJSON style={FStyle} 
    data={mapData.features }/>
      </Map>
    
  )
}

export default MyMap



