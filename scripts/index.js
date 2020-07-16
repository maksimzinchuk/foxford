//объявляем переменные
let clicks = 0;

//изменим вид выбранной карточки
function changeCard(button) {
    const textOpacity = button.closest('.cards__box').querySelector('.cards__text');
    const doneFill = button.closest('.cards__item').querySelector('.cards__done-fill');

    //меняем кнопку
    button.classList.toggle('cards__add-button_active');
    //меняем текст
    button.textContent = button.textContent === 'Добавить' ? 'Удалить из заявки' : 'Добавить';
    //меняем прозрачность
    textOpacity.classList.toggle('cards__text_opacity');
    //добавляем галочку
    doneFill.classList.toggle('cards__done-fill_active');
}

//счетчик выбранных карточек
function itemsCounter(button) {
    let clickedElement = button;
    if (clickedElement.classList.contains('cards__add-button_active') ) {
        clicks++
    }
    else if (!clickedElement.classList.contains('cards__add-button_active')) {
       clicks--
    }
    //отправим значение в функцию отображения счетчика корзины
    basketRender(clicks);
}

//счетчик корзины
function basketRender(clicks) {
    const basketNumber = document.querySelector('.basket__counter-number');
    const basketBadge = document.querySelector('.basket__counter-image');
    if (clicks >= 1) {
        basketNumber.classList.add('basket__counter-number_active');
        basketBadge.classList.add('basket__counter-image_active');
        basketNumber.textContent = clicks;
    }
    else {
        basketNumber.classList.remove('basket__counter-number_active');
        basketBadge.classList.remove('basket__counter-image_active');
        basketNumber.textContent = '';
    }
}

//кнопки Добавить
function toggleButton() {
    const buttons = Array.from(document.querySelectorAll('.cards__add-button'));

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            //отправим нажатую кнопку в changeCard
            changeCard(button);
            //отправим нажатую кнопку в itemsCounter
            itemsCounter(button)
        });
    });
}

//включим функцию листенера кнопок
toggleButton();