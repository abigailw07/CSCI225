/* script.js */

// Comprehensive 10-Category Curriculum Database Object
const quizDatabase = [
    { id: "addition", title: "Addition", icon: "➕", videoUrl: "https://youtube.com", questions: [
        { q: "What is 5 + 3?", options: ["6", "7", "8", "9"], answer: "8" },
        { q: "What is 12 + 4?", options: ["14", "15", "16", "17"], answer: "16" },
        { q: "What is 7 + 9?", options: ["15", "16", "17", "18"], answer: "16" },
        { q: "What is 15 + 15?", options: ["20", "25", "30", "35"], answer: "30" },
        { q: "What is 8 + 14?", options: ["21", "22", "23", "24"], answer: "22" },
        { q: "What is 25 + 13?", options: ["36", "37", "38", "39"], answer: "38" },
        { q: "What is 47 + 6?", options: ["51", "52", "53", "54"], answer: "53" }
    ]},
    { id: "subtraction", title: "Subtraction", icon: "➖", videoUrl: "https://youtube.com", questions: [
        { q: "What is 10 - 4?", options: ["4", "5", "6", "7"], answer: "6" },
        { q: "What is 15 - 7?", options: ["6", "7", "8", "9"], answer: "8" },
        { q: "What is 20 - 11?", options: ["8", "9", "10", "11"], answer: "9" },
        { q: "What is 35 - 15?", options: ["15", "20", "25", "30"], answer: "20" },
        { q: "What is 42 - 8?", options: ["32", "34", "36", "38"], answer: "34" },
        { q: "What is 50 - 22?", options: ["26", "28", "30", "32"], answer: "28" },
        { q: "What is 100 - 45?", options: ["45", "50", "55", "65"], answer: "55" }
    ]},
    { id: "multiplication", title: "Multiplication", icon: "✖️", videoUrl: "https://youtube.com", questions: [
        { q: "What is 3 × 4?", options: ["10", "11", "12", "14"], answer: "12" },
        { q: "What is 5 × 6?", options: ["25", "30", "35", "40"], answer: "30" },
        { q: "What is 7 × 2?", options: ["12", "14", "16", "18"], answer: "14" },
        { q: "What is 9 × 3?", options: ["24", "26", "27", "29"], answer: "27" },
        { q: "What is 8 × 5?", options: ["35", "40", "45", "50"], answer: "40" },
        { q: "What is 6 × 7?", options: ["42", "44", "46", "48"], answer: "42" },
        { q: "What is 4 × 8?", options: ["28", "30", "32", "36"], answer: "32" }
    ]},
    { id: "division", title: "Division", icon: "➗", videoUrl: "https://youtube.com", questions: [
        { q: "What is 12 ÷ 3?", options: ["3", "4", "5", "6"], answer: "4" },
        { q: "What is 20 ÷ 5?", options: ["2", "4", "5", "6"], answer: "4" },
        { q: "What is 42 ÷ 6?", options: ["6", "7", "8", "9"], answer: "7" },
        { q: "What is 16 ÷ 2?", options: ["6", "7", "8", "9"], answer: "8" },
        { q: "What is 30 ÷ 10?", options: ["2", "3", "4", "5"], answer: "3" },
        { q: "What is 56 ÷ 8?", options: ["6", "7", "8", "9"], answer: "7" },
        { q: "What is 81 ÷ 9?", options: ["7", "8", "9", "10"], answer: "9" }
    ]},
    { id: "fractions", title: "Fractions", icon: "🍰", videoUrl: "https://youtube.com", questions: [
        { q: "What is half of 10?", options: ["2", "4", "5", "6"], answer: "5" },
        { q: "Which fraction is equal to one whole?", options: ["1/2", "2/2", "1/4", "3/4"], answer: "2/2" },
        { q: "What is 1/4 of 8?", options: ["2", "4", "6", "8"], answer: "2" },
        { q: "If you eat 2 slices of a 4-slice pizza, how much is left?", options: ["1/4", "1/2", "3/4", "1/3"], answer: "1/2" },
        { q: "What is 1/3 + 1/3?", options: ["1/6", "2/6", "2/3", "3/3"], answer: "2/3" },
        { q: "Which fraction is smaller?", options: ["1/2", "1/4", "3/4", "2/2"], answer: "1/4" },
        { q: "What is 3/4 of 12?", options: ["6", "8", "9", "10"], answer: "9" }
    ]},
    { id: "place-value", title: "Place Value", icon: "🚀", videoUrl: "https://youtube.com", questions: [
        { q: "In the number 256, which digit is in the tens place?", options: ["2", "5", "6", "0"], answer: "5" },
        { q: "What is the value of the 7 in 743?", options: ["7", "70", "700", "7000"], answer: "700" },
        { q: "What number has 3 hundreds, 0 tens, and 5 ones?", options: ["35", "350", "305", "503"], answer: "305" },
        { q: "What is 100 more than 482?", options: ["492", "582", "483", "500"], answer: "582" },
        { q: "In 1,489, which place is the 1 sitting in?", options: ["Ones", "Tens", "Hundreds", "Thousands"], answer: "Thousands" },
        { q: "What is the expanded form of 84?", options: ["8 + 4", "80 + 4", "800 + 4", "40 + 8"], answer: "80 + 4" },
        { q: "Which number has the greatest digit in the hundreds place?", options: ["195", "421", "803", "799"], answer: "803" }
    ]},
    { id: "geometry", title: "Geometry", icon: "📐", videoUrl: "https://youtube.com", questions: [
        { q: "How many sides does a triangle have?", options: ["3", "4", "5", "6"], answer: "3" },
        { q: "Which shape has 4 equal sides?", options: ["Triangle", "Circle", "Square", "Hexagon"], answer: "Square" },
        { q: "A shape with 5 sides is called a...", options: ["Square", "Pentagon", "Hexagon", "Octagon"], answer: "Pentagon" },
        { q: "How many corners (vertices) does a rectangle have?", options: ["3", "4", "5", "6"], answer: "4" },
        { q: "What 3D shape looks like a party hat?", options: ["Sphere", "Cube", "Cone", "Cylinder"], answer: "Cone" },
        { q: "A stop sign uses which 8-sided shape geometry?", options: ["Hexagon", "Pentagon", "Octagon", "Triangle"], answer: "Octagon" },
        { q: "Which of these figures has NO straight edges?", options: ["Square", "Circle", "Triangle", "Rectangle"], answer: "Circle" }
    ]},
    { id: "time", title: "Telling Time", icon: "⏰", videoUrl: "https://youtube.com", questions: [
        { q: "How many minutes are in one hour?", options: ["30", "50", "60", "100"], answer: "60" },
        { q: "How many hours are in a complete day?", options: ["12", "24", "48", "60"], answer: "24" },
        { q: "If it is 3:00 now, what time will it be in 45 minutes?", options: ["3:30", "3:45", "4:00", "4:15"], answer: "3:45" },
        { q: "The short hand on an analog clock points to the...", options: ["Minutes", "Seconds", "Hours", "Days"], answer: "Hours" },
        { q: "How many days are in a regular non-leap year?", options: ["350", "360", "365", "366"], answer: "365" },
        { q: "What time is 15 minutes before 6:00?", options: ["5:45", "5:30", "6:15", "5:15"], answer: "5:45" },
        { q: "How many weeks make up a whole year?", options: ["40", "48", "52", "60"], answer: "52" }
    ]},
    { id: "measurement", title: "Measurement", icon: "📏", videoUrl: "https://youtube.com", questions: [
        { q: "How many centimeters are in 1 meter?", options: ["10", "50", "100", "1000"], answer: "100" },
        { q: "Which tool is best used to measure temperature?", options: ["Ruler", "Scale", "Clock", "Thermometer"], answer: "Thermometer" },
        { q: "How many inches are in 1 foot?", options: ["10", "12", "14", "16"], answer: "12" },
        { q: "Which unit measures weight?", options: ["Liters", "Pounds", "Inches", "Meters"], answer: "Pounds" },
        { q: "If liquid fill standard cups, how many cups make 1 quart?", options: ["2", "4", "6", "8"], answer: "4" },
        { q: "Which is heavier?", options: ["1 Ounce", "1 Pound", "Both same", "None"], answer: "1 Pound" },
        { q: "To track the distance between cities, we use...", options: ["Inches", "Centimeters", "Miles", "Yards"], answer: "Miles" }
    ]},
    { id: "patterns", title: "Patterns", icon: "🧩", videoUrl: "https://youtube.com", questions: [
        { q: "Complete the sequence: 2, 4, 6, 8, __", options: ["9", "10", "11", "12"], answer: "10" },
        { q: "Complete the sequence: 5, 10, 15, 20, __", options: ["22", "24", "25", "30"], answer: "25" },
        { q: "Complete the sequence: 10, 9, 8, 7, __", options: ["5", "6", "7", "8"], answer: "6" },
        { q: "What is next: Up, Down, Up, Down, __", options: ["Left", "Right", "Up", "Down"], answer: "Up" },
        { q: "Complete the sequence: 3, 6, 9, 12, __", options: ["13", "14", "15", "16"], answer: "15" },
        { q: "What comes next: 10, 20, 30, 40, __", options: ["45", "50", "60", "70"], answer: "50" },
        { q: "Find the missing link: 1, 3, 5, __, 9", options: ["6", "7", "8", "4"], answer: "7" }
    ]}
];

