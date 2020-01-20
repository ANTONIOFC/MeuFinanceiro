import { Cotacao } from './cotacao';

export class Acao {
    id: number;
    nome: string;
    cotacao: Cotacao;
}

// json-server --watch src/app/api/db.json