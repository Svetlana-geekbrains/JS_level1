window.onload = mainfunc;

function mainfunc() {
    var container = document.createElement("div");
    container.className = "container";
    main_section.appendChild(container);

    for (let i = 1; i <= 100; i++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        container.appendChild(cell);

        if ((i >= 1 && i <= 10) || (i >= 91 && i <= 100) || (i % 10 == 1) || (i % 10 == 0)) {
            cell.classList.add("white");
            cell.style.border = "none"
        }

        if ((i >= 12 && i <= 19) || (i >= 32 && i <= 39) || (i >= 52 && i <= 59) || (i >= 72 && i <= 79)) {
            if (i % 2 == 1) {
                cell.classList.add("white");
            }
        }
        if ((i >= 22 && i <= 29) || (i >= 42 && i <= 49) || (i >= 62 && i <= 69) || (i >= 82 && i <= 89)) {
            if (i % 2 == 0) {
                cell.classList.add("white");
            }
        }
    }
}

