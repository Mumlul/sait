// Конфигурация
// const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMVh6H4dc_RQhq7-NssgPeTI4KeOxU2ZyKvnd9tFfKpBrWkGBemG90JeYe3uO-oRyoYw/exec";

// Вопросы теста
const questions = [
    {
        question: "Как вы обычно проводите свободное время?",
        answers: [
            { text: "В одиночестве, за чтением или хобби", score: 3 },
            { text: "С друзьями или на мероприятиях", score: 1 },
            { text: "Зависит от настроения", score: 2 }
        ]
    },
    {
        question: "На вечеринке вы:",
        answers: [
            { text: "Общаюсь со всеми подряд", score: 1 },
            { text: "Разговариваю с 1-2 знакомыми", score: 2 },
            { text: "Стараюсь найти тихий уголок", score: 3 }
        ]
    },
    {
        question: "Как вы реагируете на неожиданные ситуации?",
        answers: [
            { text: "Легко адаптируюсь", score: 1 },
            { text: "Нужно время на осмысление", score: 2 },
            { text: "Сильно переживаю", score: 3 }
        ]
    },
    {
        question: "Ваше отношение к шумным компаниям:",
        answers: [
            { text: "Обожаю, это заряжает энергией", score: 1 },
            { text: "Иногда бывает приятно", score: 2 },
            { text: "Предпочитаю избегать", score: 3 }
        ]
    },
    {
        question: "Как часто вы инициируете встречи с друзьями?",
        answers: [
            { text: "Регулярно", score: 1 },
            { text: "Иногда", score: 2 },
            { text: "Почти никогда", score: 3 }
        ]
    },
    {
        question: "Ваша реакция на телефонные звонки:",
        answers: [
            { text: "Сразу беру трубку", score: 1 },
            { text: "Иногда откладываю ответ", score: 2 },
            { text: "Чаще перезваниваю позже", score: 3 }
        ]
    },
    {
        question: "В общественном транспорте вы:",
        answers: [
            { text: "Легко завожу беседы", score: 1 },
            { text: "Отвечаю, если обратятся", score: 2 },
            { text: "Надеваю наушники и избегаю контактов", score: 3 }
        ]
    },
    {
        question: "Как вы принимаете решения?",
        answers: [
            { text: "Быстро, полагаясь на интуицию", score: 1 },
            { text: "Обдумываю некоторое время", score: 2 },
            { text: "Долго анализирую все варианты", score: 3 }
        ]
    },
    {
        question: "Ваше рабочее пространство:",
        answers: [
            { text: "Открытое, где все на виду", score: 1 },
            { text: "Умеренно организованное", score: 2 },
            { text: "Закрытое и уединенное", score: 3 }
        ]
    },
    {
        question: "Как вы ведете себя в конфликтах?",
        answers: [
            { text: "Активно отстаиваю позицию", score: 1 },
            { text: "Стараюсь найти компромисс", score: 2 },
            { text: "Избегаю открытых противостояний", score: 3 }
        ]
    },
    {
        question: "Ваше отношение к публичным выступлениям:",
        answers: [
            { text: "Обожаю внимание аудитории", score: 1 },
            { text: "Нервничаю, но справляюсь", score: 2 },
            { text: "Стараюсь избегать любой ценой", score: 3 }
        ]
    },
    {
        question: "Как вы восстанавливаете энергию?",
        answers: [
            { text: "В общении с людьми", score: 1 },
            { text: "В небольшой компании", score: 2 },
            { text: "В полном одиночестве", score: 3 }
        ]
    },
    {
        question: "Ваше отношение к спонтанным планам:",
        answers: [
            { text: "Обожаю неожиданности", score: 1 },
            { text: "Иногда соглашаюсь", score: 2 },
            { text: "Предпочитаю запланированное", score: 3 }
        ]
    },
    {
        question: "Как часто вы делитесь личными переживаниями?",
        answers: [
            { text: "С легкостью рассказываю многим", score: 1 },
            { text: "Только близким друзьям", score: 2 },
            { text: "Практически никогда", score: 3 }
        ]
    },
    {
        question: "В новом коллективе вы:",
        answers: [
            { text: "Быстро знакомлюсь со всеми", score: 1 },
            { text: "Знакомлюсь постепенно", score: 2 },
            { text: "Долго остаюсь в стороне", score: 3 }
        ]
    },
    {
        question: "Ваше отношение к светским беседам:",
        answers: [
            { text: "Легко поддерживаю", score: 1 },
            { text: "Иногда участвую", score: 2 },
            { text: "Считаю пустой тратой времени", score: 3 }
        ]
    },
    {
        question: "Как вы относитесь к видеозвонкам?",
        answers: [
            { text: "Предпочитаю их текстовым сообщениям", score: 1 },
            { text: "Использую при необходимости", score: 2 },
            { text: "Стараюсь избегать", score: 3 }
        ]
    },
    {
        question: "Ваше поведение на совещаниях:",
        answers: [
            { text: "Активно высказываюсь", score: 1 },
            { text: "Участвую при необходимости", score: 2 },
            { text: "Чаще молчу и слушаю", score: 3 }
        ]
    },
    {
        question: "Как вы относитесь к работе в коворкингах?",
        answers: [
            { text: "Обожаю атмосферу", score: 1 },
            { text: "Нейтрально", score: 2 },
            { text: "Предпочитаю работать один", score: 3 }
        ]
    },
    {
        question: "Ваше идеальное утро:",
        answers: [
            { text: "Бодрое общение с домочадцами", score: 1 },
            { text: "Спокойные сборы", score: 2 },
            { text: "Полная тишина и уединение", score: 3 }
        ]
    }
];

