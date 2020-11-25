document.write("<b>1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100</b><br><br>");

function simpleNumber(num) {
    if (num === 0 || num === 1) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

var counter = 0;
while (counter <= 100) {
    if (simpleNumber(counter)) {
        document.write(counter + "<br>");
    }
    counter++
}

document.write("<br><b>2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:</b><br>a) Организовать такой массив для хранения товаров в корзине; <br>b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.<br><br>");

let Basket = [
    { name: 'Телефон', price: 18990 },
    { name: 'Зарядка', price: 1300 },
    { name: 'Наушники', price: 4700 },
    { name: 'Чехол', price: 890 }
];

function countBasketPrice(arr) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i].price;
    }
    return count
}

document.write("<u>Сумма вашего заказа составила</u> " + countBasketPrice(Basket) + "<br><br>");

document.write("<b>3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так: for(…){// здесь пусто}</b><br><br>");

for (let i = 0; i <= 9; document.write(i++ + "<br>")) { }


document.write("<br><b>4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5</b><br><br>");

document.write("Ответ в консоли (в двух вариантах)<br><br>");

let text = "x";

for (let i = 1; i <= 20; i++) {
    console.log(text.repeat(i));
}

let text2 = "x";
for (let i = 1; i <= 20; i++) {
    console.log(text2);
    text2 += "x"
}

