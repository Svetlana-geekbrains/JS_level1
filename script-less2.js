document.write("<b>1. Дан код: </b><br> var a = 1, b = 1, c, d; <br>c = ++a; alert(c)           // 2 <br> d = b++; alert(d);           // 1 <br> c = (2+ ++a); alert(c);      // 5 <br> d = (2+ b++); alert(d);      // 4 <br> alert(a);                    // 3 <br> alert(b);                    // 3 <br> Почему код даёт именно такие результаты?<br><br>");

document.write("1. Команда '= ++a' прибавляет единцу к переменной а и присваивает значение переменной с (если вывести а, будет = 2)<br> 2. Команда '= b++' сначала присваивает переменной d значение переменной b, возвращает ее первоначальное значение, и только потом прибавляет 1 (если вывести b, будет = 2)<br> 3. Переменной с присваивается сумма - двойка и увеличенная на 1 переменная a, которая после первого преобразования была = 2<br> 4. Аналогично предыдущему, переменной d присваивается сумма двойки и переменной b (=2), но ее увеличение на 1 происходит после операции, а не до (если вывести b, будет = уже 3)<br> 5. Вытекает из предыдущих преобразований - дважды были увеличены на единицу.<br><br>");

document.write("<b>2. Чему будет равен x в примере ниже? </b><br> var a = 2; <br> var x = 1 + (a *= 2);<br><br>");

document.write("Ответ = 5, значение в скобках = 4, т.к. переменная а сначала умножается на 2, и только потом возвращается и добавляется в выражение 'x = 1 + (a *= 2)'<br><br>");

document.write("<b>3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:</b><br>Если a и b положительные, вывести их разность; если а и b отрицательные, вывести их произведение; если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.<br><br>");

var a = -5, b = 12, res;

if (a >= 0 && b >= 0) {
    res = Math.abs(a - b);
}
else if (a < 0 && b < 0) {
    res = a * b;
}
else {
    res = a + b;
}
document.write(res + "<br><br>");

document.write("<b>4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.</b><br><br>");

var max = 15, min = 0;
var a = Math.floor(Math.random() * (max - min)) + min;
document.write("Случайное число от 0 до 15 = " + a + "<br><br>");

switch (a) {
    case 0:
        document.write("0 <br>");
    case 1:
        document.write("1 <br>");
    case 2:
        document.write("2 <br>");
    case 3:
        document.write("3 <br>");
    case 4:
        document.write("4 <br>");
    case 5:
        document.write("5 <br>");
    case 6:
        document.write("6 <br>");
    case 7:
        document.write("7 <br>");
    case 8:
        document.write("8 <br>");
    case 9:
        document.write("9 <br>");
    case 10:
        document.write("10 <br>");
    case 11:
        document.write("11 <br>");
    case 12:
        document.write("12 <br>");
    case 13:
        document.write("13 <br>");
    case 14:
        document.write("14 <br>");
    case 15:
        document.write("15 <br><br>");
}

document.write("<b>5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.</b><br><br>");

var a = 12, b = 3;

function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

document.write("Исходные: а = " + a + "; b = " + b + "<br>");
document.write("Сложение: " + addition(a, b) + "<br>");
document.write("Вычитание: " + subtraction(a, b) + "<br>");
document.write("Умножение: " + multiplication(a, b) + "<br>");
document.write("Деление: " + division(a, b) + "<br><br>");

document.write("<b>6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).</b><br><br>");

function mathOperation(arg1, arg2, operation) {
    if (operation === "add") {
        return addition(arg1, arg2);
    }
    else if (operation === "sub") {
        return subtraction(arg1, arg2);
    }
    else if (operation === "mult") {
        return multiplication(arg1, arg2);
    }
    else if (operation === "div") {
        return division(arg1, arg2);
    }
}

let operation = prompt("К заданию 6 урока 2. Введите команду (add, sub, mult или div): ");
var res = mathOperation(a, b, operation);

switch (operation) {
    case "add":
        document.write("Сложение: " + res + "<br><br>");
        break;
    case "sub":
        document.write("Вычитание: " + res + "<br><br>");
        break;
    case "mult":
        document.write("Умножение: " + res + "<br><br>");
        break;
    case "div":
        document.write("Деление: " + res + "<br><br>");
        break;
}