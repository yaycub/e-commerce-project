import { calcLineItem } from '../common/utils.js';
 
export const renderShoppingCart = (gameArr, cartArr) => {
    const cartTr = document.createElement('tr');
    
    const gameName = document.createElement('td');
    gameName.textContent = gameArr.name;
    cartTr.appendChild(gameName);

    const quantityAmount = document.createElement('td');
    quantityAmount.textContent = cartArr.quantity;
    cartTr.appendChild(quantityAmount);

    const unitPrice = document.createElement('td');
    unitPrice.textContent = '$' + gameArr.price;
    cartTr.appendChild(unitPrice);

    const totalPrice = document.createElement('td');
    totalPrice.textContent = '$' + calcLineItem(cartArr.quantity, gameArr.price);
    cartTr.appendChild(totalPrice);

    return cartTr;
};