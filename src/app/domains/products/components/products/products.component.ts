import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input({required: true}) img: string= '';
  @Input({required: true}) price: number= 0;
  @Input({required: true}) title: string= '';

  @Output() pulsar = new EventEmitter();

  addToCartHandler(){
    console.log('click desde el hijo');
    this.pulsar.emit('mensaje desde el hijo ' +  this.title);
  }
}
