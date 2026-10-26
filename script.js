// BANCO DE 22 PERGUNTAS SOBRE O COSMO ("ATÉ ONDE VOCÊ SABE")
const questions = [
    { question: "1. Qual é o planeta mais próximo do Sol no nosso Sistema Solar?", answers: [{ text: "Vênus", correct: false }, { text: "Mercúrio", correct: true }, { text: "Marte", correct: false }, { text: "Terra", correct: false }] },
    { question: "2. Qual é a estrela localizada no centro do nosso Sistema Solar?", answers: [{ text: "Alfa Centauri", correct: false }, { text: "Betelgeuse", correct: false }, { text: "O Sol", correct: true }, { text: "Sirius", correct: false }] },
    { question: "3. Qual planeta do Sistema Solar é mundialmente conhecido como o 'Planeta Vermelho'?", answers: [{ text: "Júpiter", correct: false }, { text: "Marte", correct: true }, { text: "Saturno", correct: false }, { text: "Netuno", correct: false }] },
    { question: "4. Titã é a maior lua de qual destes planetas gasosos?", answers: [{ text: "Júpiter", correct: false }, { text: "Urano", correct: false }, { text: "Saturno", correct: true }, { text: "Netuno", correct: false }] },
    { question: "5. Qual é a velocidade aproximada da luz no vácuo?", answers: [{ text: "150.000 km/s", correct: false }, { text: "300.000 km/s", correct: true }, { text: "1.000.000 km/s", correct: false }, { text: "100.000 km/s", correct: false }] },
    { question: "6. Qual é a galáxia espiral gigante mais próxima da nossa Via Láctea?", answers: [{ text: "Galáxia do Sombrero", correct: false }, { text: "Andrômeda (M31)", correct: true }, { text: "Galáxia do Triângulo", correct: false }, { text: "Nuvem de Magalhães", correct: false }] },
    { question: "7. O que se forma quando uma estrela supermassiva colapsa sob sua própria gravidade ao fim da vida?", answers: [{ text: "Anã Branca", correct: false }, { text: "Buraco Negro", correct: true }, { text: "Nebulosa Planetária", correct: false }, { text: "Cometa", correct: false }] },
    { question: "8. Qual teoria científica descreve a origem e expansão do Universo a partir de uma singularidade inicial?", answers: [{ text: "Teoria do Estado Estacionário", correct: false }, { text: "Teoria das Cordas", correct: false }, { text: "O Big Bang", correct: true }, { text: "Relatividade Restrita", correct: false }] },
    { question: "9. Qual é o elemento químico mais abundante em todo o Universo observável?", answers: [{ text: "Hélio", correct: false }, { text: "Oxigênio", correct: false }, { text: "Hidrogênio", correct: true }, { text: "Carbono", correct: false }] },
    { question: "10. Como se chama o 'ponto de não retorno' ao redor de um buraco negro, de onde nem a luz escapa?", answers: [{ text: "Singularidade", correct: false }, { text: "Horizonte de Eventos", correct: true }, { text: "Ergosfera", correct: false }, { text: "Disco de Acreção", correct: false }] },
    { question: "11. Qual famoso telescópio espacial, lançado em 1990, revolucionou nossa visão do cosmos profundo?", answers: [{ text: "James Webb", correct: false }, { text: "Hubble", correct: true }, { text: "Kepler", correct: false }, { text: "Spitzer", correct: false }] },
    { question: "12. O que representa a Radiação Cósmica de Fundo em Micro-ondas (CMB)?", answers: [{ text: "Brilho de estrelas extintas", correct: false }, { text: "O eco térmico remanescente do Big Bang", correct: true }, { text: "Sinais de rádio de galáxias distantes", correct: false }, { text: "Luz refletida pela poeira intergaláctica", correct: false }] },
    { question: "13. Qual das quatro forças fundamentais rege o movimento dos planetas e a coesão das galáxias?", answers: [{ text: "Força Eletromagnética", correct: false }, { text: "Força Nuclear Forte", correct: false }, { text: "Gravidade", correct: true }, { text: "Força Nuclear Fraca", correct: false }] },
    { question: "14. Que componente invisível compõe cerca de 27% da densidade de massa-energia do cosmos e não emite luz?", answers: [{ text: "Matéria Escura", correct: true }, { text: "Energia Escura", correct: false }, { text: "Antimatéria", correct: false }, { text: "Plasma Intergaláctico", correct: false }] },
    { question: "15. O que impulsiona a expansão acelerada do Universo e representa aproximadamente 68% do cosmos?", answers: [{ text: "Gravidade Quântica", correct: false }, { text: "Energia Escura", correct: true }, { text: "Vento Solar", correct: false }, { text: "Radiação Hawkings", correct: false }] },
    { question: "16. Qual telescópio espacial ultra-avançado lançado em 2021 enxerga o universo em infravermelho?", answers: [{ text: "Chandra", correct: false }, { text: "James Webb (JWST)", correct: true }, { text: "Nancy Grace Roman", correct: false }, { text: "Euclid", correct: false }] },
    { question: "17. O Princípio da Incerteza de Heisenberg na física quântica afirma que não podemos saber simultaneamente:", answers: [{ text: "Massa e Carga de um elétron", correct: false }, { text: "Posição e Momento (velocidade) de uma partícula", correct: true }, { text: "Spin e Energia de um fóton", correct: false }, { text: "Tempo e Distância cósmica", correct: false }] },
    { question: "18. O que é exatamente um 'Ano-Luz'?", answers: [{ text: "A medida de tempo que a Terra leva para dar uma volta no Sol", correct: false }, { text: "A distância que a luz percorre em um ano terrestre", correct: true }, { text: "O tempo que a luz do Sol leva para sair da galáxia", correct: false }, { text: "A intensidade luminosa de uma supernova", correct: false }] },
    { question: "19. Qual objeto denso sobra quando o núcleo de uma estrela colapsa sem formar um buraco negro?", answers: [{ text: "Estrela de Nêutrons", correct: true }, { text: "Anã Vermelha", correct: false }, { text: "Magnetar Anão", correct: false }, { text: "Quasar", correct: false }] },
    { question: "20. O Limite de Chandrasekhar (aprox. 1,4 massas solares) estabelece a massa máxima para:", answers: [{ text: "Uma Estrela de Nêutrons existir", correct: false }, { text: "Uma Anã Branca suportar seu próprio colapso", correct: true }, { text: "Um Buraco Negro Supermassivo", correct: false }, { text: "Uma Nebulosa se transformar em estrela", correct: false }] },
    { question: "21. A hipótese cosmológica de que o nosso universo pode ser apenas uma bolha em um conjunto infinito é:", answers: [{ text: "Teoria do Universo Estático", correct: false }, { text: "O Multiverso", correct: true }, { text: "Princípio Antrópico Forte", correct: false }, { text: "Cosmologia Conforme Cíclica", correct: false }] },
    { question: "22. Na Relatividade Geral de Einstein, como a força da gravidade é fundamentalmente redefinida?", answers: [{ text: "Como atração atômica magnética", correct: false }, { text: "Como a curvatura do tecido do Espaço-Tempo", correct: true }, { text: "Como troca de bóson de Higgs cósmicos", correct: false }, { text: "Como pressão do vácuo quântico", correct: false }] }
];

