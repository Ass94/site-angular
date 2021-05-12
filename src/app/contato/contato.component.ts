import { ClienteService } from './../service/cliente.service';
import { Cliente } from './../model/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  cliente: Cliente = new Cliente();

  exibir: boolean = false;

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
  }

  enviar(): void {
    this.service.insert(this.cliente)
    .subscribe(() => {
      alert('Solicitação enviada com sucesso!');
      this.cliente = new Cliente();
    })
  }

}
