import "./personalizados.css";

import casa from "../../assets/personalizados/casa.gif";
import bombasalro from "../../assets/personalizados/pokemon.gif";

export default function Personalizados() {
  return (
    <section className="personalizados">
      <div className="cardpersonalizado">
        <img width='300px' src={bombasalro}></img>
        <div  className="txtpersonalizado">
          <p className="ttpersonalizado">Miniaturas Personalizadas</p>
          <p className="textpersonalizado">
            Solicite uma impressão do seu anime ou jogo preferido
          </p>
          <a href="https://wa.me/5585991426858?text=Ola!gostaria%20de%20uma%20miniatura%20personalizada." target='_blank' className="botao">
            Solicite aqui!
          </a>
        </div>
      </div>
      <div className="cardpersonalizado">
        <img width='450px' src={casa}></img>
        <div className="txtpersonalizado">
          <p className="ttpersonalizado">Impressão de projetos</p>
          <p className="textpersonalizado">
            Imprima seus projetos 3d com a gente
          </p>
          <a href="https://wa.me/5585991426858?text=Ola!,gostaria%20de%20solicitar%20um%20projeto."  target='_blank' className="botao">
            Solicite aqui!
          </a>
        </div>
      </div>
    </section>
  );
}
