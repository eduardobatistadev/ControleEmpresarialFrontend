import { Fornecedor } from './fornecedor';
import { Cliente } from './cliente';

export class Projeto {
    id: number;
    nomeProjeto?: string;
    dt_inicio?: Date;
    dt_fim?: Date;
    cep?: string;
    rua?: string;
    cidade?: string;
    estado?: string;
    bairro?: string;
    numeroCasa?: number;
    complemento?: string;
    valorTotal?: number;
    descricao?: string;
    img?: Array<string>;
    fornecedores?: Fornecedor[];
    cliente: Cliente;
    firstImage?: string;

    constructor(){
      this.img = [];
      this.fornecedores = [];
    }

    addImagem(img: string){
      this.img.push(img);
    }

    findFirstImg() {
      this.firstImage = this.img.find( element => element !== null );
    }
}
