// Animação de Digitação
const titulo = "Feliz Dia das Mães, Lorena! 💐";
const elemento = document.getElementById("tituloDigitando");
let i = 0;

function digitar() {
  if (i < titulo.length) {
    elemento.innerHTML += titulo.charAt(i);
    i++;
    setTimeout(digitar, 70);
  } else {
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    elemento.appendChild(cursor);
  }
}

// Variáveis para controle dos confetes
let confeteInterval;
let confeteAtivo = false;

// Função para criar confetes infinitos
function criarConfetes() {
  // Se já estiver ativo, não criar novo intervalo
  if (confeteAtivo) return;
  
  confeteAtivo = true;
  const cores = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", 
                "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", 
                "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"];

  // Criar confetes continuamente
  confeteInterval = setInterval(() => {
    for (let i = 0; i < 8; i++) { // Cria 8 confetes de cada vez
      const confete = document.createElement("div");
      confete.classList.add("confete");
      
      // Posição aleatória na parte superior
      const left = Math.random() * 100;
      
      // Cor aleatória
      const randomColor = cores[Math.floor(Math.random() * cores.length)];
      
      // Forma aleatória (30% de chance de ser emoji)
      if (Math.random() > 0.7) {
        const emojis = ["❤️", "💛", "💖", "💙", "💜", "💚", "🌟", "🎉", "✨"];
        confete.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        confete.style.fontSize = (Math.random() * 20 + 10) + "px";
        confete.style.background = "transparent";
        confete.style.textShadow = "0 0 5px rgba(255,255,255,0.8)";
      } else {
        confete.style.backgroundColor = randomColor;
        // Forma aleatória (círculo, quadrado ou triângulo)
        const shape = Math.random();
        if (shape > 0.66) {
          confete.style.borderRadius = "50%";
        } else if (shape > 0.33) {
          confete.style.borderRadius = "0";
        } else {
          confete.style.width = "0";
          confete.style.height = "0";
          confete.style.borderLeft = "8px solid transparent";
          confete.style.borderRight = "8px solid transparent";
          confete.style.borderBottom = `16px solid ${randomColor}`;
          confete.style.background = "transparent";
        }
      }
      
      // Tamanho aleatório (exceto para triângulos)
      if (!confete.style.borderBottom) {
        const size = Math.random() * 15 + 5;
        confete.style.width = size + "px";
        confete.style.height = size + "px";
      }
      
      // Posicionamento inicial
      confete.style.left = left + "vw";
      confete.style.top = "-30px";
      
      // Duração e movimento aleatório
      const duration = Math.random() * 3 + 2;
      confete.style.animationDuration = duration + "s";
      
      // Movimento horizontal aleatório
      const moveX = (Math.random() - 0.5) * 20;
      confete.style.transform = `translateX(${moveX}px)`;
      
      document.getElementById("confetes").appendChild(confete);
      
      // Remover após animação
      setTimeout(() => {
        if (confete.parentNode) {
          confete.remove();
        }
      }, duration * 1000);
    }
  }, 150); // Novo grupo de confetes a cada 150ms
}

// Mostrar Mensagem Principal
document.getElementById("btnMensagem").addEventListener("click", function() {
  const mensagem = document.getElementById("mensagem");
  const btnMensagem = document.getElementById("btnMensagem");
  
  mensagem.classList.remove("oculto");
  btnMensagem.style.display = "none";
  
  // Iniciar confetes infinitos
  criarConfetes();
});

// Scroll Reveal
function revelarElementosAoRolar() {
  const reveals = document.querySelectorAll(".reveal");
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 50) {
      el.classList.add("active");
    }
  }
}

window.addEventListener("scroll", revelarElementosAoRolar);
window.addEventListener("load", revelarElementosAoRolar);

// Iniciar animação de digitação quando a página carregar
window.onload = function() {
  digitar();
  revelarElementosAoRolar();
};