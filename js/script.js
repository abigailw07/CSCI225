/* script.js */

// Comprehensive Quiz Database schema (10 Categories, 7 Questions Each)
const quizDatabase = [
    {
        id: "addition",
        title: "Addition Adventure",
        icon: "➕",
        questions: [
            { q: "What is 5 + 3?", options: ["6", "7", "8", "9"], answer: "8" },
            { q: "What is 12 + 4?", options: ["14", "15", "16", "17"], answer: "16" },
            { q: "What is 7 + 9?", options: ["15", "16", "17", "18"], answer: "16" },
            { q: "What is 15 + 15?", options: ["20", "25", "30", "35"], answer: "30" },
            { q: "What is 8 + 14?", options: ["21", "22", "23", "24"], answer: "22" },
            { q: "What is 25 + 13?", options: ["36", "37", "38", "39"], answer: "38" },
            { q: "What is 47 + 6?", options: ["51", "52", "53", "54"], answer: "53" }
        ]
    },
    {
        id: "subtraction",
        title: "Subtraction Safari",
        icon: "➖",
        questions: [
            { q: "What is 10 - 4?", options: ["4", "5", "6", "7"], answer: "6" },
            { q: "What is 15 - 7?", options: ["6", "7", "8", "9"], answer: "8" },
            { q: "What is 20 - 11?", options: ["8", "9", "10", "11"], answer: "9" },
            { q: "What is 35 - 15?", options: ["15", "20", "25", "30"], answer: "20" },
            { q: "What is 42 - 8?", options: ["32", "34", "36", "38"], answer: "34" },
            { q: "What is 50 - 22?", options: ["26", "28", "30", "32"], answer: "28" },
            { q: "What is 100 - 45?", options: ["45", "50", "55", "65"], answer: "55" }
        ]
    },
    {
        id: "multiplication",
        title: "Multiplication Mania",
        icon: "✖️",
        questions: [
            { q: "What is 3 × 4?", options: ["10", "11", "12", "14"], answer: "12" },
            { q: "What is 5 × 6?", options: ["25", "30", "35", "40"], answer: "30" },
            { q: "What is 7 × 2?", options: ["12", "14", "16", "18"], answer: "14" },
            { q: "What is 9 × 3?", options: ["24", "26", "27", "29"], answer: "27" },
            { q: "What is 8 × 5?", options: ["35", "40", "45", "50"], answer: "40" },
            { q: "What is 6 × 7?", options: ["42", "44", "46", "48"], answer: "42" },
            { q: "What is 4 × 8?", options: ["28", "30", "32", "36"], answer: "32" }
        ]
    },
    {
        id: "division",
        title: "Division Discovery",
        icon: "➗",
        questions: [
            { q: "What is 12 ÷ 3?", options: ["3", "4", "5", "6"], answer: "4" },
            { q: "What is 20 ÷ 5?", options: ["2", "4", "5", "6"], answer: "4" },
            { q: "What is 42 ÷ 6?", options: ["6", "7", "8", "9"], answer: "7" },
            { q: "What is 16 ÷ 2?", options: ["6", "7", "8", "9"], answer: "8" },
            { q: "What is 30 ÷ 10?", options: ["2", "3", "4", "5"], answer: "3" },
            { q: "What is 56 ÷ 8?", options: ["6", "7", "8", "9"], answer: "7" },
            { q: "What is 81 ÷ 9?", options: ["7", "8", "9", "10"], answer: "9" }
        ]
    },
    {
        id: "fractions",
        title: "Fraction Focus",
        icon: "🍰",
        questions: [
            { q: "What is half of 10?", options: ["2", "4", "5", "6"], answer: "5" },
            { q: "Which fraction is equal to one whole?", options: ["1/2", "2/2", "1/4", "3/4"], answer: "2/2" },
            { q: "What is 1/4 of 8?", options: ["2", "4", "6", "8"], answer: "2" },
            { q: "If you eat 2 slices of a 4-slice pizza, how much is left?", options: ["1/4", "1/2", "3/4", "1/3"], answer: "1/2" },
            { q: "What is 1/3 + 1/3?", options: ["1/6", "2/6", "2/3", "3/3"], answer: "2/3" },
            { q: "Which fraction is smaller?", options: ["1/2", "1/4", "3/4", "2/2"], answer: "1/4" },
            { q: "What is 3/4 of 12?", options: ["6", "8", "9", "10"], answer: "9" }
        ]
    },
    {
        id: "place-value",
        title: "Place Value Planet",
        icon: "🚀",
        questions: [
            { q: "In the number 256, which digit is in the tens place?", options: ["2", "5", "6", "0"], answer: "5" },
            { q: "What is the value of the 7 in 743?", options: ["7", "70", "700", "7000"], answer: "700" },
            { q: "What number has 3 hundreds, 0 tens, and 5 ones?", options: ["35", "350", "305", "503"], answer: "305" },
            { q: "What is 100 more than 482?", options: ["492", "582", "483", "500"], answer: "582" },
            { q: "In 1,489, which place is the 1 sitting in?", options: ["Ones", "Tens", "Hundreds", "Thousands"], answer: "Thousands" },
            { q: "What is the expanded form of 84?", options: ["8 + 4", "80 + 4", "800 + 4", "40 + 8"], answer: "80 + 4" },
            { q: "Which number has the greatest digit in the hundreds place?", options: ["195", "421", "803", "799"], answer: "803" }
        ]
    },
    {
        id: "geometry",
        title: "Geometry Gym",
        icon: "📐",
        questions: [
            { q: "How many sides does a triangle have?", options: ["3", "4", "5", "6"], answer: "3" },
            { q: "Which shape has 4 equal sides?", options: ["Triangle", "Circle", "Square", "Hexagon"], answer: "Square" },
            { q: "A shape with 5 sides is called a...", options: ["Square", "Pentagon", "Hexagon", "Octagon"], answer: "Pentagon" },
            { q: "How many corners (vertices) does a rectangle have?", options: ["3", "4", "5", "6"], answer: "4" },
            { q: "What 3D shape looks like a party hat?", options: ["Sphere", "Cube", "Cone", "Cylinder"], answer: "Cone" },
            { q: "A stop sign uses which 8-sided shape geometry?", options: ["Hexagon", "Pentagon", "Octagon", "Triangle"], answer: "Octagon" },
            { q: "Which of these figures has NO straight edges?", options: ["Square", "Circle", "Triangle", "Rectangle"], answer: "Circle" }
        ]
    },
    {
        id: "time",
        title: "Time Traveler",
        icon: "⏰",
        questions: [
            { q: "How many minutes are in one hour?", options: ["30", "50", "60", "100"], answer: "60" },
            { q: "How many hours are in a complete day?", options: ["12", "24", "48", "60"], answer: "24" },
            { q: "If it is 3:00 now, what time will it be in 45 minutes?", options: ["3:30", "3:45", "4:00", "4:15"], answer: "3:45" },
            { q: "The short hand on an analog clock points to the...", options: ["Minutes", "Seconds", "Hours", "Days"], answer: "Hours" },
            { q: "How many days are in a regular non-leap year?", options: ["350", "360", "365", "366"], answer: "365" },
            { q: "What time is 15 minutes before 6:00?", options: ["5:45", "5:30", "6:15", "5:15"], answer: "5:45" },
            { q: "How many weeks make up a whole year?", options: ["40", "48", "52", "60"], answer: "52" }
        ]
    },
    {
        id: "measurement",
        title: "Measurement Masters",
        icon: "📏",
        questions: [
            { q: "How many centimeters are in 1 meter?", options: ["10", "50", "100", "1000"], answer: "100" },
            { q: "Which tool is best used to measure temperature?", options: ["Ruler", "Scale", "Clock", "Thermometer"], answer: "Thermometer" },
            { q: "How many inches are in 1 foot?", options: ["10", "12", "14", "16"], answer: "12" },
            { q: "Which unit measures weight?", options: ["Liters", "Pounds", "Inches", "Meters"], answer: "Pounds" },
            { q: "If liquid fill standard cups, how many cups make 1 quart?", options: ["2", "4", "6", "8"], answer: "4" },
            { q: "Which is heavier?", options: ["1 Ounce", "1 Pound", "Both same", "None"], answer: "1 Pound" },
            { q: "To track the distance between cities, we use...", options: ["Inches", "Centimeters", "Miles", "Yards"], answer: "Miles" }
        ]
    },
    {
        id: "patterns",
        title: "Pattern Patterns",
        icon: "🧩",
        questions: [
            { q: "Complete the sequence: 2, 4, 6, 8, __", options: ["9", "10", "11", "12"], answer: "10" },
            { q: "Complete the sequence: 5, 10, 15, 20, __", options: ["22", "24", "25", "30"], answer: "25" },
            { q: "Complete the sequence: 10, 9, 8, 7, __", options: ["5", "6", "7", "8"], answer: "6" },
            { q: "What is next: Up, Down, Up, Down, __", options: ["Left", "Right", "Up", "Down"], answer: "Up" },
            { q: "Complete the sequence: 3, 6, 9, 12, __", options: ["13", "14", "15", "16"], answer: "15" },
            { q: "What comes next: 10, 20, 30, 40, __", options: ["45", "50", "60", "70"], answer: "50" },
            { q: "Find the missing link: 1, 3, 5, __, 9", options: ["6", "7", "8", "4"], answer: "7" }
        ]
    }
];

