import { FornecedorModule } from './../../fornecedor/fornecedor.module';
import { Fornecedor } from './../../shared/model/fornecedor';
import { FornecedorService } from './../../shared/service/fornecedor.service';
import { Cliente } from 'src/app/shared/model/cliente';
import { ClienteService } from 'src/app/shared/service/cliente.service';
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

  imagePath: any;
  projeto = new Projeto();
  erroEndereco: string;
  erroForm: string;
  cadastroSucesso: boolean;
  clientes: Cliente[];
  fornecedores: Fornecedor[];
  auxList: Fornecedor[];
  fornecedorModel = new Fornecedor();

  constructor(private projetoService: ProjetoService,
    private viacep: NgxViacepService,
    private common: CommonService,
    private clienteService: ClienteService,
    private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.auxList = [];
    this.buscaListaClientes();
    this.buscaListaFornecedores();
    this.resetaForm();
    this.common.idProjeto.subscribe(res => {
      if (res !== null) {
        this.buscaProjetoPorId(res);
      }
    });
    this.fornecedorModel.id = 0;
    this.fornecedorModel.nomeEmpresa = 'selecione...';
  }

  resolveListas() {
    this.projeto.fornecedores.forEach( f =>
      { this.fornecedores = this.fornecedores.filter( e => e.id !== f.id); });
  }

  buscaProjetoPorId(id: number) {
    console.log(this.auxList);
    this.fornecedores = this.auxList;
    this.projetoService.findById(id).subscribe(data => {
      console.log(data);
      this.projeto = data;
      this.resolveListas();
    });
  }

  onSubmit(): void {
    console.log(this.projeto);
    this.projetoService.save(this.projeto).subscribe(
      data => {
        console.log(data);
        this.cadastroSucesso = true;
        this.projeto = new Projeto();
        this.reload();
        this.projetoForm.reset();
        this.resetaForm();
      },
      error => {
        console.log(error);
        this.cadastroSucesso = false;
      });
  }

  addFornecedor(fornecedor) {
    console.log(fornecedor);
    this.projeto.fornecedores.push(fornecedor);
    this.fornecedores = this.fornecedores.filter((element) => element.id !== fornecedor.id);
    console.log(this.fornecedores);
  }

  removeFornecedor(fornecedor) {
    this.fornecedorModel = new Fornecedor();
    this.fornecedores.push(fornecedor);
    this.projeto.fornecedores = this.projeto.fornecedores.filter(element => element.id !== fornecedor.id);
  }

  removeImagem(imagem) {
    this.projeto.img = this.projeto.img.filter(element => element !== imagem);
  }

  buscaListaClientes() {
    this.clienteService.findAll().subscribe(data => {
      this.clientes = data;
    });
  }

  buscaListaFornecedores() {
    this.fornecedorService.findAll().subscribe(data => {
      this.fornecedores = data;
      this.auxList = this.fornecedores;
    });
  }

  resetaForm() {
    this.projeto = new Projeto();
    this.cadastroSucesso = false;
    this.fornecedorModel = new Fornecedor();
    this.buscaListaFornecedores();
    this.projeto.fornecedores = [];
  }

  addImagem(img: string){
    this.projeto.img.push(img);
  }

  preview(files: any) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.addImagem(reader.result.toString());
    };
    console.log(this.projeto);
  }

  reload() {
    this.common.setSubject(true);
  }

  cancelar(){
    this.resetaForm();
    this.resolveListas();
    this.common.setEditProjetoId(null);
  }

  buscaEnderecoPorCep() {
    this.viacep.buscarPorCep(this.projeto.cep).then((endereco: Endereco) => {
      this.projeto.bairro = endereco.bairro;
      this.projeto.cidade = endereco.localidade;
      this.projeto.rua = endereco.logradouro;
      this.projeto.estado = endereco.uf;
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





}
