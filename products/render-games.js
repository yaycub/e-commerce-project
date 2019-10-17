import { findById } from '../common/utils.js';

const getCart = () => JSON.parse(localStorage.getItem('cart'));
const addToCart = (cartItem, gameId, cart) => {
    if (!cartItem){
        cartItem = {
            id: gameId,
            quantity: 1
        };

        cart.push(cartItem);
   
    } else {
        cartItem.quantity++;
    }
};

export default (gameData) => {
    const product = document.createElement('li');
    product.id = 'game-list';

    const h2 = document.createElement('h2');
    h2.textContent = gameData.name;
    h2.id = 'game-name';
    product.appendChild(h2);

    const imageDiv = document.createElement('div');
    const productImg = document.createElement('img');
    productImg.src = gameData.image;
    imageDiv.appendChild(productImg);
    product.appendChild(imageDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.id = 'game-description';
    descriptionDiv.textContent = 'Description: ' + gameData.description;
    product.appendChild(descriptionDiv);

    const categoryDiv = document.createElement('div');
    categoryDiv.id = 'game-category';
    categoryDiv.textContent = 'Category: ' + gameData.category;
    product.appendChild(categoryDiv);

    const priceDiv = document.createElement('div');
    priceDiv.id = 'game-price';
    priceDiv.textContent = 'Price: $' + gameData.price;
    product.appendChild(priceDiv);

    const addButton = document.createElement('button');
    addButton.id = gameData.id;
    addButton.textContent = 'Add';
    product.appendChild(addButton);
    addButton.addEventListener('click', () => {
        const localData = getCart();
        let cart;
        if (localData){
            cart = localData;
        } 
        else {
            cart = [];
        }
        let cartItem = findById(cart, gameData.id);

        addToCart(cartItem, gameData.id, cart);

        
        let serializedCartItem = JSON.stringify(cart);
        localStorage.setItem('cart', serializedCartItem);
    });

    return product;
};