import "./produtocarrinho.css";
import { useContext } from "react";
import { BauContext } from "../../contexts/BauContext/baucontext";
export default function ProdutoCarrinho({ nome, valor, caminho, id }) {
    const { itensBau, addBau, removeBau, limpaBau } = useContext(BauContext);

    const itens =[...itensBau];
    const produto = itens.find((product)=>product.id === id);
    const total = produto.qtd*valor
  return (
    <>
      <div className="cardBau">
        <img width="100px" height="100px" src={caminho}></img>
        <div className="nomeBau">
            <p>{nome}</p>
            <p>R$ {valor}</p>
        </div>
        <div className="comprarBau">
             <a onClick={() => removeBau(id)} >-</a>
             <p className="txt">{produto.qtd}</p>
             <a onClick={() => addBau(id,caminho,nome,valor)}>+</a>
        </div>
        <div>
            <p className="valorIten">R$ {total}</p>
        </div>
       
      </div>
      <hr className="hr" />
    </>
  );
}