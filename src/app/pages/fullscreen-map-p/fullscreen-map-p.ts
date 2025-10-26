import { AfterViewInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment.development';
import { DecimalPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey

@Component({
  selector: 'app-fullscreen-map-p',
  imports: [DecimalPipe],
  templateUrl: './fullscreen-map-p.html',
  styleUrl: './fullscreen-map-p.css',
})
export class FullscreenMapP implements AfterViewInit {

  divElement = viewChild<ElementRef>('map');

  map = signal<mapboxgl.Map | null>(null)

  zoom = signal(14)

  zoomEffect = effect(() => {
    if (!this.map) return


    this.map()?.zoomTo(this.zoom())
  })

  async ngAfterViewInit() {

    if (!this.divElement()?.nativeElement) return

    const element = this.divElement()!.nativeElement

    console.log(element);

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
    });

    this.mapListeners(map)

  }

  mapListeners( map: mapboxgl.Map ) {

    map.on('zoomend', event => {
      const newZoom = event.target.getZoom()
      this.zoom.set(newZoom)

    })

    this.map.set(map)

  }


}