// Элементы DOM
const nameForm = document.getElementById('name-form');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const userNameInput = document.getElementById('user-name');
const userGroupeInput = document.getElementById('user-groupe');
const resultName = document.getElementById('result-name');
const resultPersonality = document.getElementById('result-personality');
const timeSpentElement = document.getElementById('time-spent');

// Переменные состояния
let currentQuestionIndex = 0;
let totalScore = 0;
let startTime;
let timerInterval;
let userName = "";
let userGroupe="";

// Инициализация
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

// Запуск теста
function startQuiz() {
    userName = userNameInput.value.trim() || "Аноним";
    userGroupe=userGroupeInput.value.trim() || "Неизвестно";
    nameForm.style.display = 'none';
    quizContainer.style.display = 'block';
    
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
    
    showQuestion();
}

// Отображение вопроса
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    
    questionElement.innerHTML = `<h3>Вопрос ${currentQuestionIndex + 1}/${questions.length}</h3>
                               <p>${currentQuestion.question}</p>`;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(answer.score));
        answerButtons.appendChild(button);
    });
}

// Обработка выбора ответа
function selectAnswer(score) {
    totalScore += score;
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

// Следующий вопрос
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

// Завершение теста
async function finishQuiz() {
    clearInterval(timerInterval);
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    const timeSpent = Math.floor((new Date().getTime() - startTime) / 1000);
    const personalityType = determinePersonality(totalScore);
    
    resultName.textContent = userName;
    resultPersonality.textContent = personalityType;
    timeSpentElement.textContent = timeSpent;
    
    // Отправка результатов
    await saveResults(userName, personalityType, timeSpent, userGroupe);
}

// Определение типа личности
function determinePersonality(score) {
    if (score >= 6) return "Интроверт";
    if (score >= 3) return "Амбиверт";
    return "Экстраверт";
}

// Таймер
function updateTimer() {
    const currentTime = new Date().getTime();
    const timeSpent = Math.floor((currentTime - startTime) / 1000);
    timeSpentElement.textContent = timeSpent;
}

// Сброс состояния
function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Перезапуск теста
function restartQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    resultContainer.style.display = 'none';
    nameForm.style.display = 'block';
    userNameInput.value = userName;
}

// Сохранение результатов через Apps Script
async function saveResults(name, personality, time, group) {
  const SERVER_URL = "https://quiz-server-zsji.onrender.com/api/save ";

  try {
    const response = await fetch(SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        personality: personality,
        time: time,
        group: group
      })
    });

    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
    }

    const result = await response.text(); // Можно использовать .json(), если сервер возвращает JSON
    console.log("Данные успешно отправлены:", result);

  } catch (error) {
    console.error("Ошибка при отправке данных:", error.message);
    alert("Не удалось сохранить результаты. Проверьте подключение к интернету.");
  }
}