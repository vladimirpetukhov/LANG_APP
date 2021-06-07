import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { WmsCapsUtilsService } from './WmsCapsUtils.service';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

const provider = new OpenStreetMapProvider();
import 'proj4'
import { MapService } from './map.service';
import { parseXML } from 'jquery';

const projDef = '+proj=tmerc +lat_0=0 +lon_0=25 +k=1 +x_0=25500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map: any;

  constructor(private mapService: MapService, private wmsService: WmsCapsUtilsService) {

  }

  private initMap(): void {

    var ls = this.wmsService.getLayers();


    //console.log(layers);
    var map = new L.Map('map', {
      center: new L.LatLng(0.000000, 0.000000),
      zoom: 1,
      attributionControl: true,
      zoomControl: false,
      minZoom: 2
    });

    // for (const layer of layers) {
    //   console.log(layer.Name);
    //   var wmsLayer1 = L.tileLayer.wms("http://sedac.ciesin.columbia.edu/geoserver/wms", {
    //   layers: layer.Name,
    //   format: 'image/png',
    //   transparent: false
    // });
    // map.addLayer(wmsLayer1);
    // }

    var myIcon = L.icon({
      iconUrl: 'https://www.google.com/search?q=marker+icon+png&rlz=1C1CHBD_bgBG905BG905&sxsrf=ALeKk00F8z7KaSdofXlBD3FP1bcSBvWWPw:1623009247343&tbm=isch&source=iu&ictx=1&fir=v_PVA-o3bvPvNM%252CHNyjQQxmV6nlUM%252C_&vet=1&usg=AI4_-kT_c2L8lbQBnK2H-VJiBEtS7DM3wQ&sa=X&ved=2ahUKEwj4ip7N5IPxAhU6_rsIHbEtDIwQ9QF6BAgKEAE&biw=1707&bih=803&dpr=1.13#imgrc=FM3FTgUHBz7SuM',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
    });

    const searchControl = GeoSearchControl({
      provider: provider, // required
      showMarker: true, // optional: true|false  - default true
      showPopup: true, // optional: true|false  - default false
      marker: {
        // optional: L.Marker    - default L.Icon.Default
        icon: myIcon,
        draggable: false,
      },
      // optional: function    - default returns result label
      maxMarkers: 1, // optional: number      - default 1
      retainZoomLevel: false, // optional: true|false  - default false
      animateZoom: true, // optional: true|false  - default true
      autoClose: false, // optional: true|false  - default false
      searchLabel: 'Enter address', // optional: string      - default 'Enter address'
      keepResult: true, // optional: true|false  - default false
      updateMap: true, // optional: true|false  - default true // optional: number      - default 250

    }).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      opacity: 1.2
    }).addTo(map);

    var wmsLayer1 = L.tileLayer.wms("http://sedac.ciesin.columbia.edu/geoserver/wms", {
      layers: 'gpw-v4:gpw-v4-population-density_2015',
      format: 'image/png',
      transparent: false
    });
    map.addLayer(wmsLayer1);



    var wmsLayer2 = L.tileLayer.wms("http://sedac.ciesin.columbia.edu/geoserver/wms", {
      layers: 'lulc:lulc-global-grid-prob-urban-expansion-2030',
      format: 'image/png',
      transparent: false
    });
    map.addLayer(wmsLayer2);






  }


  ngAfterViewInit(): void {
    this.initMap();
  }

}
