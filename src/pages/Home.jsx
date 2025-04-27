import ReactDOM from 'react-dom/client';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './home.css'
import logo from '../assets/logo.png';
import comadre from '../assets/a-comadre.png';
import Starve from '../assets/Dont-Starve.png';
import knight from '../assets/hollow-knight.png';
import two from '../assets/it-takes-two.png';
import bar from '../assets/liars-bar.png';
import nmrih from '../assets/NMRIH.png';
import overcooked from '../assets/overcooked.png';
import undertale from '../assets/undertale.png';
import white from '../assets/menu_white_36dp.png'
import snakeImg from '../assets/snake.jpg'


function Home() {
  const navigate = useNavigate();

  //mecanismo de menu responsivo:

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  //mecanismo de busca:

  const [termoBusca, setTermoBusca] = useState('');

  return (

    <div className="home-container">
        <div className='nav-list'>
          <ul>
            <li className='nav' id='cofbra'>
              <Link to={'/cobrinha'}>
                <img src={snakeImg} alt="'Jogo da cobrinha" className="navbar-img" />
              </Link>
            </li>
            <li className='nav' id='HK'>
              <Link to={'/game/HK'}>  
                <img src={knight} alt="hollow knight" className="navbar-img"/>
              </Link>
            </li>
            <li className='nav' id='ITT'>
              <Link to={'/game/ITT'}>
                <img src={two} alt="it takes two" className="navbar-img" />
              </Link>
            </li>
            <li className='nav' id='LB'>
              <Link to={'/game/LB'}>
                <img src={bar} alt="liars bar" className="navbar-img" />
              </Link>
            </li>
            <li className='nav' id='NMRIH'>
              <Link to={'/game/NMRIH'}>
                <img src={nmrih} alt="nmrih" className="navbar-img" />
              </Link>
            </li>
            <li className='nav' id='OC'>
              <Link to={'/game/OC'}>
                <img src={overcooked} alt="overcooked" className="navbar-img" />
              </Link>
            </li>
            <li className='nav' id='UT'>
              <Link to={'/game/UT'}>
                <img src={undertale} alt="undertale" className="navbar-img" />
              </Link>
            </li>
          </ul>
          

          <div className='mobile-menu-icon'>
              <button onClick={toggleMenu}><img src={white} className='menu-button'/></button>
            </div>
        </div>
      
        

      <header className='home-header'>
        <img src={logo} alt="Logo Urutau" className="logo" />
      </header>

      {openMenu && (<div className='mobile-menu'>
            <ul>
              <li className='nav-mobile' id='DST'>
                <Link to={'/game/DST'}>
                  <img src={Starve} alt="Don't Starve Together" className="navbar-img" />
                </Link>
              </li>
              <li className='nav-mobile' id='HK'>
                <Link to={'/game/HK'}>  
                  <img src={knight} alt="hollow knight" className="navbar-img"/>
                </Link>
              </li>
              <li className='nav-mobile' id='ITT'>
                <Link to={'/game/ITT'}>
                  <img src={two} alt="it takes two" className="navbar-img" />
                </Link>
              </li>
              <li className='nav-mobile' id='LB'>
                <Link to={'/game/LB'}>
                  <img src={bar} alt="liars bar" className="navbar-img" />
                </Link>
              </li>
              <li className='nav-mobile' id='NMRIH'>
                <Link to={'/game/NMRIH'}>
                  <img src={nmrih} alt="nmrih" className="navbar-img" />
                </Link>
              </li>
              <li className='nav-mobile' id='OC'>
                <Link to={'/game/OC'}>
                  <img src={overcooked} alt="overcooked" className="navbar-img" />
                </Link>
              </li>
              <li className='nav-mobile' id='UT'>
                <Link to={'/game/UT'}>
                  <img src={undertale} alt="undertale" className="navbar-img" />
                </Link>
              </li>
            </ul>
      </div>)}
      

      <div className='search-bar'>
        <form onSubmit={(e) => {e.preventDefault();
          if (termoBusca.trim() !== ''){
            navigate(`/busca/${termoBusca}`);
          }
          }}>

        
          <input 
          type="text"
          placeholder='Buscar jogo...'
          className='search-input' 
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          
          />
          
          <button 
          type='submit'
          className='search-button'>🔍</button>

        </form>
      </div>

      <div className='main-content'>
          <div className='game-image'>
            <img src={comadre} alt="a comadre" className="game-image"/>
          </div>
          
          <div className='game-description'>
            <h1>A comadre (EM BREVE)</h1>
            <p>Ao voltar de uma caça por diversão com amigos, vocês decidem cortar caminho pela floresta sem a permissão da comadre fulosinha, afinal de contas e só uma lenda urbana, certo?  Agora, você se encontra presos em um pesadelo vivo, e precisa escapar de uma floresta que parece se transformar a cada passo. A cada som, a cada sombra, a comadre pode estar se aproximando...
            O objetivo e simples : Sobreviver e Escapar, evite armadilhas naturais e fuja da perseguição implacável para ter uma chance de sair vivo. Mas cuidado: nem todos conseguirão ver a luz do dia.</p>
            </div>
        </div>
    </div>
  );
}

export default Home;
