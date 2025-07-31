// Contador de tempo juntos
const inicio = new Date("2025-06-26T00:00:00");
const el = document.getElementById("contador");

function atualizaContador() {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  if (el) {
    el.textContent = `nossos caminhos se cruzaram há ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos ❤️`;
  }
}

atualizaContador();
setInterval(atualizaContador, 1000);

// Easter egg: Ctrl + G → modo gato fofo
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "g") {
    document.body.classList.toggle("gato-mode");
  }
});

// Terminal interativo
const input = document.getElementById("terminalInput");
const output = document.getElementById("terminalOutput");

if (input) {
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const value = input.value.trim().toLowerCase();
      let resposta = "";

      switch (value) {
        case "amor":
          resposta = "amor é o commit mais estável do nosso repositório ❤️";
          break;
        case "raquel":
          resposta = "Raquel é a chave primária do meu coração 💖";
          break;
        case "vinicius":
          resposta = "Vinicius é o pull request aceito sem revisão 💌";
          break;
        case "git push":
          resposta = "Push realizado com sucesso para o branch: /vida-a-dois";
          break;
        case "café":
          resposta = "Um café compartilhado com você vale mais que mil deploys ☕";
          break;
        case "segredo":
        case "surpresa":
          resposta = `✨ Você descobriu um segredo... Raquel, cada pedacinho desse site foi feito pensando em você. 
Você é minha inspiração, minha linha favorita no código da vida. Obrigado por ser quem você é. Eu gosto muito de você. ❤️`;
          break;
        default:
          resposta = `Comando "${value}" não reconhecido... mas ainda assim, você é reconhecida como única 💘`;
      }

      output.textContent = resposta;
      input.value = "";
    }
  });
}

// Mini game - Valide a compatibilidade
function avaliarCompatibilidade() {
  const linha = document.getElementById("codigo").value.trim();
  const saida = document.getElementById("saidaCompatibilidade");

  const codigo = `
    return (function saoCompatíveis(p1, p2) {
      ${linha}
    })("Raquel", "Vinicius");
  `;

  try {
    const resultado = new Function(codigo)();
    if (resultado === true) {
      saida.textContent =
        "✅ Compatibilidade confirmada! ❤️ Vocês formam o par perfeito.";
    } else {
      saida.textContent = "❌ Hmm... algo deu errado. Verifique sua lógica!";
    }
  } catch (err) {
    saida.textContent = "⚠️ Erro de sintaxe! Tente corrigir sua linha.";
  }
}

// Conversa simulada
const linhasConversa = [
  'Vinicius: Oi! Consegue me tirar uma dúvida rápida?',
  'Vinicius: Fiz um SELECT * FROM pessoas_que_achei_interessante WHERE interesses LIKE \'%café, gato, dev%\'',
  'Vinicius: e teu perfil apareceu pra mim…',
  'Vinicius: Isso é bug, destino ou o algoritmo finalmente foi generoso comigo? 😅',
  'Raquel: Oie.. Bug eu tenho certeza que não é…',
  'Raquel: Agora se é destino ou algoritmo, só uma próxima query vai dizer 😉',
  'Vinicius: SELECT * FROM nossos_encontros WHERE disponibilidade = \'aberta\' AND vontade = \'muita\';',
  'Vinicius: Só puxei quem tá com disposição aberta e vontade lá em cima… só pra ver se você aparece nessa listagem',
  'Raquel: Ih, acho que sua consulta me retornou sim…',
  'Raquel: E agora, vai dar commit ou rollback nesse encontro?',
  'Vinicius: rollback não faz parte do meu stack 😉',
  'Vinicius: pr já tá aberto, só falta você dar o merge',
  'Raquel: Bora aprovar esse merge então',
  'Raquel: Kkkkkk',
  'Vinicius: ótimo, vamos dar um jeito nisso então haahha'
];


function simularConversa() {
  const container = document.getElementById("chatSimulado");
  if (!container) return;

  let index = 0;
  container.innerHTML = ""; // limpa antes de começar

  function mostrarLinha() {
    if (index < linhasConversa.length) {
      const linha = document.createElement("div");
      linha.classList.add("chat-line");
      linha.textContent = linhasConversa[index];
      container.appendChild(linha);
      setTimeout(() => linha.classList.add("show"), 100);
      index++;
      setTimeout(mostrarLinha, 1800);
    } else {
      // reinicia após alguns segundos
      setTimeout(simularConversa, 4000);
    }
  }

  mostrarLinha();
}

window.addEventListener("DOMContentLoaded", simularConversa);

// Constelação animada (particles.js)
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    size: { value: 2 },
    color: { value: "#a5d6ff" },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#a5d6ff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.6
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});
