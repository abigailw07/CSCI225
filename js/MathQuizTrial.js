
/* ELIMINT - QUIZ JAVASCRIPT */

import {
    getCurrentUser,
    signInWithGoogle,
    signOutUser,
    saveQuizScore
} from "./MathQuizTrialFirebase.js";

/* 1. QUIZ QUESTIONS */

const topics = [
    {
        id: "addition",
        name: "Addition",
        icon: "➕",
        description: "Practice adding numbers together.",
        questions: [
            { q: "What is 8 + 5?", options: ["11", "12", "13", "14"], answer: 2, explanation: "8 + 5 = 13." },
            { q: "What is 12 + 9?", options: ["19", "20", "21", "22"], answer: 2, explanation: "12 + 9 = 21." },
            { q: "What is 25 + 15?", options: ["35", "40", "45", "50"], answer: 1, explanation: "25 + 15 = 40." },
            { q: "What is 36 + 14?", options: ["40", "45", "50", "55"], answer: 2, explanation: "36 + 14 = 50." },
            { q: "What is 47 + 28?", options: ["65", "70", "75", "85"], answer: 2, explanation: "47 + 28 = 75." },
            { q: "What is 125 + 75?", options: ["175", "190", "200", "225"], answer: 2, explanation: "125 + 75 = 200." },
            { q: "What is 246 + 132?", options: ["368", "378", "388", "398"], answer: 1, explanation: "246 + 132 = 378." }
        ]
    },
    {
        id: "subtraction",
        name: "Subtraction",
        icon: "➖",
        description: "Learn to subtract numbers.",
        questions: [
            { q: "What is 10 - 4?", options: ["4", "5", "6", "7"], answer: 2, explanation: "10 - 4 = 6." },
            { q: "What is 18 - 9?", options: ["7", "8", "9", "10"], answer: 2, explanation: "18 - 9 = 9." },
            { q: "What is 30 - 12?", options: ["16", "17", "18", "19"], answer: 2, explanation: "30 - 12 = 18." },
            { q: "What is 45 - 20?", options: ["20", "25", "30", "35"], answer: 1, explanation: "45 - 20 = 25." },
            { q: "What is 72 - 36?", options: ["34", "35", "36", "37"], answer: 2, explanation: "72 - 36 = 36." },
            { q: "What is 100 - 47?", options: ["43", "53", "57", "63"], answer: 1, explanation: "100 - 47 = 53." },
            { q: "What is 250 - 125?", options: ["100", "115", "125", "135"], answer: 2, explanation: "250 - 125 = 125." }
        ]
    },
    {
        id: "multiplication",
        name: "Multiplication",
        icon: "✖️",
        description: "Practice multiplication facts.",
        questions: [
            { q: "What is 3 × 4?", options: ["7", "10", "12", "14"], answer: 2, explanation: "3 groups of 4 equal 12." },
            { q: "What is 5 × 6?", options: ["25", "30", "35", "40"], answer: 1, explanation: "5 × 6 = 30." },
            { q: "What is 7 × 8?", options: ["48", "54", "56", "64"], answer: 2, explanation: "7 × 8 = 56." },
            { q: "What is 9 × 9?", options: ["72", "81", "89", "99"], answer: 1, explanation: "9 × 9 = 81." },
            { q: "What is 12 × 4?", options: ["36", "42", "48", "52"], answer: 2, explanation: "12 × 4 = 48." },
            { q: "What is 11 × 7?", options: ["67", "77", "87", "97"], answer: 1, explanation: "11 × 7 = 77." },
            { q: "What is 15 × 3?", options: ["35", "40", "45", "50"], answer: 2, explanation: "15 × 3 = 45." }
        ]
    },
    {
        id: "division",
        name: "Division",
        icon: "➗",
        description: "Learn how to divide numbers.",
        questions: [
            { q: "What is 12 ÷ 3?", options: ["3", "4", "5", "6"], answer: 1, explanation: "12 divided by 3 equals 4." },
            { q: "What is 20 ÷ 5?", options: ["2", "3", "4", "5"], answer: 2, explanation: "20 ÷ 5 = 4." },
            { q: "What is 36 ÷ 6?", options: ["5", "6", "7", "8"], answer: 1, explanation: "36 ÷ 6 = 6." },
            { q: "What is 49 ÷ 7?", options: ["6", "7", "8", "9"], answer: 1, explanation: "49 ÷ 7 = 7." },
            { q: "What is 72 ÷ 8?", options: ["7", "8", "9", "10"], answer: 2, explanation: "72 ÷ 8 = 9." },
            { q: "What is 100 ÷ 10?", options: ["5", "8", "10", "12"], answer: 2, explanation: "100 ÷ 10 = 10." },
            { q: "What is 144 ÷ 12?", options: ["10", "11", "12", "14"], answer: 2, explanation: "144 ÷ 12 = 12." }
        ]
    },
    {
        id: "fractions",
        name: "Fractions",
        icon: "🍕",
        description: "Understand parts of a whole.",
        questions: [
            { q: "Which fraction means one half?", options: ["1/3", "1/2", "1/4", "2/3"], answer: 1, explanation: "One half is written as 1/2." },
            { q: "What is 1/4 of 20?", options: ["4", "5", "10", "15"], answer: 1, explanation: "20 ÷ 4 = 5." },
            { q: "Which fraction is larger?", options: ["1/2", "1/4", "They are equal", "Neither"], answer: 0, explanation: "One half is larger than one fourth." },
            { q: "What is 1/2 + 1/2?", options: ["1/2", "1", "2", "1/4"], answer: 1, explanation: "Two halves make one whole." },
            { q: "What is 3/4 of 12?", options: ["6", "8", "9", "10"], answer: 2, explanation: "12 ÷ 4 = 3, and 3 × 3 = 9." },
            { q: "Which fraction equals 1/2?", options: ["2/4", "1/3", "3/5", "2/3"], answer: 0, explanation: "2/4 simplifies to 1/2." },
            { q: "What is 2/5 + 1/5?", options: ["1/5", "2/5", "3/5", "3/10"], answer: 2, explanation: "With the same denominator, add the numerators: 2 + 1 = 3." }
        ]
    },
    {
        id: "decimals",
        name: "Decimals",
        icon: "🔢",
        description: "Practice working with decimal numbers.",
        questions: [
            { q: "What is 0.5 written as a fraction?", options: ["1/2", "1/4", "1/5", "3/4"], answer: 0, explanation: "0.5 is equal to 1/2." },
            { q: "What is 0.2 + 0.3?", options: ["0.4", "0.5", "0.6", "0.7"], answer: 1, explanation: "0.2 + 0.3 = 0.5." },
            { q: "What is 1.5 + 2.5?", options: ["3", "3.5", "4", "4.5"], answer: 2, explanation: "1.5 + 2.5 = 4." },
            { q: "What is 3.8 - 1.2?", options: ["2.4", "2.5", "2.6", "2.8"], answer: 2, explanation: "3.8 - 1.2 = 2.6." },
            { q: "Which number is greater?", options: ["0.7", "0.5", "They are equal", "0.3"], answer: 0, explanation: "Seven tenths is greater than five tenths." },
            { q: "What is 2.5 × 2?", options: ["4", "4.5", "5", "5.5"], answer: 2, explanation: "2.5 doubled equals 5." },
            { q: "What is 4.8 ÷ 2?", options: ["2.2", "2.4", "2.6", "2.8"], answer: 1, explanation: "4.8 divided by 2 equals 2.4." }
        ]
    },
    {
        id: "geometry",
        name: "Geometry",
        icon: "📐",
        description: "Explore shapes, area, and perimeter.",
        questions: [
            { q: "How many sides does a triangle have?", options: ["2", "3", "4", "5"], answer: 1, explanation: "A triangle has 3 sides." },
            { q: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: 1, explanation: "A hexagon has 6 sides." },
            { q: "What is the perimeter of a square with sides of 4 cm?", options: ["8 cm", "12 cm", "16 cm", "20 cm"], answer: 2, explanation: "4 + 4 + 4 + 4 = 16 cm." },
            { q: "What is the area of a rectangle that is 5 cm long and 3 cm wide?", options: ["8 cm²", "15 cm²", "16 cm²", "20 cm²"], answer: 1, explanation: "Area = length × width, so 5 × 3 = 15 cm²." },
            { q: "How many degrees are in a right angle?", options: ["45°", "60°", "90°", "180°"], answer: 2, explanation: "A right angle measures 90 degrees." },
            { q: "Which shape has no corners?", options: ["Square", "Triangle", "Circle", "Rectangle"], answer: 2, explanation: "A circle has no corners or vertices." },
            { q: "How many faces does a cube have?", options: ["4", "5", "6", "8"], answer: 2, explanation: "A cube has 6 square faces." }
        ]
    },
    {
        id: "word",
        name: "Word Problems",
        icon: "📖",
        description: "Use math to solve everyday problems.",
        questions: [
            { q: "Sam has 5 apples and buys 4 more. How many apples does Sam have?", options: ["8", "9", "10", "11"], answer: 1, explanation: "5 + 4 = 9 apples." },
            { q: "There are 20 students split into 4 equal groups. How many are in each group?", options: ["4", "5", "6", "8"], answer: 1, explanation: "20 ÷ 4 = 5 students per group." },
            { q: "A book costs $8. How much do 3 books cost?", options: ["$16", "$20", "$24", "$32"], answer: 2, explanation: "$8 × 3 = $24." },
            { q: "Mia has 30 stickers and gives away 12. How many remain?", options: ["16", "18", "20", "22"], answer: 1, explanation: "30 - 12 = 18 stickers." },
            { q: "A box holds 6 pencils. How many pencils are in 5 boxes?", options: ["11", "25", "30", "35"], answer: 2, explanation: "6 × 5 = 30 pencils." },
            { q: "A movie starts at 2:00 and lasts 2 hours. When does it end?", options: ["3:00", "4:00", "5:00", "6:00"], answer: 1, explanation: "Two hours after 2:00 is 4:00." },
            { q: "There are 48 cookies shared equally among 8 children. How many does each child get?", options: ["5", "6", "7", "8"], answer: 1, explanation: "48 ÷ 8 = 6 cookies each." }
        ]
    },
    {
        id: "place",
        name: "Place Value",
        icon: "🏠",
        description: "Learn ones, tens, hundreds, and thousands.",
        questions: [
            { q: "What is the value of the 5 in 352?", options: ["5", "50", "500", "5,000"], answer: 1, explanation: "The 5 is in the tens place, so its value is 50." },
            { q: "How many tens are in 80?", options: ["4", "6", "8", "10"], answer: 2, explanation: "80 contains 8 groups of ten." },
            { q: "What number is 300 + 40 + 6?", options: ["346", "364", "436", "634"], answer: 0, explanation: "300 + 40 + 6 = 346." },
            { q: "What is the value of the 7 in 7,215?", options: ["7", "70", "700", "7,000"], answer: 3, explanation: "The 7 is in the thousands place." },
            { q: "Which number is the greatest?", options: ["452", "425", "542", "524"], answer: 2, explanation: "542 is the greatest number." },
            { q: "Round 67 to the nearest ten.", options: ["60", "65", "70", "80"], answer: 2, explanation: "67 rounds up to 70." },
            { q: "What is the expanded form of 1,234?", options: ["1,000 + 200 + 30 + 4", "100 + 20 + 3 + 4", "1,200 + 34", "1,000 + 2340"], answer: 0, explanation: "1,234 = 1,000 + 200 + 30 + 4." }
        ]
    },
    {
        id: "mixed",
        name: "Mixed Math",
        icon: "🧠",
        description: "Practice different math skills together.",
        questions: [
            { q: "What is 6 × 7?", options: ["36", "40", "42", "48"], answer: 2, explanation: "6 × 7 = 42." },
            { q: "What is 45 ÷ 5?", options: ["7", "8", "9", "10"], answer: 2, explanation: "45 ÷ 5 = 9." },
            { q: "What is 14 + 28?", options: ["32", "40", "42", "44"], answer: 2, explanation: "14 + 28 = 42." },
            { q: "What is 3/4 of 8?", options: ["4", "5", "6", "7"], answer: 2, explanation: "8 ÷ 4 = 2, and 2 × 3 = 6." },
            { q: "How many sides does an octagon have?", options: ["6", "7", "8", "9"], answer: 2, explanation: "An octagon has 8 sides." },
            { q: "What is 2.5 + 1.5?", options: ["3", "3.5", "4", "4.5"], answer: 2, explanation: "2.5 + 1.5 = 4." },
            { q: "What is 100 - 65?", options: ["25", "30", "35", "45"], answer: 2, explanation: "100 - 65 = 35." }
        ]
    }
];

