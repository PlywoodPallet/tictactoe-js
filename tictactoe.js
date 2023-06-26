// Modules: gameBoard, displayController
// Factories: players


// Store the board, and handle changes in the board due to player action
const gameBoard = (() => {

    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    // make a board-changing method [row][col] to be similar with js 2d array syntax

    return { board };

})();

// display the board, handle player input, control the game
const displayController = (() => {

    // update the display of the game state on page
    const displayGameBoard = () => {
        const gameDiv = document.querySelector('#game');
        const row0 = gameDiv.querySelector('.row0');
        console.log(row0);
    };

    return { displayGameBoard };

})();

// player object
// does it need to store a mark? (X or O)
const playerFactory = (name, marker) => {

    return { name, marker };

};

displayController.displayGameBoard();