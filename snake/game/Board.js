class Board {
    constructor() {
        this.boardEl = document.getElementById("game");
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему
     * для работы.
     * @param {Settings} settings объект настроек.
     * @param {Snake} snake объект змейки.
     */
    init(settings, snake) {
        this.settings = settings;
        this.snake = snake;
    }

    getCellEl(x, y) {
        return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
    }

    clearBoard() {
        const tdElems = document.querySelectorAll('td');
        tdElems.forEach(function (td) {
            td.className = "";
        });
    }

    /**
     * Получаем набор тегов td, представляющих тело змейки.
     * @param {array} bodyCoords массив объектов с координатами
     * @returns {HTMLTableCellElement[]|null} возвращается набор тегов td если были
     * переданы координаты, иначе null.
     */
    getSnakeBodyElems(bodyCoords) {
        if (bodyCoords.length > 0) {
            let bodyElems = [];
            for (const cell of bodyCoords) {
                const elem = this.getCellEl(cell.x, cell.y);
                bodyElems.push(elem)
            }
            return bodyElems;
        }
        return null;
    }

    /**
     * Метод отрисовывает игровое поле.
     */
    renderBoard() {
        this.boardEl.innerHTML = '';
        for (let row = 0; row < this.settings.rowsCount; row++) {
            let tr = document.createElement('tr');
            this.boardEl.appendChild(tr);

            for (let col = 0; col < this.settings.colsCount; col++) {
                let td = document.createElement('td');
                tr.appendChild(td);
            }
        }
    }

    renderSnake() {
        const snakeBody = this.getSnakeBodyElems(this.snake.body);
        if (snakeBody) {
            for (const cell of snakeBody) {
                cell.classList.add('snakeBody')
            }
        }
    }

    renderFood(coords) {
        const foodCell = this.getCellEl(coords.x, coords.y);
        foodCell.classList.add('food')
    }

    renderWall(coords) {
        const wallCell = this.getCellEl(coords.x_wall, coords.y_wall);
        wallCell.classList.add('wall')
    }

    /**
     * Является ли следующий шаг, шагом в стену.
     * @param {Object} nextCellCoords - координаты ячейки, куда змейка собирается сделать шаг.
     * @param {number} nextCellCoords.x
     * @param {number} nextCellCoords.y
     * @returns {boolean}
     */
    isNextStepToWall(nextCellCoords) {
        let nextCell = this.getCellEl(nextCellCoords.x, nextCellCoords.y);
        return nextCell === null;
    }


    /**
     * Метод проверяет, съела ли змейка еду.
     * @returns {boolean} true если змейка находится на еде, иначе false.
     */
    isHeadOnFood() {
        return this.boardEl.querySelector('.food').classList.contains('snakeBody');
    }

    /**
     * Метод проверяет, повала ли змейка в препятсвие(красную стенку).
     * @returns {boolean} true если змейка находится на стене, иначе false.
     */
    isHeadOnWall() {
        return this.boardEl.querySelector('.wall').classList.contains('snakeBody');
    }
}