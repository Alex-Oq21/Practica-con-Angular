import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeraPractica';
  titulo: any = "Hola usuarios!";
  datos: any = {Descripcion:"Sitio para ver wallpaper de paisajes en HD"};
}
