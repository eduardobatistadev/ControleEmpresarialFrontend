import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { Cliente } from 'src/app/shared/model/cliente';
import { NgxViacepService, Endereco, ErroCep, ErrorValues  } from '@brunoc/ngx-viacep';
import { CommonService } from 'src/app/shared/service/common.service';
import { CommonModule } from '@angular/common';
import { ListarComponent } from 'src/app/cliente/listar/listar.component';
import { LoadingComponent } from './../../fragments/loading/loading.component';

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
  alterarSucesso: boolean;
  loading: boolean;

  constructor(private clienteService: ClienteService,
              private viacep: NgxViacepService,
              private common: CommonService) { }

  ngOnInit(): void {
    this.loading = false;
    this.resetaForm();
    this.common.idCliente.subscribe(res => {
      if (res !== null) {
        this.buscarPorId(res);
      }
    });
  }
  buscarPorId(id: number) {
    this.clienteService.findById(id).subscribe(data => {
      this.cliente = data;
    });
  }

  onSubmit(): void {
    this.loading = true;
    this.clienteService.save(this.cliente).subscribe(
      data => {
        if (this.cliente.id) {
          this.alterarSucesso = true;
        } else {
          this.cadastroSucesso = true;
        }
        this.cliente = new Cliente();
        this.loading = false;
        this.reload();
        this.clienteForm.reset();
      },
      errors => {
        console.log(errors);
        this.loading = false;
        this.cadastroSucesso = false;
        this.trataErros(errors.status, errors.message);
      });
  }

  trataErros(codigo: number, message: string) {
    if (codigo === 0) {
      this.erroForm = 'O servidor está parado ou offline';
    }
    switch (codigo) {
      case 0: this.erroForm = 'O servidor está parado ou offline'; break;
      default: this.erroForm = 'Ops, algo deu muito errado, mensagem de erro: ' + message; break;
    }
  }

  resetaForm(){
    this.cliente = new Cliente();
    this.cadastroSucesso = false;
    this.alterarSucesso = false;
    this.loading = false;
    this.common.setEditClienteId(null);
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

  cancelar() {
    this.resetaForm();
    this.clienteForm.reset();
    this.common.setEditClienteId(null);
  }

}
