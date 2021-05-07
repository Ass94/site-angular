import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.component.html',
  styleUrls: ['./duvidas.component.css']
})
export class DuvidasComponent implements OnInit {

  exibir1: boolean = false;
  exibir2: boolean = false;
  exibir3: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  exibirConteudop1(): void {
    if (this.exibir1 == false) {
      this.exibir1 = true;
    } else {
      this.exibir1 = false;
    }
    
  }

  exibirConteudop2(): void {
    if (this.exibir2 == false) {
      this.exibir2 = true;
    } else {
      this.exibir2 = false;
    }
    
  }

  exibirConteudop3(): void {
    if (this.exibir3 == false) {
      this.exibir3 = true;
    } else {
      this.exibir3 = false;
    }
    
  }



}
