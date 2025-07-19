import "./produto.css";
import { useContext } from "react";
import { BauContext } from "../../contexts/BauContext/baucontext";
export default function Produto({ nome, valor, caminho, id }) {
  const { itensBau, addBau, removebau } = useContext(BauContext);

  return (
    <>
      <div className="card">
        <img width="250px" src={caminho}></img>
        <p className="nome">{nome}</p>
        <p className="valor">R$ {valor}</p>
        <a onClick={() => addBau(id,caminho,nome,valor)} className="btn_comprar"></a>
      </div>
    </>
  );
}
