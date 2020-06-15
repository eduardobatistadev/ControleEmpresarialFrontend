import { Component, OnInit } from '@angular/core';
import { ProjetoService } from 'src/app/shared/service/projeto.service';
import { Projeto } from 'src/app/shared/model/projeto';
import { NgxViacepService, Endereco, ErroCep, ErrorValues } from '@brunoc/ngx-viacep';

@Component({
  selector: 'app-cadastrar-projeto',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  projeto = new Projeto();
  erroEndereco: string;
  erroForm: string;

  constructor(private projetoService: ProjetoService, private viacep: NgxViacepService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.projeto);
    this.projetoService.save(this.projeto).subscribe(
      data => {},
      error => {
        console.log(error);
    });
  }

  buscaEnderecoPorCep(){
    this.viacep.buscarPorCep(this.projeto.cep).then( ( endereco: Endereco ) => {
      this.projeto.bairro = endereco.bairro;
      this.projeto.cidade = endereco.localidade;
      this.projeto.rua = endereco.logradouro;
      this.projeto.estado = endereco.uf;
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
