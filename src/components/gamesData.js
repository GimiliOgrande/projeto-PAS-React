import itTakesTwoImg from '../assets/it-takes-two.png';
import knightImg from '../assets/hollow-knight.png';
import starveImg from '../assets/Dont-Starve.png';
import barImg from '../assets/liars-bar.png';
import nmrihImg from '../assets/NMRIH.png';
import overcookedImg from '../assets/overcooked.png';
import undertaleImg from '../assets/undertale.png';

const games = [
    {
        id: 'DST',
        nome: "Don't Starve Together",
        descricao: 'Jogo de sobrevivência em um mundo sombrio e estilizado.',
        imagem: starveImg,
        desenvolvedor: 'Klei Entertainment',
        ano: 2016
      },
      {
        id: 'HK',
        nome: 'Hollow Knight',
        descricao: 'Metroidvania com exploração profunda e estilo visual marcante.',
        imagem: knightImg,
        desenvolvedor: 'Team Cherry',
        ano: 2017
      },
      {
        id: 'LB',
        nome: "Liar's Bar",
        descricao: 'Jogo misterioso com atmosfera intrigante e visual noir.',
        imagem: barImg,
        desenvolvedor: 'Studio Fictício',
        ano: 2023
      },
      {
        id: 'NMRIH',
        nome: 'No More Room in Hell',
        descricao: 'Jogo cooperativo de zumbis com foco em sobrevivência realista.',
        imagem: nmrihImg,
        desenvolvedor: 'No More Room in Hell Team',
        ano: 2011
      },
      {
        id: 'OC',
        nome: 'Overcooked',
        descricao: 'Jogo caótico de cozinha cooperativa.',
        imagem: overcookedImg,
        desenvolvedor: 'Ghost Town Games',
        ano: 2016
      },
      {
        id: 'UT',
        nome: 'Undertale',
        descricao: 'RPG com narrativa única e sistema de combate inovador.',
        imagem: undertaleImg,
        desenvolvedor: 'Toby Fox',
        ano: 2015
      },
    {
        id: 'ITT',
        nome: 'It Takes Two',
        descricao: 'Jogo cooperativo com uma narrativa envolvente.',
        imagem: itTakesTwoImg,
        desenvolvedor: 'Hazelight',
        ano: 2021
    },

]

export default games;