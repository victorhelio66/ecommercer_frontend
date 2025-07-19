import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { BauContext } from "./contexts/BauContext/baucontext";

// pages
import Bau from "./pages/bau/Bau";
import Dados from "./pages/dados/Dados";
import Home from "./pages/home/Home";
import Miniaturas from "./pages/miniaturas/Miniaturas";
import Personalizados from "./pages/personalizados/Personalizados";
//components

// imagens
import logo from "./assets/header/PLACA 2.png";

function App() {
  const { itensBau } = useContext(BauContext);
  let totalBau = 0
  itensBau.forEach((item) => {
    totalBau += item.qtd
  }); 
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav className="nav">
            <Link to="/" className="btnHome"></Link>
            <Link to="/miniaturas" className="btnminiaturas"></Link>
            <Link to="/">
              <img src={logo} />
            </Link>
            <Link to="/dados" className="btndados"></Link>
            <Link to="/personalizados" className="btnpersonalizados"></Link>
          </nav>
          <Link to="/bau" className="btn_bau">
            <span className="num_bau">{totalBau}</span>
          </Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/miniaturas" element={<Miniaturas />} />
            <Route path="/dados" element={<Dados />} />
            <Route path="/personalizados" element={<Personalizados />} />
            <Route path="/bau" element={<Bau />} />
          </Routes>
        </div>
      </BrowserRouter>
      <footer className="footer">
        <ul className="ul_footer">
          <li className="titles_footer">Institucional</li>
          <br />
          <li><a className="linkFooter">Termos e Condições de Uso</a></li>
          <li><a className="linkFooter">Política de Entrega</a></li>
          <li><a className="linkFooter">Política de Privacidade</a></li>
          <li><a className="linkFooter">Política de Troca e Devolução</a></li>
          <li><a className="linkFooter">Política de Giftback</a></li>
        </ul>
        <ul className="ul_footer">
          <li className="titles_footer">Atendimento</li>
          <br />
          <li><a className="linkFooter">(85)999999999</a></li>
          <li><a className="linkFooter">contato@forjadoaventureiro.com</a></li>
          <li><a className="linkFooter">Segunda a Sexta de 10:00h às 18:00h</a></li>
        </ul>
        <ul className="ul_footer">
          <li className="titles_footer">Redes Sociais</li>
          <br />
          <li><a className="linkFooter">Facebook</a></li>
          <li><a className="linkFooter">Instagram</a></li>
        </ul>
        <ul className="ul_footer">
          <li className="titles_footer">Formas de pagamento</li>
          <br />
          <li>Credito</li>
          <li>Debito</li>
          <li>Boleto</li>
          <li>Pix</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;