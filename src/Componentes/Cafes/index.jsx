import "./style.css";
import cafes from "../../data/cafes";
import { useState } from "react";
import Filtros from "../Filtros";

const Cafes = () => {
  const [ordenacao, setOrdenacao] = useState("");
  const ordenarCafes = (cafes, novaOrdenacao) => {
    switch (novaOrdenacao) {
      case "nenhumFiltro":
        return cafes;
      case "menorPreco":
        return [...cafes].sort((a, b) => a.preco - b.preco);
      case "maiorPreco":
        return [...cafes].sort((a, b) => b.preco - a.preco);
      case "tipoCafe":
        return [...cafes].filter((cafe) => cafe.tipo === "Café");
      case "tipoCappuccino":
        return [...cafes].filter((cafe) => cafe.tipo === "Cappuccino");
      default:
        return cafes;
    }
  };

  const [cafesOrdenados, setCafesOrdenados] = useState(
    ordenarCafes(cafes, ordenacao)
  );

  const handleChangeOrdenacao = (novaOrdenacao) => {
    setOrdenacao(novaOrdenacao);
    setCafesOrdenados(ordenarCafes(cafes, novaOrdenacao));
  };

  return (
    <>
      <Filtros onChangeOrdenacao={handleChangeOrdenacao} />
      <main className="lista-de-cafes">
        {cafesOrdenados.map((cafe, index) => {
          return (
            <article key={index} className="box-do-cafe">
              <img src={cafe.imagem} alt={cafe.nome} />
              <section className="informacoes">
                <h2>{cafe.nome}</h2>
                <h3>R$ {cafe.preco.toFixed(2)}</h3>
                <p>{cafe.ingredientes}</p>
              </section>
            </article>
          );
        })}
      </main>
    </>
  );
};

export default Cafes;