/* 2. ELEMENT REFERENCES */

const elements = {
    userStatus: document.getElementById("user-status"),
    signIn: document.getElementById("google-signin"),
    signOut: document.getElementById("google-signout"),

    startMaster: document.getElementById("start-master"),
    topicGrid: document.getElementById("topic-grid"),

    quizArea: document.getElementById("quiz-area"),
    backToTopics: document.getElementById("back-to-topics"),
    quizKind: document.getElementById("quiz-kind"),
    quizTitle: document.getElementById("quiz-title"),
    timer: document.getElementById("timer"),
    questionCount: document.getElementById("question-count"),
    progressPercent: document.getElementById("progress-percent"),
    progressFill: document.getElementById("progress-fill"),
    questionContainer: document.getElementById("question-container"),

    previous: document.getElementById("previous-question"),
    next: document.getElementById("next-question"),
    submit: document.getElementById("submit-quiz"),

    resultsArea: document.getElementById("results-area"),
    retry: document.getElementById("retry-quiz"),
    chooseAnother: document.getElementById("choose-another"),
    recommendations: document.getElementById("recommendations"),
    answerReview: document.getElementById("answer-review"),
    saveStatus: document.getElementById("save-status"),

    toast: document.getElementById("toast")
};

/* 3. QUIZ STATE */

