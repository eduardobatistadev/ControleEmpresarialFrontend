import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { Cliente } from 'src/app/shared/model/cliente';
import { NgxViacepService, Endereco, ErroCep, ErrorValues  } from '@brunoc/ngx-viacep';
import { CommonService } from 'src/app/shared/service/common.service';
import { ListarComponent } from 'src/app/cliente/listar/listar.component';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  @ViewChild('clienteForm') clienteForm;
  @ViewChild('cep') cep;
  cliente = new Cliente();
  erroEndereco: string;
  erroForm: string;
  cadastroSucesso: boolean;

  constructor(private clienteService: ClienteService, 
              private viacep: NgxViacepService,
              private common: CommonService) { }

  ngOnInit(): void {
    this.resetaForm();
  }

  onSubmit(): void {
    console.log(this.cliente);
    this.clienteService.save(this.cliente).subscribe(
      data => {
        this.cadastroSucesso = true;
        this.cliente = new Cliente();
        this.reload();
        this.clienteForm.reset();
      },
      error => {
        console.log(error);
        this.cadastroSucesso = false;
    });
  }

  resetaForm(){
    this.cliente = new Cliente();
    this.cadastroSucesso = false;
  }

  reload(){
    this.common.setSubject(true);
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
