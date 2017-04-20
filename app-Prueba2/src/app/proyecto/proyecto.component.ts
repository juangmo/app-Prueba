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
  
  project:Proyecto= new Proyecto(0,'','')

  constructor(private proyectoService: ProyectoService) { }
 
  addProyecto (projectInsert: Proyecto) {
    if (!projectInsert) { return; }
    this.proyectoService.addProyecto(projectInsert)
                     .then(
                      
                       error =>  this.errorMessage = <any>error);
  }
}


