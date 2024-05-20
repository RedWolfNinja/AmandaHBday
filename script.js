const quizQuestions = [
    {
        question: "Когда мы познакомились?",
        choices: ["13 мая 2023 года", "15 мая 2023 года", "18 мая 2023 года"],
        correctAnswer: "13 мая 2023 года"
    },
    {
        question: "Когда 28 Июля я первым ушёл из клуба настольных игр репетитора Миши, что-то произошло. Что?",
        choices: ["Я увидел Дарину с Полиной", "Я увидел Воробья с его девушкой", "Миша выбежал за мной"],
        correctAnswer: "Я увидел Воробья с его девушкой"
    },
    {
        question: "Наша самая выделяющаяся схожесть?",
        choices: ["Стикеры в тг", "Год рождения", "Интересы", "Любовь к кружочкам и гс"],
        correctAnswer: "Год рождения"
    },
    {
        question: "До скольки продлилась наша самая долгая ночная переписка?",
        choices: ["3 утра", "4 утра", "5 утра"],
        correctAnswer: "4 утра"
    },
    {
        question: "Что за еду ты купила мне на юниконе за 3.99 в Олимпии?",
        choices: ["Бутеры", "Холодный суп", "Кебаб"],
        correctAnswer: "Кебаб"
    },
    {
        question: "2. Насколько хорошо ты меня знаешь? Что бы я выбрал?",
        choices: ["Секс", "Компьютер"],
        correctAnswer: "Компьютер"
    },
    {
        question: "3. Насколько хорошо ты меня знаешь? Что бы я выбрал?",
        choices: ["Стикеры с котами", "Секс"],
        correctAnswer: "Стикеры с котами"
    },
    {
        question: "5. Насколько хорошо ты меня знаешь? Что бы я выбрал?",
        choices: ["Коты","Собаки","Секс"],
        correctAnswer: "Коты"
    },
    {
        question: "4. Насколько хорошо ты меня знаешь? Что бы я выбрал?",
        choices: ["Секс", "Секс", "Секс", "Секс", "Секс", "Секс", "Секс!", "Секс?", "Секс...!", "Секс?!?!?", "Секс...", "С-с-секс", "Sekusu", "Sex", "Seks", "Ахуенное лиго со всей компанией у меня дома в полной глуши в лесу"],
        correctAnswer: "Ахуенное лиго со всей компанией у меня дома в полной глуши в лесу"
    }

];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    showQuestion();
});

function showQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    questionElement.textContent = quizQuestions[currentQuestionIndex].question;
    choicesElement.innerHTML = "";

    quizQuestions[currentQuestionIndex].choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.onclick = () => selectChoice(choice);
        choicesElement.appendChild(button);
    });
}

function selectChoice(choice) {
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    if (choice === correctAnswer) {
        score++;
        nextQuestion();
    }
    else if (choice !== correctAnswer) {
        resetQuiz();
    }

}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showCard();
    }
}

function showCard() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("card-container").classList.remove("hidden");
}

function resetQuiz() {
    alert("Неправильный ответ! Попробуй снова.");
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}
