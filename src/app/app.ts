import { Component } from '@angular/core';
import { ComponentaComponent } from './componenta/componenta.component';
import { ComponentbComponent } from './componentb/componentb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentaComponent, ComponentbComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}