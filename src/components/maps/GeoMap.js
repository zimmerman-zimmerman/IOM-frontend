import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import { namedGeoJson } from "./country_data";
import { Map, TileLayer, ZoomControl } from "react-leaflet";
import _ from "lodash";
import { format } from "d3-format";
import { scaleLinear } from 'd3-scale'
import { withRouter } from "react-router";
import Button from 'antd/es/button';
import Control from "react-leaflet-control";
import GeoJsonUpdatable from "./GeoJsonUpdatable";
import { injectIntl, intlShape } from "react-intl";

import '../../styles/GeoMap.scss';
import * as genericActions from "../../services/actions/generic";
import {connect} from "react-redux";
import GenericDialog from "../dialogWindow/GenericDialog/GenericDialog";
import MapToolTip from "./MapToolTip/MapToolTip";


const colors = ["#CDDC39", "#4CAF50", "#795548"];

class GeoMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapShouldBeReloaded: false,
      mapColour: "#fff",
      minYear: 1950,
      maxYear: 2020,
      yearSlider: 2010,
      yearSliderDefault: 2010,
      bounds: {},
      center: [21.7, 25.1],
      zoom: props.zoom || 2,
      maxValue: 2500,
      minValue: 0,
      midValue: 0,
      legendValues: [
        { text: "2500", value: 2500 },
        { text: "2000", value: 2000 },
        { text: "1500", value: 1500 },
        { text: "1000", value: 1000 }
      ],
      currentIndicatorName: "",
      geoJSONData: {
        type: "FeatureCollection",
        features: []
      }
    };

    this.onEachFeature = this.onEachFeature.bind(this);
    this.initializeLayers = this.initializeLayers.bind(this);
    this.getCenter = this.getCenter.bind(this);
    this.goToCountryPortal = this.goToCountryPortal.bind(this);
  }

    Trans = (id) => {
        const { intl } = this.props;
        return intl.formatMessage({id, defaultMessage: 'Show Summary'});
    };

  initializeLayers = () => {
    const { data, tooltipName } = this.props;

    this.getCenter();

    if (data.length) {
      const maxValue = _.maxBy(data, o => o.activity_count).activity_count;
      let minValue = _.minBy(data, o => o.activity_count).activity_count;
      let midValue = (maxValue + minValue) / 2;
      if (minValue === maxValue) {
        minValue = 0;
      }
      const legendValues = this.getLegendValues(maxValue, minValue);

      const features = _.chain(data)
        .map(o => {
          let country = namedGeoJson[o.recipient_country.code];
          if (!country) {
            return null;
          }
          country.properties.name = o.recipient_country.name;
          country.properties.code = o.recipient_country.code;
          country.properties.budgetValue = o.value;
          country.properties.activitiesValue = o.activity_count;
          country.properties.value = o.activity_count;
          country.properties.tooltipName = tooltipName;
          return country;
        })
        .filter(o => o != null)
        .value();

      const geoJSONData = {
        type: "FeatureCollection",
        features: features
      };

      this.setState({
        geoJSONData: geoJSONData,
        maxValue: maxValue,
        minValue: minValue,
        midValue: midValue,
        legendValues: legendValues
      });
    }
  };

  getCenter() {
    const country = namedGeoJson[this.props.country];
    if (country) {
      const polygon = L.polygon(country.geometry.coordinates);
      const center = polygon.getBounds().getCenter();
      this.setState({
        center: [center.lng, center.lat]
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data.length !== this.props.data.length) {
      this.initializeLayers();
      //this.getCenter()
    }
    if (prevProps.country !== this.props.country) {
      this.getCenter();
    }
  }

  componentDidMount() {
    this.initializeLayers();
  }

  getLegendValues(maxValue, minValue) {
    const formatValue = maxValue > 10 ? ".2s" : maxValue > 0.1 ? ".2f" : ".4f";
    var x = scaleLinear().domain([minValue, maxValue * 1.2]);
    return x.ticks(6).map(o => {
      return {
        value: o,
        text: format(formatValue)(o)
      };
    });
  }

  goToCountryPortal(code) {
    this.props.history.push(`/countries/${code}`);
  }

  onEachFeature(feature, layer) {
    const getColor = scaleLinear()
      .domain([this.state.minValue, this.state.midValue, this.state.maxValue])
      .range(colors);

    layer.setStyle({
      fillOpacity: 0.6,//0.2 + (feature.properties.value / this.state.maxValue * 0.6),
      fillColor: getColor(feature.properties.value)
    });
    // TODO: value is project_amount or value

    if (feature.properties && feature.properties.name) {
      const tooltipContent = ReactDOMServer.renderToString(
        <MapToolTip code={feature.properties.code} name={feature.properties.name}
                    budgetValue={feature.properties.budgetValue}/>
      );

      layer.bindPopup(tooltipContent);

      layer.on("mouseover", function(e) {
        this.openPopup();
      });

      const that = this;
      layer.on("click", function(e) {
        that.setState({
          bounds: e.target._bounds
        }, that.props.history.push(`/countries/${feature.properties.code}`));
      });
    }
  }

  getZoomValue() {
    const width = window.innerWidth;

    if(this.props.zoom)
    {
      return this.props.zoom;
    }
    else if(width > 3000 || (width > 1800 && width <= 2000)) {
      return 3
    } else if (width > 2000 && width <= 2700) {
      return 2
    } else if (width > 2000 && width <= 3000) {
      return 3
    } else if (width <= 1400) {
      return 1
    } else {
      return 2
    }
  }

  render() {
    const { center, bounds, geoJSONData, mapColour, legendValues } = this.state;

    const geoJson = this.props.geoJson ? this.props.geoJson : geoJSONData;

    console.log(geoJson);

    const getColor = scaleLinear()
      .domain([this.state.minValue, this.state.midValue, this.state.maxValue])
      .range(colors);

    var legendItems = legendValues.map((o, i) => {
      return (
        <div className="legend-item" key={i}>
          <i
            className="leaflet-legend-color-box"
            style={{
              opacity: 0.6,//this.state.maxValue ? (0.2 + (o.value / this.state.maxValue * 0.6)) : 0,
              color: getColor(o.value),
              background: getColor(o.value)
            }}
          />
          <label>{o.text}</label>
        </div>
      );
    });

    const desiredCenter = this.props.defCenter ? this.props.defCenter : center;


    return (
      <div>
        <div id="perspective-map" style={{ maxHeight: this.props.height, overflowY: "hidden" }}>
          <div id="map">
            <Map
              ref="map"
              center={desiredCenter}
              boundsOptions={bounds}
              zoom={this.getZoomValue()}
              minZoom={this.getZoomValue()}
              zoomControl={false}
              worldCopyJump={true}
              scrollWheelZoom={false}
              style={{ height: this.props.height, zIndex: 0 }}>
              <ZoomControl position="bottomright" />

              <TileLayer
                url="https://api.mapbox.com/styles/v1/zimmerman2014/cjg5196po1i442sp5gd40vspl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiemltbWVybWFuMjAxNCIsImEiOiJhNUhFM2YwIn0.sedQBdUN7PJ1AjknVVyqZw"
              />

              <GeoJsonUpdatable
                ref="geojson"
                data={geoJson}
                style={{
                  color: "white",
                  fillColor: mapColour,
                  fillOpacity: 0.5,
                  weight: 1,
                  opacity: 1,
                  dashArray: ""
                }}
                onEachFeature={this.onEachFeature}
              />

              <Control position="topleft" className="disclaimer-box">
                <div onClick={() =>
                    this.props.dispatch(genericActions.toggleModalRequest(
                        <GenericDialog text={this.Trans('disclaimer.text')}
                                       buttonText={this.Trans('disclaimer.button.text')}
                                       handleClick={() => this.props.dispatch(genericActions.toggleModalRequest(null, false))}/>, true))}>Disclaimer</div>
              </Control>

                {this.props.showSummary === false &&
                    <Control position="topright" >
                        <div>
                            <Button size="small" type="primary" ghost className="button-show" onClick={() => this.props.onShowSummary()}>
                                {this.Trans('summary.show')}
                            </Button>
                        </div>
                    </Control>
                }

              <Control position="bottomleft" className="supportLegend">
                <div>
                  <label>N of activities</label>
                  {
                    legendItems.reverse().map((l) => {
                      return l
                    })
                  }
                  <div className="legend-item">
                    <i
                      className="leaflet-legend-color-box"
                      style={{ color: "#dedede", background: "#dedede" }}
                    />
                    <label>no data</label>
                  </div>
                </div>
              </Control>
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

GeoMap.propTypes = {
    intl: intlShape.isRequired
};

export default (connect(null))(injectIntl(withRouter(GeoMap)));