// VARIÁVEIS DE ESTADO
let currentQuestionIndex = 0;
let score = 0;
let userHistory = []; // Registra se acertou (true) ou errou (false)

// ELEMENTOS DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const levelIndicator = document.getElementById('level-indicator');
const scoreIndicator = document.getElementById('score-indicator');
const finalMessage = document.getElementById('final-message');
const resultStats = document.getElementById('result-stats');
const svgFlowchart = document.getElementById('cosmic-flowchart');

// INICIALIZAÇÃO
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartBtn.addEventListener('click', startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userHistory = [];
    startScreen.classList.add('hide');
    resultScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    renderFlowchart();
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    updateStatus();
    updateFlowchart();
}

function showQuestion(questionData) {
    questionText.innerText = questionData.question;
    questionData.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answersContainer.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hide');
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    
    if (isCorrect) {
        score += 100;
        selectedButton.classList.add('correct');
        userHistory.push(true);
    } else {
        selectedButton.classList.add('incorrect');
        userHistory.push(false);
    }

    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    if (currentQuestionIndex + 1 < questions.length) {
        nextBtn.classList.remove('hide');
    } else {
        setTimeout(showResults, 1200);
    }
    
    updateStatus();
    updateFlowchart();
}

function updateStatus() {
    levelIndicator.innerText = `Nível ${currentQuestionIndex + 1} de ${questions.length}`;
    scoreIndicator.innerText = `Pontos: ${score}`;
}

