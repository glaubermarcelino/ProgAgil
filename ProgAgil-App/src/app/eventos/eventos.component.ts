import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: any = [];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;
  filtroLista = '';

  constructor(private http: HttpClient) {

  }

  alternarImagem()
  {
    this.mostrarImagem = !this.mostrarImagem;
  }
  ngOnInit() {
    this.getEventos();
    
  }
  getEventos() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.eventos = response;
    }, error => {
        console.error(error);
    });
  }
}
