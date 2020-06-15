import { Fornecedor } from './../../shared/model/fornecedor';
import { FornecedorService } from './../../shared/service/fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { NgxViacepService, Endereco, ErroCep, ErrorValues  } from '@brunoc/ngx-viacep';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  fornecedor = new Fornecedor();
  erroEndereco: string;
  erroForm: string;

  constructor(private fornecedorService: FornecedorService, private viacep: NgxViacepService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.fornecedor);
    this.fornecedorService.save(this.fornecedor).subscribe(
      data => {},
      error => {
        console.log(error);
    });
  }

  buscaEnderecoPorCep(){
    this.viacep.buscarPorCep(this.fornecedor.cep).then( ( endereco: Endereco ) => {
      this.fornecedor.bairro = endereco.bairro;
      this.fornecedor.cidade = endereco.localidade;
      this.fornecedor.rua = endereco.logradouro;
      this.fornecedor.estado = endereco.uf;
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
