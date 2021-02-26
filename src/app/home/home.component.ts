import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teste = "Testando valores";

  alertMe(textoExibido: string) {
    alert(textoExibido);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
