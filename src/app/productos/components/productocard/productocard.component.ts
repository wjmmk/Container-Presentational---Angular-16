import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-productocard',
  templateUrl: './productocard.component.html',
  styleUrls: ['./productocard.component.scss']
})
export class ProductocardComponent {

  @Input() producto!: { nombre: string; descripcion: string; precio: number };
  @Output() productoComprado = new EventEmitter<void>();

  comprar() {
    this.productoComprado.emit();
  }

}
