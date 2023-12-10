import { cards } from "../../data/data.js";
//import Bookmarkfunction!

export function Card(props) {
  console.log("hallo, hier bin ich in der card");
  console.log(props);
  const card = document.createElement("article");
  card.attributes.add("data-js", "qabox");
  card.classList.add("qabox");
  //fix css --> .card
  card.innerHTML = `
            <button class="button-bookmark" data-js="bookmark-button"></button>
            <p class="question" data-js="question"></p>
            <button class="button-show-answer" data-js="button-show-answer">
              <span class="button-show-answer_show">Show</span>
              <span class="button-show-answer_hide">Hide</span> Answer
            </button>
            <p class="answer" data-js="answer"></p>
            <ul class="categories" aria-label="categories" data-js="categories">
            </ul>
      `;

  const question = card.querySelector('[data-js="question"]');
  const answerButton = card.querySelector('[data-js="button-show-answer"]');
  const answer = card.querySelector('[data-js="answer"]');
  const tags = card.querySelector('[data-js="categories"]');
  const bookmarkButtonWrapper = card.querySelector(
    '[data-js="bookmark-button"]'
  );

  question.textContent = props.question;
  answer.textContent = props.answer;

  props.tags.forEach((tag) => {
    const tagElement = document.ceateElement("li");
    tagElement.classList.add("card__tag");
    //css anpassen
    tagElement.textContent = "#" + tag;
    tags.append(tagElement);
  });

  function handleBookmarkButtonClick(event) {
    console.log("hallo");
    //     cards.find((card) => card.question === props.question).isBookmarked =
    //       !props.isBookmarked;
    //     // To prevent the need to rerender, we can just toggle the class here
    //     event.currentTarget.classList.toggle("bookmark--active");
  }

  const bookmarkButton = Bookmark({
    active: props.isBookmarked,
    onClick: handleBookmarkButtonClick,
  });
  bookmarkButtonWrapper.append(bookmark - button);

  //   function handleAnswerButtonClick() {
  //     answer.classList.toggle("card__answer--active");
  //   }

  //   answerButton.addEventListener("click", handleAnswerButtonClick);

  return card;
}
