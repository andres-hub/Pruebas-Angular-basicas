import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: []
})
export class MedicoComponent implements OnInit {

  medicos: any[]= [];

  constructor(public _medicosService: MedicoService) { }

  ngOnInit(): void {
  }

  saludarMedico(nombre: string){
    return `Hola ${nombre}`;
  }

  obtenerMedicos(){

    this._medicosService.getMedicos()
    .subscribe((medicos:any[]) => this.medicos = medicos);

  }

}
