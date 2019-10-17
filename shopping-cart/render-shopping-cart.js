import { calcLineItem } from '../common/utils.js';
 
export const renderShoppingCart = (gameArr, cartArr) => {
    const productRow = document.createElement('tr');
    
    const productName = document.createElement('td');
    productName.textContent = gameArr.name;
    productRow.appendChild(productName);

    const productQuantity = document.createElement('td');
    productQuantity.textContent = cartArr.quantity;
    productRow.appendChild(productQuantity);

    const unitPrice = document.createElement('td');
    unitPrice.textContent = '$' + gameArr.price;
    productRow.appendChild(unitPrice);

    const subtotalPrice = document.createElement('td');
    subtotalPrice.textContent = '$' + calcLineItem(cartArr.quantity, gameArr.price);
    productRow.appendChild(subtotalPrice);

    return productRow;
};