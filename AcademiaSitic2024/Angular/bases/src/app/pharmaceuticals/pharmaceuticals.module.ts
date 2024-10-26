import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmaceuticalsComponent } from './pages/pharmaceuticals/pharmaceuticals.component';



@NgModule({
  declarations: [
    PharmaceuticalsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PharmaceuticalsComponent
  ]
})
export class PharmaceuticalsModule { }
