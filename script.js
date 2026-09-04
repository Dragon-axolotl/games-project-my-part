/* =========================
   ТЕМА
========================= */

const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle(
    "dark-theme",
    themeToggle.checked
  );
});


/* =========================
   КАЛЬКУЛЯТОР
========================= */

const firstNumberInput =
  document.querySelector("#first-number");

const secondNumberInput =
  document.querySelector("#second-number");

const resultInput =
  document.querySelector("#calculator-result");

const operationButtons =
  document.querySelectorAll(
    "[data-operation]"
  );

const calculateButton =
  document.querySelector("#calculate-button");


let selectedOperation = null;


/* Выбираем математическую операцию */

operationButtons.forEach(button => {

  button.addEventListener("click", () => {

    selectedOperation =
      button.dataset.operation;

    operationButtons.forEach(item => {
      item.classList.remove("selected");
    });

    button.classList.add("selected");

  });

});


/* Выполняем вычисление */

calculateButton.addEventListener("click", () => {

  const firstNumber =
    Number(firstNumberInput.value);

  const secondNumber =
    Number(secondNumberInput.value);


  if (
    firstNumberInput.value === "" ||
    secondNumberInput.value === ""
  ) {
    resultInput.value =
      "Введіть числа";

    return;
  }


  if (!selectedOperation) {

    resultInput.value =
      "Оберіть дію";

    return;
  }


  let result;


  switch (selectedOperation) {

    case "add":
      result =
        firstNumber + secondNumber;
      break;

    case "subtract":
      result =
        firstNumber - secondNumber;
      break;

    case "multiply":
      result =
        firstNumber * secondNumber;
      break;

    case "divide":

      if (secondNumber === 0) {

        resultInput.value =
          "Не можна ділити на 0";

        return;
      }

      result =
        firstNumber / secondNumber;

      break;
  }


  resultInput.value = result;

});


/* =========================
   ФУТБОЛ
========================= */

const footballField =
  document.querySelector("#football-field");

const footballBall =
  document.querySelector("#football-ball");


footballField.addEventListener(
  "click",
  event => {

    const fieldRect =
      footballField.getBoundingClientRect();


    const x =
      event.clientX -
      fieldRect.left;

    const y =
      event.clientY -
      fieldRect.top;


    const ballWidth =
      footballBall.offsetWidth;


    const ballHeight =
      footballBall.offsetHeight;


    let newX =
      x - ballWidth / 2;

    let newY =
      y - ballHeight / 2;


    newX = Math.max(
      0,
      Math.min(
        newX,
        fieldRect.width - ballWidth
      )
    );


    newY = Math.max(
      0,
      Math.min(
        newY,
        fieldRect.height - ballHeight
      )
    );


    footballBall.style.left =
      `${newX}px`;

    footballBall.style.top =
      `${newY}px`;

    footballBall.style.transform =
      "none";

  }
);


/* =========================
   НАША КОМАНДА
========================= */


/*
  ПОТОМ СЮДА МОЖНО ДОБАВИТЬ
  НАСТОЯЩИХ УЧАСНИКІВ КОМАНДИ.
*/

const teamMembers = [

  {
    name: "Ім'я студента",
    description:
      "Інформація про роботу, яку він виконує"
  },

  {
    name: "Учасник 2",
    description:
      "Інформація про роботу учасника"
  },

  {
    name: "Учасник 3",
    description:
      "Інформація про роботу учасника"
  },

  {
    name: "Учасник 4",
    description:
      "Інформація про роботу учасника"
  }

];


let currentMember = 0;


const teamName =
  document.querySelector("#team-name");

const teamDescription =
  document.querySelector("#team-description");

const teamDots =
  document.querySelector("#team-dots");

const teamPrev =
  document.querySelector("#team-prev");

const teamNext =
  document.querySelector("#team-next");


/* Создаём точки */

teamMembers.forEach(
  (_, index) => {

    const dot =
      document.createElement("span");

    dot.classList.add("team-dot");

    if (index === 0) {
      dot.classList.add("active");
    }

    teamDots.appendChild(dot);

  }
);


const dots =
  document.querySelectorAll(
    ".team-dot"
  );


/* Показываем участника */

function showMember(index) {

  const member =
    teamMembers[index];


  teamName.textContent =
    member.name;

  teamDescription.textContent =
    member.description;


  dots.forEach(dot => {
    dot.classList.remove("active");
  });


  dots[index].classList.add("active");

}


teamPrev.addEventListener(
  "click",
  () => {

    currentMember--;

    if (currentMember < 0) {
      currentMember =
        teamMembers.length - 1;
    }

    showMember(currentMember);

  }
);


teamNext.addEventListener(
  "click",
  () => {

    currentMember++;

    if (
      currentMember >=
      teamMembers.length
    ) {
      currentMember = 0;
    }

    showMember(currentMember);

  }
);


/* =========================
   ПОДПИСКА
========================= */

const subscribeForm =
  document.querySelector(
    "#subscribe-form"
  );


subscribeForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();

    const email =
      document.querySelector("#email");

    alert(
      `Дякуємо за підписку: ${email.value}`
    );

    email.value = "";

  }
);