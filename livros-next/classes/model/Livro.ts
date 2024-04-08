import Editora from "./Editora.ts";

export default class Livro extends Editora {
  codigo: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string[]){
    super(codEditora, "")
    this.codigo = codigo;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}