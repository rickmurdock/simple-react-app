import React, { Component } from 'react';
import moment from 'moment';
import earthquakes from '../data/earthquakes'; 

export default class EarthquakeList extends Component {
  render () {
    let quakes = earthquakes.features.map((features)=> {
      return(
        <div className="col-sm-6" key={features.id}>
          <div className="card" >
            <div className="card-block">
              <h4 className="card-title">{features.properties.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {features.properties.mag}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment(features.properties.time).format('llll')}</h6>
              <p className="card-text">Coordinates: {features.geometry.coordinates}</p>

              <a href={features.properties.url} className="card-link">USGS Event Link</a>

            </div>
          </div>
        </div>
      )
    });
    return(
      <div className="quake-list">
        <div className="row">
          {quakes}
        </div>
      </div>
    )
  }
}