import promoção from "../../assets/home/postdevorador.png";
import devorador from "../../assets/home/devorador-portal.gif";
import "./home.css";
import Produto from "../../components/produto/produto";

// miniaturas
import miniatura1 from "../../assets/miniaturasimgs/10.png";
import miniatura2 from "../../assets/miniaturasimgs/16.png";
import miniatura3 from "../../assets/miniaturasimgs/49.png";
import miniatura4 from "../../assets/miniaturasimgs/55.png";

export default function Home() {
  return (
    <>
      <div className="home">
        <section className="promocao">
          <img src={promoção}></img>
          <img width="350px" src={devorador}></img>
        </section>

        <section className="mais_vendidos">
          <h2 className="titulos">Mais Vendidos</h2>
          <div className="produtosmais" >
            <Produto nome="Basilisk" valor="50" caminho={miniatura1} id="m10" />
            <Produto nome="Archmage" valor="50" caminho={miniatura2} id="m16"/>
            <Produto nome="White Dragon" valor="50" caminho={miniatura3} id="m49"/>
            <Produto nome="Kit de Dados 55" valor="50" caminho={miniatura4} id="d55"/>
          </div>
        </section>

        <section>
             
        </section>
      </div>
    </>
  );
}
