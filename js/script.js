"use strict";


window.addEventListener("DOMContentLoaded", () => {



    //‾‾‾‾‾‾‾‾‾‾header‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\

    // получаю элементы
    const headerMenuIcon = document.querySelector(".header__menu-icon");
    const headerMenuNavigation = document.querySelector(".header__navigation");


    // при клике на иконку, передаю слудующею функцию
    headerMenuIcon.addEventListener("click", addRemoveMyClass);

    function addRemoveMyClass() {
        if (headerMenuIcon.classList.contains('_exit')) {
            headerMenuIcon.classList.remove('_exit');
            headerMenuNavigation.classList.remove('_active');
        } else {
            headerMenuIcon.classList.add('_exit');
            headerMenuNavigation.classList.add('_active');
        }
    }
    //_______________________________________________________________________________________________________________________/



    //‾‾‾‾‾‾‾‾‾‾cadrs‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\

    // получаю элементы
    const togglersDown = document.querySelectorAll(".card__more");
    const togglersUp = document.querySelectorAll(".card__toggler");


    // перебираю, и для каждого элемента при клике.....
    togglersDown.forEach(element => {
        element.addEventListener("click", () => {
            const elementInfo = element.nextElementSibling;
            elementInfo.style.display = "block";
            element.style.display = "none";
        });
    });

    // перебираю, и для каждого элемента при клике.....
    togglersUp.forEach(element => {
        element.addEventListener("click", () => {
            console.log(element);
            console.log(element.parentElement);
            const elementInfo = element.parentElement;
            elementInfo.style.display = "none";
            const elementMore = elementInfo.previousElementSibling;
            elementMore.style.display = "inline-block";
        });
    });
    //_______________________________________________________________________________________________________________________/



    //‾‾‾‾‾‾‾‾‾‾footer elements‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\

    // создаём класс-шаблон, чтобы потом делать отдельные экземпляры:
    class FooterBlock {
        constructor(bootstrapGrid, src, alt, href, title, description, parentSelector) {
            this.bootstrapGrid = bootstrapGrid;
            this.src = src;
            this.alt = alt;
            this.href = href;
            this.title = title;
            this.description = description;
            this.parent = document.querySelector(parentSelector); // свойство - в него будет передоватся родитель для блоков
        }

        render() { // метод - сделать версту(рендер) - динамически создать html

            // создаём элемент c тегом для html:
            const element = document.createElement("div");

            // этому элементу добавляем класс:
            element.className = this.bootstrapGrid;

            // в этот элемент вставляем (html + текст + значения свойств):
            element.innerHTML = `
                    <div class="footer__block">
                        <img class="footer__picture" src=${this.src} alt=${this.alt}>
                        <a class="footer__sub-title" href=${this.href}>${this.title}</a>
                        <p class="footer__sub-description">${this.description}</p>
                    </div>
            `;

            // вставляем элемент на страницу, в родителя:
            this.parent.append(element);
        }
    }
    //-------------------------------------------------------------
    // создаём новые экземпляры и динамически помещаем их на сайт:

    // экземпляр-1:
    const block1 = new FooterBlock(
        "col-12 col-sm-6 col-lg-4",
        "img/footer_flower.svg",
        "flower",
        "#",
        "Invest in talent Teams",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in diam nisi laoreet vel congue facilisis dictum.",
        ".footer__section" // родитель с классом: <div class="footer__section">
    );
    //вызываем рендер и экземпляр создаётся:
    block1.render();

    // экземпляр-2:
    const block2 = new FooterBlock(
        "col-12 col-sm-6 col-lg-4",
        "img/footer_check.svg",
        "check",
        "#",
        "In-sync with you work flows",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in diam nisi laoreet vel congue facilisis dictum.",
        ".footer__section" // родитель с классом: <div class="footer__section">
    );
    //вызываем рендер и экземпляр создаётся:
    block2.render();

    // экземпляр-3:
    const block3 = new FooterBlock(
        "col-12 col-sm-6 col-lg-4",
        "img/footer_cash.svg",
        "cash",
        "#",
        "Build impact by our work",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in diam nisi laoreet vel congue facilisis dictum.",
        ".footer__section" // родитель с классом: <div class="footer__section">
    );
    //вызываем рендер и экземпляр создаётся:
    block3.render();
    //_______________________________________________________________________________________________________________________/


    //                                                                                                                       \
    //‾‾‾‾‾‾‾‾‾‾modal‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\

    // получаем элементы
    const modalTrigger = document.querySelectorAll("[data-modal]"), // псевдомассив - по дата атрибуту data-modal получаем
        modal = document.querySelector(".modal"), // модальное окно - по классу получаем
        modalCloseBtn = document.querySelector("[data-close]"); // кнопка закрытия - дата-атрибуту data-close получаем

    //----------------------------------------------------
    // функция - открытие модального окна - обьявили
    function openModel() {
        modal.classList.add("_show");
        modal.classList.remove("_hide");

        document.body.style.overflow = "hidden"; // отключить скролл-прокрутку сайта при открытом модальном окне
    }

    // функция - закрытие модального окна - обьявили
    function closeModal() {
        modal.classList.add("_hide");
        modal.classList.remove("_show");

        document.body.style.overflow = ""; // включить обратно скролл-прокрутку сайта когда модальное окно закрылось
    }

    //-----------------------------------------------------
    // действия при клике на кнопку - из псевдомассива
    modalTrigger.forEach(button => {
        button.addEventListener("click", openModel);
    });

    // действия при клике на кнопку-закрыть в модальном окне
    modalCloseBtn.addEventListener("click", closeModal);
    //_______________________________________________________________________________________________________________________/

});