import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quantidadeCoxinha: number = 0;
  quantidadeHotdog: number = 0;
  quantidadeBala: number = 0;
  totalConta: number = 0;

  constructor() {}

  adicionarHotdog() {
    this.quantidadeHotdog++;
    this.calcularTotalConta();
  }

  adicionarCoxinha(){
    this.quantidadeCoxinha++;
    this.calcularTotalConta();
  }

  adicionarBala(){
    this.quantidadeBala++;
    this.calcularTotalConta();
  }

  removerHotdog() {
    if(this.quantidadeHotdog > 0){
      this.quantidadeHotdog--;
      this.calcularTotalConta();
    }
  }

  removerCoxinha(){
    if(this.quantidadeCoxinha > 0){
      this.quantidadeCoxinha--;
      this.calcularTotalConta();
    }
  }

  removerBala(){
    if(this.quantidadeBala > 0){
      this.quantidadeBala--;
      this.calcularTotalConta();
    }
  }

  calcularTotalConta(){
    this.totalConta = 0;
    this.totalConta += this.quantidadeHotdog * 5;
    this.totalConta += this.quantidadeCoxinha * 3.5;
    this.totalConta += this.quantidadeBala * 0.25;
  }

  limpar(){
    this.quantidadeBala = 0;
    this.quantidadeCoxinha = 0;
    this.quantidadeHotdog = 0;
    this.calcularTotalConta();
  }
}
