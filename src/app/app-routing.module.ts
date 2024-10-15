import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcontainerComponent } from './formcontainer/formcontainer.component';
import { ProductocardComponent } from './productos/components/productocard/productocard.component';
import { ProductosContainerComponent } from './productos/containers/productos-container/productos-container.component';

const routes: Routes = [
  { path: '', component: FormcontainerComponent},
  { path: 'products', component: ProductosContainerComponent},
  { path: 'products/id', component: ProductosContainerComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
