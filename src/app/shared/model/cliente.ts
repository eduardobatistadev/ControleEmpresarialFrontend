import { Fornecedor } from './fornecedor';
import { Projeto } from './projeto';

export class Cliente {
    id: number;
    nome: string;
    cep: number;
    rua: string;
    estado: string;
    bairro: string;
    numeroCasa: string;
    complemento: string;
    dt_nasc: Date;
    email: string;
    celular: number;
    telefoneFixo: number;
    img: string;
    fornecedores: Array<Fornecedor>;
    projetos: Array<Projeto>;
}
