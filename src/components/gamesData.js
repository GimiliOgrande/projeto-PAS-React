import itTakesTwoImg from '../assets/it-takes-two.png';
import knightImg from '../assets/hollow-knight.png';
import starveImg from '../assets/Dont-Starve.png';
import barImg from '../assets/liars-bar.png';
import nmrihImg from '../assets/NMRIH.png';
import overcookedImg from '../assets/overcooked.png';
import undertaleImg from '../assets/undertale.png';
import snakeImg from '../assets/snake.jpg'
import jogoVelhaImg from '../assets/jogo-velha.jpg'

const games = [
    {
        id: 'DST',
        nome: "Don't Starve Together",
        descricao: 'Lute, cultive, construa e explore juntos na expansão multijogador independente do inflexível jogo de sobrevivência na natureza, Dont Starve.',
        imagem: starveImg,
        desenvolvedor: 'Klei Entertainment',
        ano: 2016,
        link: 'https://store.steampowered.com/app/322330/Dont_Starve_Together/'
      },
      {
        id: 'HK',
        nome: 'Hollow Knight',
        descricao: 'Trilhe seu próprio caminho em Hollow Knight! Uma aventura de ação épica por um vasto reino em ruínas de insetos e heróis. Explore cavernas sinuosas, lute contra criaturas contaminadas e faça amizade com insetos bizarros, tudo em um estilo 2D clássico e desenhado à mão.',
        imagem: knightImg,
        desenvolvedor: 'Team Cherry',
        ano: 2017,
        link: 'https://store.steampowered.com/app/367520/Hollow_Knight/'
      },
      {
        id: 'LB',
        nome: "Liar's Bar",
        descricao: 'Mergulhe nesta experiência multijogador online ambientada em um bar duvidoso, onde os jogos são tão perigosos quanto os clientes. Junte-se a uma mesa de 4 e teste suas habilidades em Liars Dice e Liars Deck, onde mentir e blefar são a chave para a vitória. Pronto para uma noite no Liars Bar?',
        imagem: barImg,
        desenvolvedor: 'Studio Fictício',
        ano: 2023,
        link: 'https://store.steampowered.com/app/3097560/Liars_Bar/'
      },
      {
        id: 'NMRIH',
        nome: 'No More Room in Hell 2',
        descricao: 'No More Room in Hell 2 é uma experiência de terror e ação cooperativa para 8 jogadores. Encontre seus amigos no escuro e sobreviva — em um apocalipse zumbi dinâmico e infinitamente rejogável',
        imagem: nmrihImg,
        desenvolvedor: 'No More Room in Hell Team',
        ano: 2011,
        link: 'https://store.steampowered.com/app/292000/No_More_Room_in_Hell_2/'
      },
      {
        id: 'OC',
        nome: 'Overcooked',
        descricao: 'Overcooked é um caótico jogo cooperativo de culinária para um a quatro jogadores. Trabalhando em equipe, você e seus colegas chefs devem preparar, cozinhar e servir uma variedade de pedidos saborosos antes que os clientes barulhentos saiam furiosos',
        imagem: overcookedImg,
        desenvolvedor: 'Ghost Town Games',
        ano: 2016,
        link: 'https://store.steampowered.com/app/728880/Overcooked_2/'
      },
      {
        id: 'UT',
        nome: 'Undertale',
        descricao: 'RPG com narrativa única e sistema de combate inovador.',
        imagem: undertaleImg,
        desenvolvedor: 'Toby Fox',
        ano: 2015,
        link: 'https://store.steampowered.com/app/391540/Undertale/'
      },
    {
        id: 'ITT',
        nome: 'It Takes Two',
        descricao: 'Embarque na jornada mais louca da sua vida em It Takes Two. Convide um amigo para participar gratuitamente com o Passe de Amigo e trabalhem juntos em uma enorme variedade de desafios de jogabilidade divertida e disruptiva. Vencedor do prêmio de JOGO DO ANO no Game Awards 2021.',
        imagem: itTakesTwoImg,
        desenvolvedor: 'Hazelight',
        ano: 2021,
        link: 'https://store.steampowered.com/app/1426210/It_Takes_Two/'
    },
    {
      id: 'cobra',
      nome: 'Snake Game',
      descricao: 'O classico jogo da cobrinha:)',
      imagem: snakeImg,
      desenvolvedor: 'Indefinido',
      ano: 2025,
      link: 'Indefinido'
  },
    {
      id: 'jogoVelha',
      nome: 'Jogo da Velha',
      descricao: 'O classico jogo da velha:)',
      imagem: jogoVelhaImg,
      desenvolvedor: 'Indefinido',
      ano: 2025,
      link: 'Indefinido'
    }

]

export default games;