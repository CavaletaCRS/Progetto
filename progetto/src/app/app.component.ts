import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarVerticalComponent } from "./nav-bar/nav-bar-vertical/nav-bar-vertical.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarVerticalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progetto';
}
