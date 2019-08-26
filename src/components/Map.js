import React, { Component } from "react";
import {
  Circle,
  CircleMarker,
  Map,
  Polygon,
  Popup,
  TileLayer
} from "react-leaflet";

const center = [51.505, -0.09];

const multiPolygon = [
  [[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]],
  [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]]
];

export default class VectorLayersExample extends Component {
  render() {
    return (
      <Map center={center} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={center} fillColor="blue" radius={200} />
        <CircleMarker center={[51.51, -0.12]} color="red" radius={20}>
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        <Polygon color="purple" positions={multiPolygon} />
      </Map>
    );
  }
}
