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
    descriptionDiv.textContent = gameData.description;
    li.appendChild(descriptionDiv);

    const categoryDiv = document.createElement('div');
    categoryDiv.id = 'game-category';
    categoryDiv.textContent = gameData.category;
    li.appendChild(categoryDiv);

    const priceDiv = document.createElement('div');
    priceDiv.id = 'game-price';
    priceDiv.textContent = '$' + gameData.price;
    li.appendChild(priceDiv);

    return li;
};