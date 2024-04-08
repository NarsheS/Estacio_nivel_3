import Livro from "../model/Livro.ts";
import { editoras } from "./ControleEditora.ts";

let livros: Array<Livro> = [
  new Livro(1, editoras[0].codEditora, "Prova de fogo", "Documentário sobre bombeiros", ["Beatrice Johanne", "Jayden Heart"]),
  new Livro(2, editoras[1].codEditora, "Pão", "Uma emocionante história sobre um Pão e sua jornada ao estômago!", ["João Almeida"]),
  new Livro(3, editoras[2].codEditora, "Narcisismo", "Como saber se você é Narcisista", ["Enzo Martins", "Isabela Bitëncourt", "Carlos Schëwinzteiger"])
]

export default class ControleLivro {
  obterLivros(){
    return livros;
  }

  incluir(livro: Livro){
    let maiorCodigo = 0;
    for (const livro of livros) {
      if (livro.codigo > maiorCodigo) {
        maiorCodigo = livro.codigo;
      }
    }

    livro.codigo = maiorCodigo + 1;

    livros.push(livro);
  }

  excluir(codigo: number){
    const index = livros.findIndex(livro => livro.codigo === codigo);
    if(index !== -1) {
      livros.splice(index, 1);
    }
  }
}
