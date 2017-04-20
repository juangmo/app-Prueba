import { Component, OnInit } from '@angular/core';
import { Proyecto }              from '../models/project.model';
import { ProyectoService }       from '../services/project.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  providers:[ ProyectoService],
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  errorMessage: string;
  proyectos: Proyecto[];
  mode = 'Promise';

  constructor(private proyectoService: ProyectoService) { }
 
  addProyecto (name: string) {
    if (!name) { return; }
    this.proyectoService.addProyecto(name)
                     .then(
                       proyecto  => this.proyectos.push(proyecto),
                       error =>  this.errorMessage = <any>error);
  }
}