// Diagnostic Master Quiz questions
const masterDiagnosticQuestions = [
    { q: "Diagnostic 1: What is 20 × 3?", domain: "multiplication", options: ["50", "60", "70", "80"], answer: "60" },
    { q: "Diagnostic 2: How many sides does an octagon have?", domain: "geometry", options: ["5", "6", "8", "10"], answer: "8" },
    { q: "Diagnostic 3: Complete the order: 3, 6, 9, __?", domain: "patterns", options: ["10", "12", "15", "18"], answer: "12" }
];

// Active Runtime State Variables
let currentUser = "Guest Student";
let activeQuestions = [];
let currentQuestionIndex = 0;
let userScore = 0;
let currentQuizVideo = "";
let timerInterval = null;
let timeRemaining = 180;
let systemRecommendationId = null;

// Diagnostic Tracker state
let diagnosticIndex = 0;
let diagnosticFailedDomains = [];

// Initialize app when document is loaded
document.addEventListener("DOMContentLoaded", () => {
    buildCategoryDashboard();
    setupEventHandlers();
});

// Single Page Navigation Engine
function showPage(pageId) {
    document.querySelectorAll(".page-section").forEach(s => s.classList.remove("active"));
    document.getElementById(`${pageId}-page`).classList.add("active");
}

