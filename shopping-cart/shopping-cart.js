import { gamesList } from '../api.js';
import { findById, calcOrderItem } from '../common/utils.js';
import { renderShoppingCart } from './render-shopping-cart.js';

const tBodyDisplay = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const localCartData = localStorage.getItem('cart');
const parsedCart = JSON.parse(localCartData);
const orderButton = document.getElementById('order-button');

if (!localCartData) {
    orderButton.disabled = true;
} else {
    orderButton.addEventListener('click', () => {
        alert('Order placed:\n' + JSON.stringify(parsedCart, true, 2));
        localStorage.removeItem('cart');
        window.location = '../index.html';
    });
}


if (localCartData) {
    for (let i = 0; i < parsedCart.length; i++) {
        const cartObj = parsedCart[i];
        const game = findById(gamesList, cartObj.id);
        const domChange = renderShoppingCart(game, cartObj);

        tBodyDisplay.appendChild(domChange);

        const orderTotal = calcOrderItem (parsedCart, gamesList);
        orderTotalCell.textContent = '$' + orderTotal;
    }
}

