import { Component, OnInit } from '@angular/core';
import { Proyecto }              from '../models/project.model';
import { ProyectoService }       from '../services/project.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  providers:[ ProyectoService],
  styleUrls: ['./mostrar.component.css']
})
export class ProjectComponent implements OnInit {
  errorMessage: string;
  proyectos: Proyecto[];
  mode = 'Promise';

  constructor(private proyectoService: ProyectoService) { }

  

  ngOnInit() { this.getProyectos(); }

  getProyectos() {
    this.proyectoService.getProyectos()
                     .then(
                       proyectos => this.proyectos = proyectos,
                       error =>  this.errorMessage = <any>error);
  }

 
}
