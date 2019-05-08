import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavEmpresaComponent } from '../../_componentes/nav-empresa/nav-empresa.component';
import { EditarEmpresaComponent } from '../../_componentes/editar-empresa/editar-empresa.component'
import { EmpresaFormModel } from 'src/app/_formModel/empresa.form-model';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    NavEmpresaComponent,
    EditarEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule
  ],
  providers: [
    EmpresaFormModel,
  ]
})
export class EmpresaModule { }