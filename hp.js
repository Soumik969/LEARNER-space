const quizQuestions = [
    {
        question: "What is the maximum number of players in a Free Fire match?",
        options: ["50 players", "40 players", "30 players", "20 players"],
        correctAnswer: "50 players"
    },
    {
        question: "Which mode in Free Fire features shrinking safe zones?",
        options: ["Classic", "Rush", "Clash Squad", "Battle Royale"],
        correctAnswer: "Battle Royale"
    },
    // Add more questions here...
];

let score = 0;
let currentQuestionIndex = 0;

function displayQuestion(index) {
    if (index >= 0 && index < quizQuestions.length) {
        const quizContent = document.getElementById("quizContent");
        const questionData = quizQuestions[index];

        quizContent.innerHTML = `
            <h3>${questionData.question}</h3>
            ${questionData.options.map((option, optionIndex) => `
                <button class="optionButton" onclick="checkAnswer(${index}, ${optionIndex})">${option}</button>
            `).join('')}
        `;

        // Show submit button if it's the last question
        if (index === quizQuestions.length - 1) {
            quizContent.innerHTML += `
                <button id="submitQuizButton" onclick="submitQuiz()">Submit Quiz</button>
            `;
        }
    } else {
        console.error("Invalid question index:", index);
    }
}

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("quizContent").style.display = "block";
    document.getElementById("score").textContent = ""; // Clear previous score
    displayQuestion(currentQuestionIndex);
}

function checkAnswer(questionIndex, optionIndex) {
    if (questionIndex >= 0 && questionIndex < quizQuestions.length) {
        const userAnswer = quizQuestions[questionIndex].options[optionIndex];
        const correctAnswer = quizQuestions[questionIndex].correctAnswer;

        // Disable all option buttons after the user selects an answer
        const optionButtons = document.querySelectorAll(".optionButton");
        optionButtons.forEach(button => button.disabled = true);

        if (userAnswer === correctAnswer) {
            score++;
        }

        // Move to the next question if not the last one
        if (currentQuestionIndex < quizQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        }
    } else {
        console.error("Invalid question index in checkAnswer:", questionIndex);
    }
}

function submitQuiz() {
    // Hide the quiz content
    document.getElementById("quizContent").style.display = "none";
    // Display the final score
    document.getElementById("score").textContent = `You scored ${score} out of ${quizQuestions.length} in the quiz.`;
}

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById("submitQuizButton");
    if (submitButton) {
        submitButton.style.display = "none";
    }
});