// Tracking Runtime State variables
let currentQuiz = null;
let currentQuestionIndex = 0;
let userScore = 0;

// Application Bootstrapping lifecycle
document.addEventListener("DOMContentLoaded", () => {
    buildCategoryDashboard();
});

// Single Page Application Navigation engine
function showPage(pageId) {
    document.querySelectorAll(".page-section").forEach(section => {
        section.classList.remove("active");
    });
    
    const targetSection = document.getElementById(`${pageId}-page`);
    if (targetSection) {
        targetSection.classList.add("active");
    }
}

// Injects Dashboard items dynamically into the container
function buildCategoryDashboard() {
    const grid = document.getElementById("category-grid");
    grid.innerHTML = ""; // Safety clear

    quizDatabase.forEach(quiz => {
        const card = document.createElement("div");
        card.className = "category-card";
        card.onclick = () => launchQuiz(quiz.id);

        card.innerHTML = `
            <div class="category-icon">${quiz.icon}</div>
            <h3>${quiz.title}</h3>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem;">7 Challenges</p>
        `;
        grid.appendChild(card);
    });
}

// Game Core - Setup and variable initiation
function launchQuiz(quizId) {
    currentQuiz = quizDatabase.find(q => q.id === quizId);
    currentQuestionIndex = 0;
    userScore = 0;
    document.getElementById("current-quiz-title").textContent = currentQuiz.title;
    showPage("gameplay");
    renderCurrentQuestion();
}
// Game Core - DOM Rendering of current mathematical task
function renderCurrentQuestion() {
    const nextBtn = document.getElementById("next-btn");
    nextBtn.classList.add("hidden"); // Clear forward traversal visibility
    const question = currentQuiz.questions[currentQuestionIndex];
    // Set text metrics
    document.getElementById("progress-tracker").textContent = `Question ${currentQuestionIndex + 1} of 7`;
    document.getElementById("question-text").textContent = question.q;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    // Build interactive option nodes
    question.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => validateSelection(btn, opt, question.answer);
    optionsContainer.appendChild(btn);
    });
}

