import axios, { AxiosRequestConfig } from "axios"
import WMSCapabilities from 'ol/format/WMSCapabilities';

declare var $: any;


export class MapServices {
    
    
    public static async getWmsCaps() {
        let initAxios = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }

        })
        return initAxios.get('https://sedac.ciesin.columbia.edu/geoserver/wms?request=getCapabilities');
    }


    public static async getBounds() {

    }

    public static async getLayers() {}


    

}

