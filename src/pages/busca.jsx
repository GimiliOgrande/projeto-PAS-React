import React, {useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import gamesData from '../components/gamesData'
import './busca.css'
import logo from '../assets/logo.png';

function TelaBusca() {
    const {termo} = useParams();
    const termoLower = termo.toLowerCase();
    const navigate = useNavigate();


    const resultados = gamesData.filter((game) => game.nome.toLowerCase().includes(termoLower))
    
    const [termoBusca, setTermoBusca] = useState('');
    
    return (
        <div className='busca-container'>
            <div className='nav-bar'>
                .
            </div>

            <header className='busca-header'>
                    <img src={logo} alt="Logo Urutau" className="logo" />
            </header>

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

            <div className='busca-main-container'>
                <h1>Resultado da busca por: <em>{termo}</em></h1>

                {resultados.length > 0 ? (
                    <ul>
                    {resultados.map((game) => (
                        <li key={game.id}>
                            <Link to={`/game/${game.id}`}>
                                <img src={game.imagem} alt={game.nome}/>
                            </Link>
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p>Nenhum jogo encontrado com esse nome.</p>
                )}
            </div>
            
        </div>
    )
}

export default TelaBusca;