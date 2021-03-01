import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HomeComponent, NavbarComponent]
})
export class AppComponent {
  ninja = {
    nome: "Teste",
    faixa: "branca"
  };

  title = 'ninja-classes';
  frase = 'Olá, Mateus! Seja bem vindo!';

  yell(e: any){
    alert("ALôôÔÔO bão ou bão");
  }
}
