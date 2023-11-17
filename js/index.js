console.clear();

//Show/Hide Answercard

const buttonShowAnswer1 = document.querySelector(
  '[data-js="button-show-answer_1"]'
);

const Box1 = document.querySelector('[data-js="qabox_1"]');

buttonShowAnswer1.addEventListener("click", () => {
  Box1.classList.toggle("qabox--answer-visible");

  //   if (!Box1.classList.contains("answer--visible")) {
  //     Box1.innerHTML = "Hide Answer";
  //   }
});

//Switch bookmarkicon on buttonclick + Anzeige auf Bookmarked-Page

//Dark-Mode

//Counter

//Categorien-Keywords?
//Change Userpic/-name?
//
