import { Projeto } from './projeto';

export class Cliente {
    id: number;
    nome?: string;
    cpf?: number;
    cep?: string;
    rua?: string;
    cidade?: string;
    estado?: string;
    bairro?: string;
    numeroCasa?: string;
    complemento?: string;
    dt_nasc?: Date;
    email?: string;
    celular?: number;
    telefoneFixo?: number;
    img?: string;
    projetos?: Projeto[];
}
