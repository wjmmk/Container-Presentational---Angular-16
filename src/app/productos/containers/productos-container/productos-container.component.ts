import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductosService } from '../../productos-service.service';

@Component({
  selector: 'app-productos-container',
  templateUrl: './productos-container.component.html',
  styleUrls: ['./productos-container.component.scss']
})
export class ProductosContainerComponent implements OnInit {
  public productos: any[] = [];
  cargando: boolean = true;

  constructor(
    private productosService: ProductosService
  ) { }

  productsTotal$ = this.productosService.productosVenta$;

  ngOnInit(): void {
    this.productosService.productosVenta$.subscribe(
      productos => {
        this.productos = productos;
        this.cargando = false;
      }
    );
  }

  manejarCompra(producto: any) {
    console.log('Producto comprado:', producto);
  }
}