// Global Event Listeners setup
function setupEventHandlers() {
    document.getElementById("nav-logo").addEventListener("click", () => showPage("cover"));
    document.getElementById("nav-home").addEventListener("click", () => showPage("cover"));
    document.getElementById("nav-diagnostic").addEventListener("click", () => showPage("diagnostic"));
    document.getElementById("nav-quizzes").addEventListener("click", () => showPage("quizzes"));
    document.getElementById("nav-about").addEventListener("click", () => showPage("about"));
    document.getElementById("nav-logout").addEventListener("click", logout);
    document.getElementById("btn-google-login").addEventListener("click", () => handleAuth("Google_User"));
    document.getElementById("btn-guest-login").addEventListener("click", () => handleAuth("Guest_Student"));
    document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const usernameVal = document.getElementById("username").value;
    handleAuth(usernameVal);
    });
    document.getElementById("hero-start-diagnostic").addEventListener("click", () => showPage("diagnostic"));
    document.getElementById("hero-browse-quizzes").addEventListener("click", () => showPage("quizzes"));
    document.getElementById("btn-return-dashboard").addEventListener("click", () => showPage("quizzes"));
    document.getElementById("diag-start-btn").addEventListener("click", startDiagnostic);
    document.getElementById("next-btn").addEventListener("click", advanceQuiz);
    document.getElementById("btn-close-modal").addEventListener("click", closeVideoModal);
    document.getElementById("bug-form").addEventListener("submit", submitBug);
}

// Authentication Processing
function handleAuth(name) {
    currentUser = name;
    document.getElementById("user-display").textContent = currentUser;
    document.getElementById("app-nav").classList.remove("hidden");
    renderScoreVault();
    showPage("cover");
}
function logout() {
    clearInterval(timerInterval);
    document.getElementById("app-nav").classList.add("hidden");
    document.getElementById("login-form").reset();
    showPage("signin");
}

// Master Diagnostic Operations
function startDiagnostic() {
    document.getElementById("diag-start-btn").classList.add("hidden");
    document.getElementById("diag-intro-text").classList.add("hidden");
    diagnosticIndex = 0;
    diagnosticFailedDomains = [];
    renderDiagnosticStep();
}
function renderDiagnosticStep() {
    const currentDiag = masterDiagnosticQuestions[diagnosticIndex];
    document.getElementById("diag-text").textContent = currentDiag.q;
    const container = document.getElementById("diag-options");
    container.innerHTML = "";
    currentDiag.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => evaluateDiagnosticStep(opt, currentDiag.answer, currentDiag.domain));
    container.appendChild(btn);
    });
}
// Evaluate step progress
function evaluateDiagnosticStep(chosen, correct, domain) {
    if (chosen !== correct) {
    diagnosticFailedDomains.push(domain);
    }
    diagnosticIndex++;
    if (diagnosticIndex < masterDiagnosticQuestions.length) {
        renderDiagnosticStep();
    } else {
        processDiagnosticResults();
    }
}

