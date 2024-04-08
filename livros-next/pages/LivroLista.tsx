import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Menu } from "@/componentes/Menu";

const LivroLista = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const carregarLivros = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/livros");
        if (!response.ok) {
          throw new Error("Erro ao carregar livros");
        }
        const data = await response.json();
        console.log("Data from API:", data);
        setLivros(data);
      } catch (error) {
        console.error("Erro ao carregar livros:", error);
      }
    };
    carregarLivros();
  }, []);

  const excluirLivro = (index) => {
    const updatedLivros = livros.filter((livro, idx) => idx !== index);
    setLivros(updatedLivros);
  };

  return (
    <main className={styles.container}>
      <Menu />
      <div className="row justify-content-center">
        <div className="col-12">
          <h1 className="text-center my-3">Lista de Livros</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th style={{ width: "100px" }} scope="col">
                  Título
                </th>
                <th style={{ width: "200px" }} scope="col">
                  Resumo
                </th>
                <th style={{ width: "150px" }} scope="col">
                  Editora
                </th>
                <th style={{ width: "150px" }} scope="col">
                  Autores
                </th>
                <th style={{ width: "100px" }} scope="col">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="my-5">
              {livros.map((livro, index) => (
                <tr key={index}>
                  <td>{livro.titulo}</td>
                  <td>{livro.resumo}</td>
                  <td>{livro.nome}</td>
                  <td>{livro.autores.join(", ")}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => excluirLivro(index)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default LivroLista;
