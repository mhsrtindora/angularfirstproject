import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isWorking = "Tá funfando!";
  teste = "Testando valores";
  ninja = {
    nome: "Mateus",
    faixa: "Bacon"
  };

  alertMe(textoExibido: string) {
    alert(textoExibido);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
