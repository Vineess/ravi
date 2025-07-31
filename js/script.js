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

  el.textContent = `nossos caminhos se cruzaram há ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos ❤️`;
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
          resposta =
            "Um café compartilhado com você vale mais que mil deploys ☕";
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
