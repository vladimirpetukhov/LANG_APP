
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { WmsCapsUtilsService } from './map/WmsCapsUtils.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { MapService } from './map/map.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SlideMenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [WmsCapsUtilsService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
