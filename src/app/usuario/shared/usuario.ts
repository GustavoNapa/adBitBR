import { Carteira } from './../../carteira/shared/carteira';

export class Usuario {
    uid: string;
    name: string;
    username: string;
    email: string;
    telefone: string;
    saqueAuto: boolean;
    valorSaque: number;
    afiliadosDiretos: number;
    afiliadosIndiretos: number;
    carteira: Carteira = new Carteira();
}
