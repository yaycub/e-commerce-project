import { findById } from '../common/utils.js';

export default (gameData) => {
    const li = document.createElement('li');
    li.id = 'game-list';

    const h2 = document.createElement('h2');
    h2.textContent = gameData.name;
    h2.id = 'game-name';
    li.appendChild(h2);

    const imageDiv = document.createElement('div');
    const img = document.createElement('img');
    img.src = gameData.image;
    imageDiv.appendChild(img);
    li.appendChild(imageDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.id = 'game-description';
    descriptionDiv.textContent = 'Description: ' + gameData.description;
    li.appendChild(descriptionDiv);

    const categoryDiv = document.createElement('div');
    categoryDiv.id = 'game-category';
    categoryDiv.textContent = 'Category: ' + gameData.category;
    li.appendChild(categoryDiv);

    const priceDiv = document.createElement('div');
    priceDiv.id = 'game-price';
    priceDiv.textContent = 'Price: $' + gameData.price;
    li.appendChild(priceDiv);

    const addButton = document.createElement('button');
    addButton.id = gameData.id;
    addButton.textContent = 'Add';
    li.appendChild(addButton);
    addButton.addEventListener('click', () => {
        const localData = localStorage.getItem('cart');
        let cart;
        if (localData){
            cart = JSON.parse(localData);
        } 
        else {
            cart = [];
        }
        let cartItem = findById(cart, gameData.id);

        if (!cartItem){
            cartItem = {
                id: gameData.id,
                quantity: 1
            };
            cart.push(cartItem);
        } else {
            cartItem.quantity++;
        }

    });

    return li;
};