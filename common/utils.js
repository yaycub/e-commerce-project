export const findById = (gameData, someString) => {
    for (let i = 0; i < gameData.length; i++){
        if (gameData[i].id === someString){
            return gameData[i];
        }
    }
};