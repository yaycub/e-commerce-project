import { gamesList } from '../api.js';
import { findById } from '../common/utils.js';
import { renderShoppingCart } from './render-shopping-cart.js';
import { calcOrderItem } from '../common/utils.js';

const tBody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const cartData = localStorage.getItem('cart');
const cart = JSON.parse(cartData);


for (let i = 0; i < cart.length; i++) {
    const cartObj = cart[i];
    const game = findById(gamesList, cartObj.id);
    const domChange = renderShoppingCart(game, cartObj);

    tBody.appendChild(domChange);
}

const orderTotal = calcOrderItem (cart, gamesList);
orderTotalCell.textContent = '$' + orderTotal;