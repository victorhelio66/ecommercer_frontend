import React from 'react';
import { useState } from 'react';
import './dados.css';
import Produto from '../../components/produto/produto';

const ITEMS_PER_PAGE = 15;
const products = Array.from({ length:55 }, (_, i) => ({
  id:`d${i + 1}` ,
  nome: `Kit de Dados ${i+1}`,
  valor: `${Math.floor(Math.random() * 81) + 20}`,
  image: `/dadosimgs/${i + 1}.png`
}));

export default function Dados(){
    const [currentPage, setCurrentPage] = useState(1);
    
      const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    
        const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
      };
      return (
        <div className='miniaturas'>
    
          <h2 className='titulos'> Dados </h2>
    
          <div className="products-container">
    
            {currentProducts.map(product => (
              <Produto nome={product.nome} valor={product.valor} caminho={product.image} id={product.id} />
              // <div className="card" key={product.id}>
              //   <img src={product.image} alt={product.title} />
              //   <h3>{product.nome}</h3>
              //   <p>{product.valor}</p>
              // </div>
            ))}
    
          </div>
    
          <div className="pagination">
            <button className='botao' onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
              Anterior
            </button>
            <span className='txtPaginacao'>Página {currentPage} de {totalPages}</span>
            <button className='botao' onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
              Próxima
            </button>
          </div>   
        </div>
         );
}