// CONSTRUÇÃO E ATUALIZAÇÃO DO FLUXOGRAMA CÓSMICO (SVG)
function renderFlowchart() {
    svgFlowchart.innerHTML = '';
    const total = questions.length;
    const startX = 40;
    const gapX = 52;
    const centerY = 60;

    // Linhas de conexão do fluxograma
    for (let i = 0; i < total - 1; i++) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', startX + i * gapX);
        line.setAttribute('y1', centerY + (i % 2 === 0 ? -15 : 15));
        line.setAttribute('x2', startX + (i + 1) * gapX);
        line.setAttribute('y2', centerY + ((i + 1) % 2 === 0 ? -15 : 15));
        line.setAttribute('stroke', 'rgba(0, 243, 255, 0.2)');
        line.setAttribute('stroke-width', '3');
        line.setAttribute('id', `line-${i}`);
        svgFlowchart.appendChild(line);
    }

    // Nós celestes (Nodes)
    for (let i = 0; i < total; i++) {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const cx = startX + i * gapX;
        const cy = centerY + (i % 2 === 0 ? -15 : 15);

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', '12');
        circle.setAttribute('fill', '#0c102b');
        circle.setAttribute('stroke', 'rgba(0, 243, 255, 0.4)');
        circle.setAttribute('stroke-width', '2');
        circle.setAttribute('id', `node-${i}`);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', cx);
        text.setAttribute('y', cy + 4);
        text.setAttribute('fill', '#ffffff');
        text.setAttribute('font-size', '10');
        text.setAttribute('font-family', 'Orbitron');
        text.setAttribute('text-anchor', 'middle');
        text.textContent = i + 1;

        g.appendChild(circle);
        g.appendChild(text);
        svgFlowchart.appendChild(g);
    }
}

function updateFlowchart() {
    userHistory.forEach((status, i) => {
        const node = document.getElementById(`node-${i}`);
        if (node) {
            if (status === true) {
                node.setAttribute('fill', '#00e676'); // Verde fluorescente para acertos
                node.setAttribute('stroke', '#00f3ff');
            } else {
                node.setAttribute('fill', '#ff1744'); // Vermelho neon para erros
                node.setAttribute('stroke', '#ff0055');
            }
        }

        const line = document.getElementById(`line-${i}`);
        if (line) {
            line.setAttribute('stroke', status ? '#00e676' : '#ff1744');
            line.setAttribute('stroke-width', '4');
        }
    });

    // Destacar o nó atual em progresso
    if (currentQuestionIndex < questions.length) {
        const currentNode = document.getElementById(`node-${currentQuestionIndex}`);
        if (currentNode && userHistory[currentQuestionIndex] === undefined) {
            currentNode.setAttribute('fill', '#ff00ff');
            currentNode.setAttribute('stroke', '#ffffff');
        }
    }
}

// TELA FINAL DE RESULTADOS
function showResults() {
    quizScreen.classList.add('hide');
    resultScreen.classList.remove('hide');

    const totalCorrect = userHistory.filter(val => val === true).length;
    const percentage = Math.round((totalCorrect / questions.length) * 100);

    let rank = "";
    if (percentage >= 90) rank = "Mestre dos Segredos Quânticos Cósmicos 🌌";
    else if (percentage >= 70) rank = "Navegador de Galáxias Eficiente 🚀";
    else if (percentage >= 50) rank = "Explorador da Órbita Terrestre 🛰️";
    else rank = "Astronauta Recruta do Sistema Solar 👩‍🚀";

    finalMessage.innerText = `Você atingiu o Nível de Conhecimento de ${percentage}% no Universo!`;
    resultStats.innerHTML = `
        <p><strong>Classificação:</strong> ${rank}</p>
        <p><strong>Perguntas Corretas:</strong> ${totalCorrect} de 22</p>
        <p><strong>Pontuação Total:</strong> ${score} Pontos Cósmicos</p>
    `;
}

// EFEITO CANVAS DE FUNDO CÓSMICO COM ESTRELAS E PARTICULAS
const canvas = document.getElementById('space-canvas');
const ctx = canvas.getContext('2d');

let stars = [];
function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    for (let i = 0; i < 150; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.8,
            alpha: Math.random(),
            speed: Math.random() * 0.02
        });
    }
}

function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
        ctx.fill();
    });
    requestAnimationFrame(animateCanvas);
}

window.addEventListener('resize', initCanvas);
initCanvas();
animateCanvas();