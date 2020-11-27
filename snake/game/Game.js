class Game {
    tickIdentifier = null;
    createWall = null;
    messageEl = document.getElementById('message');
    count = document.querySelector('.counter');
    x_wall = null;
    y_wall = null;

    init(settings, status, board, snake, menu, food) {
        this.settings = settings;
        this.status = status;
        this.board = board;
        this.snake = snake;
        this.menu = menu;
        this.food = food;
    }

    tick() {
        this.snake.performStep();
        if (this.isGameLost()) {
            return;
        }
        if (this.isGameWon()) {
            return;
        }
        if (this.board.isHeadOnFood()) {
            this.snake.increaseBody();
            this.food.setNewFood();
            this.increaseCounter();
        }
        this.board.clearBoard();
        this.food.setFood();
        this.board.renderSnake();
        this.setWall();
    }

    wall() {
        const wallCoords = this.getRandomCoordsWall();
        this.board.renderWall(wallCoords);
    }

    setWall() {
        this.board.renderWall(this);
    }

    getRandomCoordsWall() {
        while (true) {
            this.x_wall = this.food.getRandomInt(1, this.settings.colsCount);
            this.y_wall = this.food.getRandomInt(1, this.settings.rowsCount);
            let cell = this.board.getCellEl(this.x_wall, this.y_wall);

            if (cell.classList.contains('snakeBody') || cell.classList.contains('food') || cell.classList.contains('wall')) {
                continue;
            };
            return this;
        }
    }

    /**
     * Метод проверяет проиграна ли игра, останавливает игру
     * в случае проигрыша, выводит сообщение о проигрыше.
     * @returns {boolean} если мы шагнули в стену, тогда
     * true, иначе false.
     */
    isGameLost() {
        if (this.board.isNextStepToWall(this.snake.body[0]) || this.board.isHeadOnWall()) {
            clearInterval(this.tickIdentifier);
            clearInterval(this.createWall);
            this.setMessage('Вы проиграли');
            return true;
        }
        return false;
    }

    /**
     * Метод проверяет выиграна ли игра, останавливает игру,
     * выводит сообщение о выигрыше.
     * @returns {boolean} если длина змейки достигла длины нужной
     * для выигрыша, тогда true, иначе false.
     */
    isGameWon() {
        if (this.snake.body.length === this.settings.winLength) {
            clearInterval(this.tickIdentifier);
            clearInterval(this.createWall);
            this.setMessage('Вы выиграли');
            return true;
        }
        return false;
    }

    pressKeyHandler(event) {
        switch (event.key) {
            case "ArrowUp":
                this.snake.changeDirection('up');
                break;
            case "ArrowDown":
                this.snake.changeDirection('down');
                break;
            case "ArrowLeft":
                this.snake.changeDirection('left');
                break;
            case "ArrowRight":
                this.snake.changeDirection('right');
                break;
        }
    }

    run() {
        this.menu.addButtonsClickListeners(this.start.bind(this), this.pause.bind(this));
        document.addEventListener('keydown', this.pressKeyHandler.bind(this))
    }

    start() {
        console.log('start', this);
        if (!this.status.isPlaying) {
            this.status.setPlaying();
            this.tickIdentifier = setInterval(this.tick.bind(this), 1000 / this.settings.speed);
            this.createWall = setInterval(this.wall.bind(this), 15000 / this.settings.speed);
        }
    }

    pause() {
        console.log('pause');
        if (this.status.isPlaying) {
            this.status.setPaused();
            clearInterval(this.tickIdentifier)
        }
    }

    setMessage(text) {
        this.messageEl.innerText = text;
    }

    increaseCounter() {
        this.count.innerHTML = `Собрано яблок: ${this.snake.body.length - 1}`;
    }
}