import { Component, OnInit, Input } from '@angular/core';
import { EmpresaService } from 'src/app/_servicios/empresa/empresa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {

  @Input('direccionFilter') direccionFilter: string;
  constructor(
    private _empresaSer: EmpresaService
  ) { }

  listEmpresas: Observable<any>

  getEmpresaDireccion() {
    this.listEmpresas = this._empresaSer.getEmprsaDireccion(this.direccionFilter);
  }

  formatDias(dias): string {
    let diasDisponible = []
    for (const dia in dias) {
      if (dias[dia] === true) {
        diasDisponible.push(dia)
      }
    }
    return diasDisponible.sort(this.daysOfWeekSorter).join(', ')
  }

  daysOfWeekSorter(x, y) {
    const daysOfWeek = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]
    return daysOfWeek.indexOf(x) - daysOfWeek.indexOf(y);
  }

  ngOnInit() {
    this.getEmpresaDireccion();
  }

}
