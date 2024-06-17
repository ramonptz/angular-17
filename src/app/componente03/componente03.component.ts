import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.sass'
})
export class Componente03Component {
  //função para alterar a imagem
  alterarImagem() {
    if (this.imagem === 'assets/dia.jpeg') {
      this.imagem = 'assets/noite.jpeg'
    } else {
      this.imagem = 'assets/dia.jpeg';
    }
  }

  //variavel de imagem
  imagem: string = 'assets/dia.jpeg';

}
