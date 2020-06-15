import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { Cliente } from 'src/app/shared/model/cliente';
import { NgxViacepService, Endereco, ErroCep, ErrorValues  } from '@brunoc/ngx-viacep';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cliente = new Cliente();
  erroEndereco: string;
  erroForm: string;

  constructor(private clienteService: ClienteService, private viacep: NgxViacepService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.cliente);
    this.clienteService.save(this.cliente).subscribe(
      data => {},
      error => {
        console.log(error);
    });
  }

  buscaEnderecoPorCep(){
    this.viacep.buscarPorCep(this.cliente.cep).then( ( endereco: Endereco ) => {
      this.cliente.bairro = endereco.bairro;
      this.cliente.cidade = endereco.localidade;
      this.cliente.rua = endereco.logradouro;
      this.cliente.estado = endereco.uf;
      this.erroEndereco = '';
     }).catch( (error: ErroCep) => {
      switch (error.getCode()){
        case ErrorValues.CEP_NAO_ENCONTRADO:
          this.erroEndereco = 'CEP informado não existe';
          break;
        case ErrorValues.CEP_VAZIO:
          this.erroEndereco = 'CEP é obrigatório';
          break;
        case ErrorValues.CEP_INVALIDO:
          this.erroEndereco = 'CEP informado é invalido';
          break;
        case ErrorValues.CEP_MUITO_CURTO:
          this.erroEndereco = 'CEP informado é muito curto, um cep deve conter 8 digitos';
          break;
        case ErrorValues.CEP_MUITO_LONGO:
          this.erroEndereco = 'CEP informado é muito longo, um cep deve conter 8 digitos';
          break;
      }
     });
  }

}
