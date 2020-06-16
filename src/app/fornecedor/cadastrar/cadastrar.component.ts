import { CommonService } from './../../shared/service/common.service';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './../listar/listar.component';
import { Fornecedor } from './../../shared/model/fornecedor';
import { FornecedorService } from './../../shared/service/fornecedor.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxViacepService, Endereco, ErroCep, ErrorValues } from '@brunoc/ngx-viacep';


@Component({
  providers: [ListarComponent],
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  @ViewChild('fornecedorForm') fornecedorForm;
  @ViewChild('cep') cep;
  fornecedor = new Fornecedor();
  erroEndereco: string;
  erroForm: string;
  cadastroSucesso: boolean;
  alterarSucesso: boolean;

  constructor(private fornecedorService: FornecedorService
    , private viacep: NgxViacepService
    , private listar: ListarComponent
    , private common: CommonService) { }

  ngOnInit(): void {
    this.resetaForm();
    this.common.idSubject.subscribe(res => {
      console.log(res);
      this.buscarPorId(res);
    });
  }

  buscarPorId(id: number) {
    console.log('oi');
    this.fornecedorService.findById(id).subscribe(data => {
      this.fornecedor = data;
    });
  }

  onSubmit(): void {
    console.log(this.fornecedor);
    this.fornecedorService.save(this.fornecedor).subscribe(
      data => {
        if (this.fornecedor.id) {
          this.alterarSucesso = true;
        } else {
          this.cadastroSucesso = true;
        }
        this.fornecedor = new Fornecedor();
        this.reload();
        this.fornecedorForm.reset();
      },
      error => {
        console.log(error);
        this.cadastroSucesso = false;
      });
  }

  resetaForm() {
    this.fornecedor = new Fornecedor();
    this.cadastroSucesso = false;
    this.alterarSucesso = false;
  }

  reload() {
    this.common.setSubject(true);
  }

  buscaEnderecoPorCep() {
    this.viacep.buscarPorCep(this.fornecedor.cep).then((endereco: Endereco) => {
      this.fornecedor.bairro = endereco.bairro;
      this.fornecedor.cidade = endereco.localidade;
      this.fornecedor.rua = endereco.logradouro;
      this.fornecedor.estado = endereco.uf;
      this.erroEndereco = '';
    }).catch((error: ErroCep) => {
      switch (error.getCode()) {
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
    this.fornecedorForm.reset();
  }
}