let currentQuestions = [];
let currentAnswers = [];
let currentIndex = 0;
let currentQuizId = "";
let currentQuizTitle = "";
let timeRemaining = 120;
let timerInterval = null;
let currentUser = null;
let quizFinished = false;

/* 4. HELPER FUNCTIONS */

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function showToast(message) {
    if (!elements.toast) return;

    elements.toast.textContent = message;
    elements.toast.classList.remove("hidden");

    setTimeout(() => {
        elements.toast.classList.add("hidden");
    }, 3000);
}

function showSection(sectionToShow) {
    elements.quizArea.classList.add("hidden");
    elements.resultsArea.classList.add("hidden");

    if (sectionToShow === "quiz") {
        elements.quizArea.classList.remove("hidden");
    }

    if (sectionToShow === "results") {
        elements.resultsArea.classList.remove("hidden");
    }

    if (sectionToShow === "topics") {
        elements.quizArea.classList.add("hidden");
        elements.resultsArea.classList.add("hidden");
    }
}

/* 5. CREATE TOPIC CARDS */

function createTopicCards() {
    if (!elements.topicGrid) return;

    elements.topicGrid.innerHTML = "";

    topics.forEach(topic => {
        const card = document.createElement("article");
        card.className = "quiz-card";

        card.innerHTML = `
            <div class="quiz-icon">${topic.icon}</div>
            <h3>${topic.name}</h3>
            <p>${topic.description}</p>
            <p><strong>7 Questions</strong></p>
            <button class="btn btn-primary start-topic"
                    data-topic="${topic.id}">
                Start Quiz
            </button>
        `;

        elements.topicGrid.appendChild(card);
    });

    document.querySelectorAll(".start-topic").forEach(button => {
        button.addEventListener("click", () => {
            startTopicQuiz(button.dataset.topic);
        });
    });
}

