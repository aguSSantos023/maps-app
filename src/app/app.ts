import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarC } from "./shared/components/navbar-c/navbar-c";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('maps-app');
}
