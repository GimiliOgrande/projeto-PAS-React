import React from 'react';
import games from '../components/gamesData.js'
import { useParams } from 'react-router-dom';
import './games.css';
import logo from '../assets/logo.png';

function Game() {
    const {id} = useParams();
    const jogo = games.find(game => game.id === id);

    if(!jogo){
        return <div>Jogo não encontrado</div>;
    }

    const { nome, descricao, imagem, desenvolvedor, ano } = jogo;
 
    return(
        <div className='game-container'>
            <div className='nav-bar'>
                .
            </div>

            <header className='game-header'>
                    <img src={logo} alt="Logo Urutau" className="logo" />
            </header>

            <div className='main-container'>
                <h1>Nome: {nome}</h1>

                <div className='image-description'>
                    <img src={imagem} alt={nome} />
                    <p>Descrição: {descricao}</p>
                </div>
                
                <p>Desenvolvedor: {desenvolvedor}</p>
                <p>Ano: {ano}</p>
            </div>
        </div>
    )
}

export default Game;