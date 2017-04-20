
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
import { ProyectoData }                 from './project-data';
import { requestOptionsProvider }   from './default-request-options.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import {sinEspacios} from './validaciones.directives';
import { ProjectComponent } from './mostrar/mostrar.component';
const appRoutes:Routes=[
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  
{
    path:'proyecto',
    component: ProyectoComponent
  },
  {
    path:'listar',
    component: ProjectComponent
  },
  {
    path:'**',
    component: ContentComponent
  },
  {
    path:'*',
    component: ContentComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    sinEspacios, 
    ProyectoComponent,   
    ProjectComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ProyectoData),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
