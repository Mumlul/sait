// Конфигурация
const SCRIPT_URL = "ВАШ_URL_СКРИПТА_APPS_SCRIPT";

// Вопросы теста
const questions = [
    {
        question: "Как вы обычно проводите свободное время?",
        answers: [
            { text: "В одиночестве, за чтением или хобби", score: 2 },
            { text: "С друзьями или на мероприятиях", score: 1 },
            { text: "Зависит от настроения", score: 0 }
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
const resultName = document.getElementById('result-name');
const resultPersonality = document.getElementById('result-personality');
const timeSpentElement = document.getElementById('time-spent');

// Переменные состояния
let currentQuestionIndex = 0;
let totalScore = 0;
let startTime;
let timerInterval;
let userName = "";

// Инициализация
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

// Запуск теста
function startQuiz() {
    userName = userNameInput.value.trim() || "Аноним";
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
    await saveResults(userName, personalityType, timeSpent);
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
async function saveResults(name, personality, time) {
    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                personality: personality,
                time: time
            })
        });
        
        const result = await response.text();
        console.log('Результат сохранения:', result);
    } catch (error) {
        console.error('Ошибка при сохранении:', error);
    }
}