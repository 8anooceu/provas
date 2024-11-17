// Exibir o conteúdo principal após o carregamento
window.addEventListener("load", function() {
    document.getElementById("loading-screen").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
});

// Perguntas do quiz
const questions = [
    {
        question: "O que é magnetismo?",
        options: ["Força física relacionada a ímãs", "Um tipo de energia solar", "Um fenômeno químico"],
        answer: 0
    },
    {
        question: "Qual é uma fonte de energia renovável?",
        options: ["Petróleo", "Carvão", "Energia eólica"],
        answer: 2
    }
];

// Renderizar perguntas do quiz
const quizContainer = document.getElementById("quiz-questions");

questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.textContent = q.question;
    questionDiv.appendChild(questionText);

    q.options.forEach((option, i) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index, i, button));
        questionDiv.appendChild(button);
    });

    quizContainer.appendChild(questionDiv);
});

// Verificação da resposta
function checkAnswer(questionIndex, answerIndex, button) {
    if (answerIndex === questions[questionIndex].answer) {
        button.style.backgroundColor = "green";
        alert("Correto!");
    } else {
        button.style.backgroundColor = "red";
        alert("Tente novamente.");
    }
}
