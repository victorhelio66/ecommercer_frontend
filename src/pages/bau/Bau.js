import React from "react";
import ProdutoCarrinho from "../../components/produtoCarrinho/produtoCarrinho";
import { useContext } from "react";
import { BauContext } from "../../contexts/BauContext/baucontext";
import './bau.css'

export default function Bau() {
  const { itensBau, limparBau } = useContext(BauContext);
  let totalBau = 0;
  itensBau.forEach((item) => {
    totalBau += item.qtd * item.preço;
  });
  return (
    <>
      <div className="bau">
        <div className="bau-container">
          <div className="bauMiniaturas">
            <h2 className="meubau"> Meu Baú </h2>
            <hr />
            {itensBau.map((product) => (
              <ProdutoCarrinho
                nome={product.name}
                valor={product.preço}
                caminho={product.caminho}
                id={product.id}
              />
            ))}
          </div>
          <div>
            <h2 className="ttBau"> Resumo do pedido </h2>
            <hr className="hr" />
            <div className="resumopedido">
              <p className="txBau">Total...................<span>R$ {totalBau}</span></p>
              <a className="botao">Finalizar</a>
              <a className="botao" onClick={() => limparBau()}>
                limpar Bau
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

