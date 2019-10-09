// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderGames from '../products/render-games.js';
import { findById } from '../common/utils.js';
import { calcLineItem } from '../common/utils.js';
import { renderShoppingCart } from '../shopping-cart/render-shopping-cart.js';
 
const test = QUnit.test;

test('Render Games test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const skyrim = {
        id: 'skyrim',
        name: 'Skyrim',
        image: '/assets/skyrim.png',
        description: 'An open-world Action RPG',
        category: 'RPG',
        price: 40
    };
    const expected = '<li id="game-list"><h2 id="game-name">Skyrim</h2><div><img src="/assets/skyrim.png"></div><div id="game-description">Description: An open-world Action RPG</div><div id="game-category">Category: RPG</div><div id="game-price">Price: $40</div><button id="skyrim">Add</button></li>';

    //Act 
    // Call the function you're testing and set the result to a const

    const dom = renderGames(skyrim);
    const html = dom.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});

test('returns an object when a matching id is found', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const skyrim = [{
        id: 'skyrim',
        name: 'Skyrim',
        image: '/assets/skyrim.png',
        description: 'An open-world Action RPG',
        category: 'RPG',
        price: 40
    }];

    const expected = {
        id: 'skyrim',
        name: 'Skyrim',
        image: '/assets/skyrim.png',
        description: 'An open-world Action RPG',
        category: 'RPG',
        price: 40
    };

    //Act 
    // Call the function you're testing and set the result to a const

    const result = findById(skyrim, 'skyrim');

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});

test('takes quantity and amount then returns a rounded amount', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 5;
    const amount = 5.99;
    
    const expected = 29.95;

    //Act 
    // Call the function you're testing and set the result to a const

    const result = calcLineItem(quantity, amount);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});

test('takes two arrays and returns HTML td', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const gameData = {
        id: 'skyrim',
        name: 'Skyrim',
        image: '/assets/skyrim.png',
        description: 'An open-world Action RPG',
        category: 'RPG',
        price: 40
    };

    const cartData = {
        id: 'skyrim',
        quantity: 2
    };
    
    const expected = '<tr><td>Skyrim</td><td>2</td><td>$40</td><td>$80</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const

    const dom = renderShoppingCart(gameData, cartData);
    const html = dom.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(html, expected);
});