/* 6. START A QUIZ */

function startTopicQuiz(topicId) {
    const topic = topics.find(item => item.id === topicId);

    if (!topic) return;

    currentQuizId = topic.id;
    currentQuizTitle = topic.name;
    currentQuestions = [...topic.questions];

    beginQuiz();
}

function startMasterQuiz() {
    currentQuizId = "master";
    currentQuizTitle = "Master Quiz";

    const allQuestions = topics.flatMap(topic =>
        topic.questions.map(question => ({
            ...question,
            topicName: topic.name,
            topicId: topic.id
        }))
    );

    currentQuestions = shuffleArray(allQuestions).slice(0, 10);

    beginQuiz();
}

function beginQuiz() {
    currentAnswers = new Array(currentQuestions.length).fill(null);
    currentIndex = 0;
    timeRemaining = 120;
    quizFinished = false;

    if (elements.quizTitle) {
        elements.quizTitle.textContent = currentQuizTitle;
    }

    if (elements.quizKind) {
        elements.quizKind.textContent =
            currentQuizId === "master"
                ? "Mixed Topic Quiz"
                : "Topic Practice";
    }

    showSection("quiz");
    renderQuestion();
    updateTimerDisplay();
    startTimer();

    document.getElementById("quizzes")?.scrollIntoView({
        behavior: "smooth"
    });
}

/* 7. DISPLAY QUESTIONS */

