console.clear();

//Show/Hide Answercard

const buttonShowAnswer1 = document.querySelector(
  '[data-js="button-show-answer_1"]'
);

const Box1 = document.querySelector('[data-js="qabox_1"]');

if (buttonShowAnswer1) {
  buttonShowAnswer1.addEventListener("click", () => {
    Box1.classList.toggle("qabox--answer-visible");
  });
}

const buttonShowAnswer2 = document.querySelector(
  '[data-js="button-show-answer_2"]'
);

const Box2 = document.querySelector('[data-js="qabox_2"]');

if (buttonShowAnswer2) {
  buttonShowAnswer2.addEventListener("click", () => {
    Box2.classList.toggle("qabox--answer-visible");
  });
}

//Dark-Mode

const checkboxDarkMode = document.querySelector('[data-js="darkModeToggle"]');

if (checkboxDarkMode) {
  checkboxDarkMode.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
  });
}

//Switch bookmarkicon on buttonclick + Anzeige auf Bookmarked-Page

//Counter

//Categorien-Keywords?
//Change Userpic/-name?
