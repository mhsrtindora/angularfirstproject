import { Component } from '@angular/core';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HomeComponent, NavbarComponent, DirectoryComponent]
})
export class AppComponent {
  ninja = {
    nome: "Teste",
    faixa: "branca"
  };

  title = 'ninja-classes';
  frase = 'Olá, Mateus! Seja bem vindo!';
}