function processDiagnosticResults() {
    systemRecommendationId = diagnosticFailedDomains.length > 0 ? diagnosticFailedDomains[0] : "addition";
    const targetQuiz = quizDatabase.find(q => q.id === systemRecommendationId);
    document.getElementById("rec-target").textContent = targetQuiz.title;
    document.getElementById("recommendation-banner").classList.remove("hidden");
    buildCategoryDashboard();
    showPage("quizzes");
    document.getElementById("diag-start-btn").classList.remove("hidden");
    document.getElementById("diag-intro-text").classList.remove("hidden");
    document.getElementById("diag-text").textContent = "Assessment evaluation complete! Redirected to dashboard.";
    document.getElementById("diag-options").innerHTML = "";
}
// Build Mission Dashboard Grid Elements
function buildCategoryDashboard() {
    const grid = document.getElementById("category-grid");
    grid.innerHTML = "";
    quizDatabase.forEach(quiz => {
    const card = document.createElement("div");
    card.className = "category-card pop-in";
    if (quiz.id === systemRecommendationId) {
        card.classList.add("recommended-card");
    }
    card.addEventListener("click", () => launchQuiz(quiz.id));
    card.innerHTML = `<div class="category-icon">${quiz.icon}</div> <h3>${quiz.title}</h3> <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.3rem;">7 Tasks • 3 Min</p>`;
    grid.appendChild(card);
    });
}
// Fisher-Yates Array Shuffling
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Game Core - Launch Selected Module
function launchQuiz(id) {
    const quiz = quizDatabase.find(q => q.id === id);
    activeQuestions = shuffleArray(quiz.questions);
    currentQuizVideo = quiz.videoUrl;
    currentQuestionIndex = 0;
    userScore = 0;
    document.getElementById("current-quiz-title").textContent = quiz.title;
    showPage("gameplay");
    clearInterval(timerInterval);
    timeRemaining = 180;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        terminateQuizSession(true);
    }
    }, 1000);
    renderQuestion();
}
function updateTimerDisplay() {
    const mins = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
    const secs = (timeRemaining % 60).toString().padStart(2, '0');
    document.getElementById("timer-display").textContent = `${mins}:${secs}`;
}
function renderQuestion() {
    document.getElementById("next-btn").classList.add("hidden");
    const question = activeQuestions[currentQuestionIndex];
    document.getElementById("progress-tracker").textContent = `Question ${currentQuestionIndex + 1} of 7`;
    document.getElementById("question-text").textContent = question.q;
    const container = document.getElementById("options-container");
    container.innerHTML = "";
    shuffleArray(question.options).forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => checkSelection(btn, opt, question.answer));
    container.appendChild(btn);
    });
}

function checkSelection(selectedBtn, picked, correct) {
    document.querySelectorAll(".options-container .option-btn").forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add("correct");
    });
    if (picked === correct) {
        userScore++;
        document.getElementById("next-btn").classList.remove("hidden");
    } else {
        selectedBtn.classList.add("wrong");
        setTimeout(() => { openVideoModal(currentQuizVideo); }, 600);
    }
}

function openVideoModal(url) {
    document.getElementById("review-iframe").src = url;
    document.getElementById("video-modal").classList.remove("hidden");
}
function closeVideoModal() {
    document.getElementById("video-modal").classList.add("hidden");
    document.getElementById("review-iframe").src = "";
    document.getElementById("next-btn").classList.remove("hidden");
}
function advanceQuiz() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 7) {
        renderQuestion();
    } else {
        clearInterval(timerInterval);
        terminateQuizSession(false);
    }
}

function terminateQuizSession(isTimeout) {
    document.getElementById("final-score").textContent = userScore;
    const msg = document.getElementById("performance-msg");
    if (isTimeout) msg.textContent = "⏰ Time expired! Quiz results saved to the database.";
    else if (userScore === 7) msg.textContent = "Perfect score! You are a master! 🌟";
    else msg.textContent = "Great job finishing up your active quiz path!";
    if (currentUser !== "Guest_Student") {
        const key = `scores_${currentUser}`;
        let scores = JSON.parse(localStorage.getItem(key)) || [];
        scores.push({ category: document.getElementById("current-quiz-title").textContent, score: userScore, date: new Date().toLocaleTimeString() });
        localStorage.setItem(key, JSON.stringify(scores));
    }
    renderScoreVault();
    showPage("results");
}
function renderScoreVault() {
const listContainer = document.getElementById("saved-scores-list");
    if (currentUser === "Guest_Student") {
        listContainer.innerHTML = "(Scores are not recorded in the database while playing in Guest Mode)";
        return;
    }
    const key = `scores_${currentUser}`;
    let scores = JSON.parse(localStorage.getItem(key)) || [];
    if (scores.length === 0) {
        listContainer.innerHTML = "No recent database history found for this profile.";
    } else {
        listContainer.innerHTML = "Database Logs: " + scores.slice(-3).map(s => `${s.category}: ${s.score}/7 at ${s.date}`).join(" | ");
    }
}
function submitBug(e) {
    e.preventDefault();
    document.getElementById("bug-form").reset();
    const target = document.getElementById("bug-feedback");
    target.classList.remove("hidden");
    setTimeout(() => target.classList.add("hidden"), 4000);
}