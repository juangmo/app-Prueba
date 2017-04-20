import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Proyecto } from '../models/project.model';

@Injectable()
export class ProyectoService {
  
  private proyectosUrl = 'app/proyectos';

  constructor (private http: Http) {}

  getProyectos (): Promise<Proyecto[]> {
    return this.http.get(this.proyectosUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  addProyecto (project: Proyecto): Promise<Proyecto> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.proyectosUrl, { project }, options)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}