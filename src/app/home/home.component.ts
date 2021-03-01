import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Output() onYell = new EventEmitter();

  fireYellEvent(e: any) {
    this.onYell.emit(e);
  }

  alertMe(textoExibido: string) {
    alert(textoExibido);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