function renderQuestion() {
    const question = currentQuestions[currentIndex];

    if (!question || !elements.questionContainer) return;

    const selectedAnswer = currentAnswers[currentIndex];
    const totalQuestions = currentQuestions.length;
    const progress = ((currentIndex + 1) / totalQuestions) * 100;

    elements.questionCount.textContent =
        `Question ${currentIndex + 1} of ${totalQuestions}`;

    elements.progressPercent.textContent =
        `${Math.round(progress)}%`;

    elements.progressFill.style.width = `${progress}%`;

    elements.questionContainer.innerHTML = `
        <div class="question-number">
            ${question.topicName ? question.topicName + " • " : ""}
            Question ${currentIndex + 1}
        </div>

        <h3 class="question-text">${question.q}</h3>

        <div class="answer-options">
            ${question.options.map((option, index) => `
                <button
                    class="answer-option ${selectedAnswer === index ? "selected" : ""}"
                    data-answer="${index}"
                    ${quizFinished ? "disabled" : ""}
                >
                    ${String.fromCharCode(65 + index)}.
                    ${option}
                </button>
            `).join("")}
        </div>

        <div id="question-feedback" class="quiz-feedback hidden"></div>
    `;

    document.querySelectorAll(".answer-option").forEach(button => {
        button.addEventListener("click", () => {
            selectAnswer(Number(button.dataset.answer));
        });
    });

    elements.previous.disabled = currentIndex === 0;
    elements.next.disabled = currentIndex === totalQuestions - 1;

    elements.previous.classList.toggle("hidden", currentIndex === 0);
    elements.next.classList.toggle(
        "hidden",
        currentIndex === totalQuestions - 1
    );
}

function selectAnswer(answerIndex) {
    if (quizFinished) return;

    currentAnswers[currentIndex] = answerIndex;

    document.querySelectorAll(".answer-option").forEach(button => {
        button.classList.toggle(
            "selected",
            Number(button.dataset.answer) === answerIndex
        );
    });
}

/* 8. QUESTION NAVIGATION */

function goToPreviousQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
}

function goToNextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
    }
}

/* 9. TIMER */

function startTimer() {
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeRemaining--;

        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            showToast("Time is up! Your quiz is being submitted.");
            finishQuiz(true);
        }
    }, 1000);
}

function updateTimerDisplay() {
    if (!elements.timer) return;

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    elements.timer.textContent =
        `${minutes}:${String(seconds).padStart(2, "0")}`;

    elements.timer.classList.toggle(
        "warning",
        timeRemaining <= 30
    );
}

/* 10. SUBMIT AND SCORE QUIZ */

function finishQuiz(timeExpired = false) {
    if (quizFinished) return;

    quizFinished = true;
    clearInterval(timerInterval);

    const total = currentQuestions.length;
    const correct = currentQuestions.filter((question, index) =>
        currentAnswers[index] === question.answer
    ).length;

    const percentage = Math.round((correct / total) * 100);

    displayResults(correct, total, percentage, timeExpired);

    showSection("results");

    saveResult(correct, total, percentage);
}


function displayResults(correct, total, percentage, timeExpired) {
    const scoreElement = document.getElementById("score-number");
    const heading = document.getElementById("result-title");
    const message = document.getElementById("result-message");
    const emoji = document.getElementById("result-emoji");

    if (heading) {
        heading.textContent =
            percentage >= 70 ? "Great Job!" : "Keep Practicing!";
    }

    if (message) {
        message.textContent = timeExpired
            ? "Your time ran out. Here are your results."
            : "You completed your quiz!";
    }

    if (scoreElement) {
        scoreElement.textContent = `${correct}/${total}`;
    }

    if (emoji) {
        emoji.textContent =
            percentage === 100 ? "🏆" :
            percentage >= 70 ? "🎉" : "💪";
    }

    if (elements.recommendations) {
        elements.recommendations.innerHTML = createRecommendations(percentage);
    }

    if (elements.answerReview) {
        elements.answerReview.innerHTML = createAnswerReview();
    }
}


/* 11. RECOMMENDATIONS */

function createRecommendations(percentage) {
    let message = "";

    if (percentage === 100) {
        message = "Perfect score! You answered every question correctly. Try another quiz to keep building your skills.";
    } else if (percentage >= 70) {
        message = "Good work! You understand many of these concepts. Review the questions you missed and keep practicing.";
    } else {
        message = "Keep going! Practice makes progress. Review the explanations below and try this quiz again.";
    }

    let missedTopics = [];

    currentQuestions.forEach((question, index) => {
        if (currentAnswers[index] !== question.answer) {
            const topicName = question.topicName || currentQuizTitle;

            if (!missedTopics.includes(topicName)) {
                missedTopics.push(topicName);
            }
        }
    });

    if (missedTopics.length > 0) {
        message += `<br><br><strong>Topics to review:</strong> ${missedTopics.join(", ")}`;
    }

    return `<p>${message}</p>`;
}

