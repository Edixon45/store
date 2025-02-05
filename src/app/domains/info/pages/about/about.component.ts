import { Component, signal } from '@angular/core';
import {CounterComponent} from './../../../shared/components/counter/counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css' 
})
export class AboutComponent {
 duration= signal(1000);
 mesenge= signal('hola');

changeDuration(event:Event){
  const input = event.target as HTMLInputElement;
  this.duration.set(input.valueAsNumber);
}

changeMesenge(event:Event){
  const input = event.target as HTMLInputElement;
  this.mesenge.set(input.value);
}
}


