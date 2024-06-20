import { Component } from '@angular/core';

@Component({
  selector: 'app-componente02',
  standalone: true,
  imports: [],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.scss'
})
export class Componente02Component {

  //Função para exibir uma messagem
  mensagem(){
    alert('Hello World!!!');
  }

}
