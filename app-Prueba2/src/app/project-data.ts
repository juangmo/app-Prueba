import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ProyectoData implements InMemoryDbService {
  createDb() {
    let proyectos = [
      
     
    ];
    return {proyectos};
  
  }
}