import { Component, inject } from '@angular/core';
import { routes } from '../../../app.routes';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';


import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-navbar-c',
  imports: [RouterLink],
  templateUrl: './navbar-c.html',
  styleUrl: './navbar-c.css',
})
export class NavbarC {


  router = inject(Router)

  routes = routes.map(route => ({
    path: route.path,
    title: `${route.title ?? 'Maps en Angular'}`
  })).filter(route => route.path !== '**')

  pageTitle = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event.url),
      map(url => routes.find(route => `/${route.path}` === url)?.title ?? 'Mapas')
    )
  )









}
