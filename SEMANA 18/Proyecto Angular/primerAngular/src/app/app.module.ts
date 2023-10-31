import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//dr necetita el cliente https

import { HttpClientModule } from '@angular/common/http';
import { GrupoComponent } from './grupo/grupo.component';
import { ListarcursoComponent } from './listarcurso/listarcurso.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ProfesorComponent } from './profesor/profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    GrupoComponent,
    ListarcursoComponent,
    EstudianteComponent,
    ProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
