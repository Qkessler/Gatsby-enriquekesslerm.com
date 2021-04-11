import React, { Component } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export default class TravelMap extends Component {
  render() {
    const { center, zoom, markers } = this.props

    if (typeof window !== "undefined") {
      return (
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ width: "100%", height: "400px" }}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers !== null &&
            markers.map((m, index) => (
              <Marker key={index} position={m.position}>
                <Popup>{m.text}</Popup>
              </Marker>
            ))}
        </MapContainer>
      )
    }
    return null
  }
}
