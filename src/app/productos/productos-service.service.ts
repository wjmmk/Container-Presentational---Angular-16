import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, of } from 'rxjs';
//import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //Esta es la version Sencilla de la App.
  private productosVenta = new BehaviorSubject<any[]>(
    [
      { nombre: 'Lavadora', descripcion: 'Electrodomestico del hogar', precio: 100 },
      { nombre: 'Computador PC', descripcion: 'equipo tecnologico para trabajar', precio: 600 },
      { nombre: 'Celular', descripcion: 'equipo tecnologico para comunicarse', precio: 1000 },
    ]
  );

  productosVenta$ = this.productosVenta.asObservable();

  //############################################################

  // *** Ahora implementaremos la version mas avanzada de la App. ***

  obtenerProductos() {
    const  productos = [
      { nombre: 'Lavadora', descripcion: 'Electrodomestico del hogar', precio: 100 },
      { nombre: 'Computador PC', descripcion: 'equipo tecnologico para trabajar', precio: 600 },
      { nombre: 'Celular', descripcion: 'equipo tecnologico para comunicarse', precio: 1000 },
    ];
    return of(productos).pipe(delay(1000));
  }

  constructor() { }

  manejarCompra(producto: any) {
    console.log('Producto comprado:', producto);
  }

  getProduct(): Observable<any | null> {
    return this.productosVenta$.pipe(
      map((productosVenta) => productosVenta.find((producto) => producto.nombre === 'Lavadora') || null
    )
  );
 }

}
