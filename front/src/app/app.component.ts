import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BitsyCompComponent } from './bitsy-comp/bitsy-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BitsyCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bitsy-studying';
  subtitle = 'just a little bitsy thing'
}
