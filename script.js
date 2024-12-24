// Variáveis globais
let intervalId; // Armazena o ID do intervalo
let time = 0; // Tempo decorrido em segundos

// Seleciona elementos do DOM
const hoursEl = document.querySelector("#horas p");
const minutesEl = document.querySelector("#minutos p");
const secondsEl = document.querySelector("#segundos p");
const startButton = document.querySelector(".iniciar");
const pauseButton = document.querySelector(".pausar");
const resetButton = document.querySelector(".zerar");

// Função para formatar números (ex: 9 -> "09")
function formatNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
}

// Função para atualizar o display do timer
function updateDisplay() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    hoursEl.textContent = formatNumber(hours);
    minutesEl.textContent = formatNumber(minutes);
    secondsEl.textContent = formatNumber(seconds);
}

// Função para iniciar o timer
function startTimer() {
    if (intervalId) return; // Evita múltiplos intervalos ativos

    intervalId = setInterval(() => {
        time++; // Incrementa o tempo em 1 segundo
        updateDisplay();
    }, 1000); // Executa a cada 1 segundo

    resetColors(); // Restaura as cores quando iniciar
}

// Função para pausar o timer
function pauseTimer() {
    clearInterval(intervalId);
    intervalId = null; // Reseta o ID do intervalo

    changeColorsOnPause(); // Altera as cores quando pausar
}

// Função para zerar o timer
function resetTimer() {
    pauseTimer(); // Pausa o timer
    time = 0; // Reseta o tempo
    updateDisplay(); // Atualiza o display para 00:00:00
    resetColors(); // Restaura as cores
}

// Função para alterar as cores ao pausar
function changeColorsOnPause() {
    document.querySelectorAll("#horas, #minutos, #segundos").forEach(circulo => {
        circulo.style.backgroundColor = "#023535";
        circulo.style.color = "#fff";
    });
}

// Função para restaurar as cores originais
function resetColors() {
    document.querySelectorAll("#horas, #minutos, #segundos").forEach(circulo => {
        circulo.style.backgroundColor = "#fff";
        circulo.style.color = "#023535";
    });
}

// Event listeners para os botões
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);