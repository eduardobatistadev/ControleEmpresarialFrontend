import { Fornecedor } from './fornecedor';
import { Cliente } from './cliente';

export class Projeto {
    id: number;
    nomeProjeto: string;
    dt_inicio: Date;
    dt_fim: Date;
    cep: string;
    rua: string;
    cidade: string;
    estado: string;
    bairro: string;
    numeroCasa: number;
    complemento: string;
    valorTotal: number;
    descricao: string;
    img: string;
    fornecedores: Array<Fornecedor>;
    cliente: Cliente;
}