/* 12. ANSWER REVIEW */

function createAnswerReview() {
    return currentQuestions.map((question, index) => {
        const selected = currentAnswers[index];
        const isCorrect = selected === question.answer;

        const yourAnswer = selected === null
            ? "Not answered"
            : question.options[selected];

        const correctAnswer = question.options[question.answer];

        return `
            <div class="review-item ${isCorrect ? "correct" : "incorrect"}">
                <strong>Question ${index + 1}:</strong>
                ${question.q}

                <p>
                    Your answer:
                    <strong>${yourAnswer}</strong>
                </p>

                <p>
                    Correct answer:
                    <strong>${correctAnswer}</strong>
                </p>

                <p>${question.explanation}</p>
            </div>
        `;
    }).join("");
}

/* 13. SAVE QUIZ SCORE */

async function saveResult(correct, total, percentage) {
    if (!elements.saveStatus) return;

    if (!currentUser) {
        elements.saveStatus.textContent =
            "Guest mode: Sign in with Google to save your score.";
        return;
    }

    elements.saveStatus.textContent = "Saving your score...";

    try {
        await saveQuizScore({
            quizId: currentQuizId,
            quizTitle: currentQuizTitle,
            correct,
            total,
            percentage,
            completedAt: new Date().toISOString()
        });

        elements.saveStatus.textContent = "Your score was saved!";
    } catch (error) {
        console.error("Could not save score:", error);
        elements.saveStatus.textContent =
            "Your quiz is complete, but the score could not be saved.";
    }
}

/* 14. RETRY AND RETURN TO TOPICS */

function retryQuiz() {
    if (currentQuizId === "master") {
        startMasterQuiz();
    } else {
        startTopicQuiz(currentQuizId);
    }
}

function returnToTopics() {
    clearInterval(timerInterval);
    quizFinished = true;

    showSection("topics");

    document.getElementById("quizzes")?.scrollIntoView({
        behavior: "smooth"
    });
}

/* 15. GOOGLE SIGN-IN */

async function handleSignIn() {
    try {
        await signInWithGoogle();
        await updateUserStatus();
        showToast("You are signed in!");
    } catch (error) {
        console.error("Sign-in error:", error);
        showToast("Sign-in was not completed.");
    }
}

async function handleSignOut() {
    try {
        await signOutUser();
        await updateUserStatus();
        showToast("You have signed out.");
    } catch (error) {
        console.error("Sign-out error:", error);
        showToast("Could not sign out.");
    }
}

async function updateUserStatus() {
    try {
        currentUser = await getCurrentUser();

        if (currentUser) {
            elements.userStatus.textContent =
                `Signed in: ${currentUser.displayName || currentUser.email}`;

            elements.signIn?.classList.add("hidden");
            elements.signOut?.classList.remove("hidden");
        } else {
            elements.userStatus.textContent = "Playing as Guest";

            elements.signIn?.classList.remove("hidden");
            elements.signOut?.classList.add("hidden");
        }
    } catch (error) {
        console.error("Could not check user status:", error);

        currentUser = null;

        if (elements.userStatus) {
            elements.userStatus.textContent = "Playing as Guest";
        }
    }
}

/* 16. EVENT LISTENERS */

elements.startMaster?.addEventListener("click", startMasterQuiz);

elements.previous?.addEventListener(
    "click",
    goToPreviousQuestion
);

elements.next?.addEventListener(
    "click",
    goToNextQuestion
);

elements.submit?.addEventListener("click", () => {
    finishQuiz(false);
});

elements.backToTopics?.addEventListener(
    "click",
    returnToTopics
);

elements.retry?.addEventListener("click", retryQuiz);

elements.chooseAnother?.addEventListener(
    "click",
    returnToTopics
);

elements.signIn?.addEventListener("click", handleSignIn);

elements.signOut?.addEventListener("click", handleSignOut);

/* 17. INITIALIZE WEBSITE */

function initializeElimint() {
    createTopicCards();
    showSection("topics");
    updateUserStatus();
}

initializeElimint();