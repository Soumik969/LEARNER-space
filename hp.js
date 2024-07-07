const quizQuestions = [
    {
      question: "What is the maximum number of players in a Free Fire match?",
      options: ["50 players", "40 players", "30 players", "20 players"],
      correctAnswer: "50 players"
    },

    {
      question: "Which of the following is true about the “Blue Zone” in Free Fire?",
      options: [
        "It is a safe area where players cannot be attacked.",
        "Players inside the Blue Zone take more damage from enemies.",
        "The Blue Zone decreases the damage taken by players inside it.",
        "Entering the Blue Zone increases the damage players deal to enemies."
      ],
      correctAnswer: "The Blue Zone decreases the damage taken by players inside it."
    },
    {
      question: "In Free Fire, what is the purpose of the “M79” grenade launcher?",
      options: [
        "To launch grenades that heal teammates.",
        "To launch grenades that explode on impact.",
        "To launch grenades that create smoke screens.",
        "To launch grenades that create electric barriers."
      ],
      correctAnswer: "To launch grenades that explode on impact."
    },
    {
      question: "What is unique about the “Kalahari” map compared to other maps in Free Fire?",
      options: [
        "It has underwater gameplay areas.",
        "It is smaller and designed for fast-paced matches.",
        "It has a desert-themed environment with more vertical terrain.",
        "It features only night-time gameplay."
      ],
      correctAnswer: "It has a desert-themed environment with more vertical terrain."
    },
    {
      question: "Which vehicle in Free Fire provides the highest maximum speed?",
      options: [
        "Jeep",
        "Tuk-Tuk",
        "Motorbike",
        "Sports Car"
      ],
      correctAnswer: "Sports Car"
    },
    {
      question: "What is DJ Alok’s special ability in Free Fire?",
      options: [
        "Creating a shield that absorbs damage.",
        "Healing and increasing movement speed of nearby allies.",
        "Instantly reviving a downed teammate.",
        "Becoming invisible for a short duration."
      ],
      correctAnswer: "Healing and increasing movement speed of nearby allies."
    },
    {
      question: "Which Free Fire character has an ability called “Riptide Rhythm”?",
      options: [
        "A124",
        "Chrono",
        "Dasha",
        "Skyler"
      ],
      correctAnswer: "Skyler"
    },
    {
      question: "How does the character “Wukong” uniquely transform in Free Fire?",
      options: [
        "He can turn into a rock to avoid detection.",
        "He can transform into a bush for camouflage.",
        "He can become a hologram to distract enemies.",
        "He can turn into an enemy to blend in."
      ],
      correctAnswer: "He can transform into a bush for camouflage."
    },
    {
      question: "Which character’s ability is known as “Camouflage” and what does it do?",
      options: [
        "Rafael – It reduces the noise of gunfire.",
        "Kelly – It increases sprinting speed.",
        "Steffie – It creates a graffiti barrier that reduces damage.",
        "Wukong – It allows him to turn into a bush."
      ],
      correctAnswer: "Wukong – It allows him to turn into a bush."
    },
    {
      question: "What is the main advantage of the “AWM” sniper rifle in Free Fire?",
      options: [
        "It has the fastest firing rate among sniper rifles.",
        "It can penetrate helmets and armor.",
        "It has the highest damage per shot.",
        "It can be equipped with a silencer and scope simultaneously."
      ],
      correctAnswer: "It has the highest damage per shot."
    },
    {
      question: "Which type of grenade in Free Fire can obscure vision with smoke?",
      options: [
        "Frag Grenade",
        "Flashbang Grenade",
        "Smoke Grenade",
        "Gloo Grenade"
      ],
      correctAnswer: "Smoke Grenade"
    },
    {
      question: "What unique feature does the “Gloo Wall” provide in Free Fire?",
      options: [
        "It heals players standing near it.",
        "It creates a temporary force field.",
        "It blocks enemy fire and provides cover.",
        "It launches grenades upon deployment."
      ],
      correctAnswer: "It blocks enemy fire and provides cover."
    },
    {
      question: "The “M1014” shotgun in Free Fire is best known for what characteristic?",
      options: [
        "Long-range accuracy.",
        "High damage output in close combat.",
        "Rapid reload speed.",
        "Ability to fire in bursts."
      ],
      correctAnswer: "High damage output in close combat."
    },
    {
      question: "What significant milestone did Free Fire achieve in 2020 regarding downloads?",
      options: [
        "Surpassed 100 million downloads.",
        "Became the most downloaded mobile game worldwide.",
        "Released a PC version.",
        "Collaborated with a popular movie franchise."
      ],
      correctAnswer: "Became the most downloaded mobile game worldwide."
    },
    {
      question: "Which of the following events in Free Fire involved a crossover with a popular music artist?",
      options: [
        "Collaboration with BTS.",
        "Concert event with Marshmello.",
        "Collaboration event with KSHMR.",
        "Live performance by Drake in-game."
      ],
      correctAnswer: "Collaboration event with KSHMR."
    },
    {
      question: "In which year was Free Fire officially released globally?",
      options: [
        "2016",
        "2017",
        "2018",
        "2019"
      ],
      correctAnswer: "2017"
    },
    {
      question: "Which Free Fire character was introduced as part of the game’s collaboration with the TV show “Money Heist”?",
      options: [
        "Antonio",
        "Laura",
        "K",
        "Kshmr"
      ],
      correctAnswer: "K"
    }
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
