// Initializing state
import { gamesList } from '../api.js';
import { cart } from '../api.js';
import { findById } from '../common/utils.js';
import { renderShoppingCart } from './render-shopping-cart.js';

const tBody = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const cartObj = cart[i];
    const game = findById(gamesList, cartObj.id);
    const domChange = renderShoppingCart(game, cartObj);

    tBody.appendChild(domChange);
};