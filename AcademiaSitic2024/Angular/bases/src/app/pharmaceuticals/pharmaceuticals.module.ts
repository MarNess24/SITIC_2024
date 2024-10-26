import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmaceuticalsComponent } from './pages/pharmaceuticals/pharmaceuticals.component';
import { MatInputModule } from'@angular/material/input';
import { MatSelectModule } from'@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListComponent } from './components/list/list.component';
import { AddPharmaceuticalsComponent } from './components/add-pharmaceuticals/add-pharmaceuticals.component';


@NgModule({
  declarations: [
    PharmaceuticalsComponent,
    ListComponent,
    AddPharmaceuticalsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PharmaceuticalsComponent
  ]
})
export class PharmaceuticalsModule { }
