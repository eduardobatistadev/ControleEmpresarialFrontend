import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjetoService } from 'src/app/shared/service/projeto.service';
import { Projeto } from 'src/app/shared/model/projeto';
import { NgxViacepService, Endereco, ErroCep, ErrorValues } from '@brunoc/ngx-viacep';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-cadastrar-projeto',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  @ViewChild('projetoForm') projetoForm;
  @ViewChild('cep') cep;
  projeto = new Projeto();
  erroEndereco: string;
  erroForm: string;
  cadastroSucesso: boolean;

  constructor(private projetoService: ProjetoService, 
              private viacep: NgxViacepService, 
              private common: CommonService) { }

  ngOnInit(): void {
    this.resetaForm();
  }

  onSubmit(): void {
    console.log(this.projeto);
    this.projetoService.save(this.projeto).subscribe(
      data => {
        this.cadastroSucesso = true;
        this.projeto = new Projeto();
        this.reload();
        this.projetoForm.reset();
      },
      error => {
        console.log(error);
        this.cadastroSucesso = false;
    });
  }

  resetaForm(){
    this.projeto = new Projeto();
    this.cadastroSucesso = false;
  }

  reload(){
    this.common.setSubject(true);
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
