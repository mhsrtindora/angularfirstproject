import { Component, Input, OnInit } from '@angular/core';

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
  @Input() ninjas: any;

  alertMe(textoExibido: string, botaoChamador: string) {
    if(botaoChamador === "Zé Ruela"){
      alert(textoExibido);
    } else {
      alert("ALÔOOOOOOOOOOOO");
    }    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
