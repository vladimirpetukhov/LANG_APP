import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import WMSCapabilities from 'ol/format/WMSCapabilities';

import 'ol/ol.css';
declare var $: any;

@Injectable()
export class WmsCapsUtilsService {

  private readonly base_url: string;
  private wms_map_caps: any;
  private props: string[];

  constructor(
    private http: HttpClient
  ) {
    this.base_url ='https://sedac.ciesin.columbia.edu/geoserver/ows';
    this.props = new Array<string>();
    this.wms_map_caps = this.wms_caps_utils();
  }

  private wms_caps_utils() {
    $.ajax({
      context: this,
      url: "http://localhost:8081/api/map",
      async: false,
      success: (response:any)=> {
        var wms_parser = new WMSCapabilities();
        console.log(response);
        this.wms_map_caps = wms_parser.read(response);
      },
      error: function () {
        alert("Failed WMS capabilities information");
      }
    });
    return this.wms_map_caps;
  }

  public getLayers() {

    return this.wms_map_caps['Capability']['Layer']['Layer'];
  };

  public get_boundingbox () {
    return this.wms_map_caps['Capability'].Layer.BoundingBox[0];
  };
}
