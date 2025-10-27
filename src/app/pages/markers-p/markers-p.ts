import { AfterViewInit, Component, ElementRef, OnInit, signal, viewChild } from '@angular/core';
import mapboxgl, { LngLat, LngLatLike } from 'mapbox-gl';
import { environment } from '../../../environments/environment.development';
import { v4 as UUIDv4 } from 'uuid'
import { JsonPipe } from '@angular/common';
mapboxgl.accessToken = environment.mapboxKey


interface Marker {
  id: string;
  mapboxMarker: mapboxgl.Marker;
}

@Component({
  selector: 'app-markers-p',
  imports: [JsonPipe],
  templateUrl: './markers-p.html',
  styleUrl: './markers-p.css',
})
export class MarkersP implements AfterViewInit {

  divElement = viewChild<ElementRef>('map');

  map = signal<mapboxgl.Map | null>(null)

  markers = signal<Marker[]>([])


  async ngAfterViewInit() {

    if (!this.divElement()?.nativeElement) return

    const element = this.divElement()!.nativeElement


    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [ -6.118422, 36.690855 ], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    // const marker = new mapboxgl.Marker({
    //   draggable: false,
    //   color: '#1c1c1c'
    // })
    // .setLngLat([-6.118422, 36.690855])
    // .addTo(map)

    // marker.on('dragend', event => {
    //   console.log(event);

    // })

    this.mapListeners(map)

  }



  mapListeners( map: mapboxgl.Map ) {


    map.addControl( new mapboxgl.FullscreenControl() )
    map.addControl( new mapboxgl.NavigationControl() )
    map.addControl( new mapboxgl.ScaleControl() )


    map.on('click', event => this.mapClick(event))



    this.map.set(map)

  }

  mapClick( event: mapboxgl.MapMouseEvent){
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    if (this.map() === null) return

    const marker = new mapboxgl.Marker({
      color: color
    })
    .setLngLat(event.lngLat)
    .addTo(this.map()!)

    const newMarker: Marker = {
      id: UUIDv4(),
      mapboxMarker: marker
    }

    this.markers.update(markers => [newMarker, ...markers])

    console.log(this.markers());


  }

  flyToMarker( lngLat: LngLatLike ){
    if (!this.map) return

    this.map()?.flyTo({
      center: lngLat
    })

  }

  deleteMarker(marker: Marker){

    if (!this.map) return

    const map = this.map()!

    marker.mapboxMarker.remove()

    this.markers.set(this.markers().filter(m => m.id !== marker.id))
  }




}
