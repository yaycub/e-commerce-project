import renderGames from './render-games.js';
import { gamesList } from '../api.js';

const gamesListDisplay = document.getElementById('games');

for (let i = 0; i < gamesList.length; i++){
    const game = gamesList[i];
    const dom = renderGames(game);
    gamesListDisplay.appendChild(dom);
}

