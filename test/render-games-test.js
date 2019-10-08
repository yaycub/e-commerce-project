// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderGames from '../src/render-games.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
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
