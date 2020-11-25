document.write("<b>1. Написать функцию, преобразующую число в объект.</b> Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.<br><br>");

var enterNumber;
while (true) {
    enterNumber = prompt("Введите число от 0 до 999:");
    if (enterNumber >= 0 && enterNumber <= 999) {
        alert("Успешно");
        break;
    }
    alert("Попробуй еще");
}

function numToObj(num) {
    var units, dozens, hundreds;
    units = (num % 10);
    dozens = ((num - units) % 100) / 10;
    hundreds = Math.trunc((num - dozens * 10 - units) / 100);

    var obj = {};
    obj.units = units;
    obj.dozens = dozens;
    obj.hundreds = hundreds;

    for (var i in obj) {
        document.write(i + ": " + obj[i] + "<br>")
    }
}

document.write("Вы ввели число: " + enterNumber + "<br>")
numToObj(enterNumber);

document.write("<br><b>2. Продолжить работу с интернет-магазином:</b><br>a) В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы? <br>b) Реализуйте такие объекты. <br>c) Перенести функционал подсчета корзины на объектно-ориентированную базу.<br><br>");

// Листинг реализации задания из урока 3
// let Basket = [
//     { name: 'Телефон', price: 18990 },
//     { name: 'Зарядка', price: 1300 },
//     { name: 'Наушники', price: 4700 },
//     { name: 'Чехол', price: 890 },
//     { name: 'Держатель для машины', price: 1500 }
// ];

// function countBasketPrice(arr) {
//     var count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         count += arr[i].price;
//     }
//     return count
// }

var basket = {
    lot1: { name: 'Телефон', price: 18990 },
    lot2: { name: 'Зарядка', price: 1300 },
    lot3: { name: 'Наушники', price: 4700 },
    lot4: { name: 'Чехол', price: 890 },
    lot5: { name: 'Держатель для машины', price: 1500 },
    countPrice: function () {
        var count = 0;
        document.write("В вашей корзине лежат позиции:<br>");
        for (let i in basket) {
            if (basket[i].price) {
                document.write(basket[i].name + ": " + basket[i].price + "<br>");
                count += basket[i].price;
            }
            else { break }
        }
        document.write("<br><u>Сумма вашего заказа составила</u> " + count + "<br><br>");
    }
};

basket.countPrice();




