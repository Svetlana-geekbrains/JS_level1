window.addEventListener('load', () => {
    const settings = new Settings();
    const status = new Status();
    const board = new Board();
    const snake = new Snake();
    const food = new Food();
    const menu = new Menu();
    const game = new Game();

    settings.init({ speed: 5, winLength: 12 });
    board.init(settings, snake);
    food.init(settings, snake, board);
    game.init(settings, status, board, snake, menu, food);

    board.renderBoard();
    // render snake
    board.renderSnake();
    // render food
    food.setNewFood();
    // start game
    game.run();

})