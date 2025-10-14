let storyText = document.getElementById("story-text");
let choices = document.getElementById("choices");

function choose(option) {
  switch(option) {
    case 'A':
      storyText.textContent = "Você encontra uma caverna segura e decide entrar para se proteger.";
      choices.innerHTML = `
        <button onclick="choose('A1')">Explorar a caverna</button>
        <button onclick="choose('A2')">Acender uma fogueira na entrada</button>
      `;
      break;

    case 'A1':
      storyText.textContent = "Dentro da caverna, você encontra um baú com suprimentos escondidos.";
      choices.innerHTML = `
        <button onclick="choose('A1a')">Construir um abrigo</button>
        <button onclick="choose('A1b')">Construir uma jangada</button>
      `;
      break;

    case 'A1a':
      storyText.textContent = "Você monta um abrigo resistente e sobrevive, tornando-se o guardião da ilha.";
      choices.innerHTML = `<p class="final">FINAL: Guardião da Ilha</p>`;
      break;

    case 'A1b':
      storyText.textContent = "Você constrói uma jangada e navega até outra ilha habitada, onde é resgatado.";
      choices.innerHTML = `<p class="final">FINAL: Fuga para a Liberdade</p>`;
      break;

    case 'A2':
      storyText.textContent = "O fogo atrai um navio distante, mas também um grupo de nativos curiosos.";
      choices.innerHTML = `
        <button onclick="choose('A2a')">Pedir ajuda aos nativos</button>
        <button onclick="choose('A2b')">Fugir para a floresta</button>
      `;
      break;

    case 'A2a':
      storyText.textContent = "Os nativos te ajudam e te levam até a costa, onde você é resgatado.";
      choices.innerHTML = `<p class="final">FINAL: Resgate</p>`;
      break;

    case 'A2b':
      storyText.textContent = "Você foge pela floresta, mas se perde e nunca encontra o caminho de volta.";
      choices.innerHTML = `<p class="final">FINAL: Perdido na Floresta</p>`;
      break;

    case 'B':
      storyText.textContent = "Você encontra frutas e um riacho com peixes frescos.";
      choices.innerHTML = `
        <button onclick="choose('B1')">Comer as frutas</button>
        <button onclick="choose('B2')">Pescar no riacho</button>
      `;
      break;

    case 'B1':
      storyText.textContent = "As frutas eram venenosas. Você passa mal e desmaia.";
      choices.innerHTML = `<p class="final">FINAL: Intoxicação</p>`;
      break;

    case 'B2':
      storyText.textContent = "Você pesca, se alimenta e sobrevive mais alguns dias, aguardando um possível resgate.";
      choices.innerHTML = `<p class="final">FINAL: Sobrevivente</p>`;
      break;
  }
}