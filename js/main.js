const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
  const content = accordion.querySelector(".accordion__content");
  accordion.classList.add("accordion__active");
  content.style.maxHeight = content.scrollHeight + "1px";
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector(".accordion__content");
  accordion.classList.remove("accordion__active");
  content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
  const intro = accordion.querySelector(".accordion__intro");
  const content = accordion.querySelector(".accordion__content");

  intro.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion));
      openAccordion(accordion);
    }
  };
});

// tabs
function openTab(evt, tabName) {
  // Получаем все элементы с классом tablinks и tabcontent
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");

  // Скрыть все табы и удалить класс active у кнопок
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" active", "");
  }
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Показать выбранный таб и добавить класс active к выбранной кнопке
  document.getElementById(tabName).className += " active";
  evt.currentTarget.className += " active";
}

// popup
let popupBg = document.querySelector(".popup__bg"); // Фон попап окна
let popup = document.querySelector(".popup"); // Само окно
let openPopupButtons = document.querySelectorAll(".open-popup"); // Кнопки для показа окна
let closePopupButton = document.querySelector(".close-popup"); // Кнопка для скрытия окна
openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.classList.add("active");
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});
closePopupButton.addEventListener("click", () => {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});
document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
    document.body.style.overflow = "auto"; // Allow scrolling again
  }
});
// slider
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 25,
  loopAdditionalSlides: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1400: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    901: {
      slidesPerView: 2,
    },
    698: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
});

AOS.init();

const burger = document.querySelector(".header__burger");
const menuList = document.querySelector(".header__menu-list");
const menuLinks = document.querySelectorAll(".header__menu-link"); // Получаем все ссылки меню

burger.addEventListener("click", () => {
  menuList.classList.toggle("active"); // Переключаем класс 'active' для меню
});

// Добавляем обработчик события для каждого пункта меню
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuList.classList.remove("active"); // Убираем класс 'active' при клике на пункт меню
  });
});
