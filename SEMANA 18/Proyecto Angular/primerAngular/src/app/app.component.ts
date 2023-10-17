import { Component } from '@angular/core';
import { Cursos } from './model/cursos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Atributos 
  title = 'primerAngular';
  arregloDatos: Cursos [] = [
    { id : "1", nombre : "html5", descripcion : "111", tiempo : "1", usuarios : "", }
    { id : "2", nombre : "js", descripcion : "222", tiempo : "12", usuarios : "", }
    { id : "3", nombre : "jq", descripcion : "333", tiempo : "20", usuarios : "", }
    { id : "4", nombre : "html5", descripcion : "444", tiempo : "13", usuarios : "", }
    { id : "5", nombre : "html5", descripcion : "555", tiempo : "50", usuarios : "", }



  ]
}


nombre: string = "";
descripcion: string = "";   
tiempo: string = "";
usuarios: string = "";


