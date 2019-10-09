export const findById = (gameData, someString) => {
    for (let i = 0; i < gameData.length; i++){
        if (gameData[i].id === someString){
            return gameData[i];
        }
    }
};

export const calcLineItem = (quantity, amount) => {
    const total = quantity * amount;
    const prettyTotal = Math.round(total * 100) / 100;

    return prettyTotal;
};

export const calcOrderItem = (cartArr, gameArr) => {
    let orderTotal = 0;

    for (let i = 0; i < cartArr.length; i++){
        const cartItem = cartArr[i];
        const game = findById(gameArr, cartItem.id);
        const cartItemTotal = calcLineItem(cartItem.quantity, game.price);
        orderTotal += cartItemTotal;
    }
    
    return orderTotal;
};