// Evaluation Engine
function validateSelection(selectedBtn, pickedVal, correctVal) {
    const allButtons = document.querySelectorAll(".options-container .option-btn");
    // Mutual exclusion toggle logic loop
    allButtons.forEach(btn => {
            btn.disabled = true;
        if (btn.textContent === correctVal) {
            btn.classList.add("correct");
    }
    });
    if (pickedVal === correctVal) {
        userScore++;
    } else {
        selectedBtn.classList.add("wrong");
}
document.getElementById("next-btn").classList.remove("hidden");
}
// Traversal Progression logic handler
function advanceQuiz() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.questions.length) {
        renderCurrentQuestion();
    } else {
        terminateQuizSession();
    }
}

// End Game metric evaluation routine
function terminateQuizSession() {
    document.getElementById("final-score").textContent = userScore;
    const performanceMsg = document.getElementById("performance-msg");
    if (userScore === 7) {
        performanceMsg.textContent = "Flawless victory! You are an absolute Math Genius! 🌟";
    } else if (userScore >= 5) {
        performanceMsg.textContent = "Fantastic job! Your hard work is paying off! 🚀";
    } else {
        performanceMsg.textContent = "Good try! Practice makes perfect. Challenge yourself again! 📚";
    }
    showPage("results");
}

// Database Connection Validation Mock Sandbox Engine
function handleSignIn(event) {
    event.preventDefault();
    const feedback = document.getElementById("signin-feedback");
    const user = document.getElementById("username").value;
    feedback.style.color = "var(--success)";
    feedback.textContent = `Attempting secure handshake... Connected successfully as "${user}". [Front-End Mock Mode Only]`;
}