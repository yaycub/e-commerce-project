import { gamesList } from '../api.js';
import { findById, calcOrderItem } from '../common/utils.js';
import { renderShoppingCart } from './render-shopping-cart.js';

const tBody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const cartData = localStorage.getItem('cart');
const cart = JSON.parse(cartData);
const orderButton = document.getElementById('order-button');

if (!cartData) {
    orderButton.disabled = true;
} else {
    orderButton.addEventListener('click', () => {
        alert(JSON.stringify(cart, true, 2));
        localStorage.removeItem('cart');
        window.location = '../index.html';
    }
    );
}


for (let i = 0; i < cart.length; i++) {
    const cartObj = cart[i];
    const game = findById(gamesList, cartObj.id);
    const domChange = renderShoppingCart(game, cartObj);

    tBody.appendChild(domChange);
}

const orderTotal = calcOrderItem (cart, gamesList);
orderTotalCell.textContent = '$' + orderTotal;