var basket = 0;

const buttonClick = (event) => {
    const card = event.path[1];
    const productName = card.querySelector('p.product-text');
    const productPrice = card.querySelector('p.product-price');
    const basketInside = document.querySelector('div.basket-inside');
    const basketSum = document.querySelector('div.sum');
    basket += Number(productPrice.innerText)

    if (basketInside.innerText === "Пока ваша корзина пуста...") {
        basketInside.innerHTML = `${productName.innerText} - ${productPrice.innerText}<br>`
        basketSum.classList.remove('disp-none')
        basketSum.innerText += ` ${basket}`;
    }
    else {
        basketInside.innerHTML += `${productName.innerText} - ${productPrice.innerText}<br>`
        basketSum.innerText = `Общая сумма сотставила: ${basket}`;
    }
}



window.onload = () => {
    const buttons = document.querySelectorAll('button');
    for (const item of buttons) {
        item.addEventListener('click', buttonClick);
    }
}