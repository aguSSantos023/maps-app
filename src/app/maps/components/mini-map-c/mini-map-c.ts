import { AfterViewInit, Component, ElementRef, input, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../../environments/environment.development';

mapboxgl.accessToken = environment.mapboxKey

@Component({
  selector: 'app-mini-map-c',
  imports: [],
  templateUrl: './mini-map-c.html',
  styleUrl: './mini-map-c.css',
})
export class MiniMapC implements AfterViewInit{

  divElement = viewChild<ElementRef>('map');

  map = signal<mapboxgl.Map | null>(null)

  lngLat = input.required<{lng: number, lat: number}>()
  zoom = input<number>(14)

  async ngAfterViewInit() {

    if (!this.divElement()?.nativeElement) return

    const element = this.divElement()!.nativeElement


    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat(), // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
      interactive: false,
      pitch: 60

    });

    new mapboxgl.Marker().setLngLat(this.lngLat()).addTo(map)

  }
}
