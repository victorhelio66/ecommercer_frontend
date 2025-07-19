
import React from 'react';
import { useState } from 'react';
import './miniaturas.css';
import Produto from '../../components/produto/produto';
let miniaturas = ["Beholder", "Mind Flayer", "Owlbear", "Lich", "Gelatinous Cube", "Goblin", "Troll", "Bugbear"
  , "Mimic", "Basilisk", "Displacer Beast","Gnoll","Yeti", "Banshee", "Demon","Archmage" ,"Necromancer" ,"Sorcerer" ,"Warlock" ,
  "Drow Mage" ,"Evoker" ,"Conjurer" ,"Diviner" ,"Enchanter" ,"Illusionist" ,"Fighter" ,"Paladin" ,"Barbarian" ,"Blackguard","Knight","Battlemaster","Champion","Eldritch Knight",
  "Warlord","Dwarf Warrior","Rogue","Ranger","Assassin","Scout","Arcane Trickster","Beast Master","Thief","Hunter","Sharpshooter","Halfling Rogue","Red Dragon","Blue Dragon",
  "Green Dragon","White Dragon","Black Dragon","Wyvern","Dracolich","Faerie Dragon","Pseudodragon","Shadow Dragon"
];
const ITEMS_PER_PAGE = 15;
const products = Array.from({ length: miniaturas.length }, (_, i) => ({
  id:`m${i + 1}` ,
  nome: miniaturas[i],
  valor: `${Math.floor(Math.random() * 81) + 20}`,
  image: `/miniaturasimgs/${i + 1}.png`
}));

function Miniaturas() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };


  return (
    <div className='miniaturas'>

      <h2 className='titulos'> Miniaturas </h2>

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

export default Miniaturas;
