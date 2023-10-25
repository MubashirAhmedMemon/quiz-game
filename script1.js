var quizDB = [
    // Your quiz questions and answers here
    // ...
    {
        question: "Q1: What is 5 x 5",
        a: "25",
        b: "65",
        c: "75",
        d: "100",
        ans: "ans1"
    },
    {
        question: "Q2: What is 7 x 2",
        a: "36",
        b: "65",
        c: "14",
        d: "7",
        ans: "ans3"

    },
    {
        question: "Q3: What is 9 x 3",
        a: "32",
        b: "72",
        c: "18",
        d: "27",
        ans: "ans4"

    },

    {
        question: "Q4: What is 5 x 9",
        a: "65",
        b: "45",
        c: "30",
        d: "15",
        ans: "ans2"

    },
    {
        question: "Q5:What is Square Of ‎ 12",
        a: "122",
        b: "144",
        c: "124",
        d: "24",
        ans: "ans2"

    },
    {
        question: "Q6:What is the Square root of 64",
        a: "8",
        b: "12",
        c: "14",
        d: "4",
        ans: "ans1"
    },
    {
        question: "Q7:If P implies Q, an equivalent statement is",
        a: "Q implies P",
        b: "Q is a necessary condition for P",
        c: "P is a necessary condition for Q",
        d: "Not P implies Q",
        ans: "ans2"
    },
    {
        question: "Q8: Full Form Of HCF",
        a: "Highest Class Form",
        b: "Highest Common Fraction",
        c: "Highest Common Factor",
        d: "Hyper Classic Fraction",
        ans: "ans3"

    },
    {
        question: "Q9: Full Form Of LCM",
        a: "Least Common Multiple",
        b: "Last Common Number",
        c: "Life Common Measurement",
        d: "Last Hyper Multiple",
        ans: "ans1"

    },
    {
        question: "Q10:144 ÷ 4",
        a: "34",
        b: "36",
        c: "32",
        d: "44",
        ans: "ans3"
    },
    {
        question: "Q11: What is 5 + 3?",
        a: "8",
        b: "10",
        c: "7",
        d: "12",
        ans: "ans1"
    },
    {
        question: "Q12: What is 4 * 6?",
        a: "24",
        b: "10",
        c: "18",
        d: "16",
        ans: "ans1"
    },
    {
        question: "Q13: What is 10 - 7?",
        a: "5",
        b: "3",
        c: "7",
        d: "10",
        ans: "ans2"
    },
    {
        question: "Q14: What is 15 / 3?",
        a: "5",
        b: "3",
        c: "7",
        d: "10",
        ans: "ans1"
    },
    {
        question: "Q15: What is 5 + 3?",
        a: "7",
        b: "8",
        c: "9",
        d: "10",
        ans: "ans2"
    },
    {
        question: "Q16: What is 4 * 6?",
        a: "16",
        b: "20",
        c: "24",
        d: "30",
        ans: "ans3"
    },
    {
        question: "Q17: What is 15 - 7?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        ans: "ans4"
    },
    {
        question: "Q18: What is 36 / 6?",
        a: "4",
        b: "6",
        c: "8",
        d: "10",
        ans: "ans2"
    },
    {
        question: "Q19: What is 2^3 (2 raised to the power of 3)?",
        a: "4",
        b: "6",
        c: "8",
        d: "16",
        ans: "ans3"
    },
    {
        question: "Q20: What is 3 + 4?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        ans: "ans3"
    },
    {
        question: "Q21: What is 8 * 2?",
        a: "12",
        b: "14",
        c: "16",
        d: "18",
        ans: "ans3"
    },
    {
        question: "Q22: What is 20 - 9?",
        a: "7",
        b: "9",
        c: "11",
        d: "15",
        ans: "ans3"
    },
    {
        question: "Q23: What is 49 / 7?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        ans: "ans3"
    },
    {
        question: "Q24: What is 2^4 (2 raised to the power of 4)?",
        a: "8",
        b: "12",
        c: "16",
        d: "24",
        ans: "ans3"
    },
    {
        question: "Q25: What is 12 + 5?",
        a: "15",
        b: "16",
        c: "17",
        d: "18",
        ans: "ans1"
    },
    {
        question: "Q26: What is 9 * 7?",
        a: "63",
        b: "72",
        c: "81",
        d: "90",
        ans: "ans1"
    },
    {
        question: "Q27: What is 55 - 23?",
        a: "42",
        b: "45",
        c: "50",
        d: "32",
        ans: "ans4"
    },
    {
        question: "Q28: What is 144 / 12?",
        a: "10",
        b: "12",
        c: "14",
        d: "16",
        ans: "ans2"
    },
    {
        question: "Q29: What is 2^5 (2 raised to the power of 5)?",
        a: "8",
        b: "16",
        c: "32",
        d: "64",
        ans: "ans3"
    }, {
        question: "Q19: What is 49 / 7?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        ans: "ans3"
    }
];

var question = document.querySelector('.question');
var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');
var option3 = document.querySelector('#option3');
var option4 = document.querySelector('#option4');
var submit = document.querySelector('#submit');
var answers = document.querySelectorAll('.answer');
var showScore = document.querySelector('#showScore');
var countdownInterval;

let questionCount = 0;
let score = 0;

var loadQuestion = () => {
    // Clear all checked radio buttons
    answers.forEach((curAns) => {
        curAns.checked = false;
    });

    var questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};

loadQuestion();

var getCheckedAnswer = () => {
    let answer;
    answers.forEach((curAns) => {
        if (curAns.checked) {
            answer = curAns.id;
        }
    });
    return answer;
};

var startTimer = () => {
    var timerDisplay = document.querySelector('#timer');
    var timeLimit = 5; // 5 minutes in seconds
    let timeRemaining = timeLimit;

    countdownInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = 'Time\'s up!';
            submit.click();
        } else {
            var minutes = Math.floor(timeRemaining / 60);
            var seconds = timeRemaining % 60;
            timerDisplay.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            timeRemaining--;
        }
    }, 1000);
};

var hideBlackScreen = () => {
    var blackScreen = document.getElementById('blackScreen');
    blackScreen.style.display = 'none';

    var quizDiv = document.getElementById('quizDiv');
    quizDiv.style.display = 'block';

    startTimer();
};

setTimeout(hideBlackScreen, 8000);

submit.addEventListener('click', () => {
    clearInterval(countdownInterval);

    var checkedAnswer = getCheckedAnswer();
    var correctAnswer = quizDB[questionCount].ans;

    if (checkedAnswer === correctAnswer) {
        score++;
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You got it right!',
            showConfirmButton: false,
            timer: 2000,
        });
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Oops! That\'s not correct.',
            showConfirmButton: false,
            timer: 2000,
        });
    }

    questionCount++;

    if (questionCount < quizDB.length) {
        loadQuestion();
        startTimer();
    } else {
        showScore.innerHTML = `
                    <h3>Your Score ${score}/${quizDB.length}</h3>
                    <button class="btn" onclick="location.reload()">Play Again</button>
                `;
        submit.style.display = "none";
        showScore.classList.remove('scoreArea');
        timerDisplay.textContent = '';
    }
});
