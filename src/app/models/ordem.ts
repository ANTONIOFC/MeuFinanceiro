import { Acao } from './acao';

export class Ordem {
    id: number;
    acaoId: number;
    qtd: number;
    valor: number;
    operacao: string;
    situacao: string;
    acao: Acao;
}
