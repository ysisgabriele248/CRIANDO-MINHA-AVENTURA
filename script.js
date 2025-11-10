let storyText = document.getElementById("story-text");
let choices = document.getElementById("choices");

function choose(option) {
  switch(option) {
    case 'A':
      storyText.textContent = "Você encontra uma caverna parcialmente escondida por folhagens. Lá dentro, o ar é úmido e frio, mas parece um bom abrigo. Você ouve o som distante do mar e o vento soprando do lado de fora.";
      choices.innerHTML = `
        <button onclick="choose('A1')">Explorar a caverna</button>
        <button onclick="choose('A2')">Acender uma fogueira na entrada</button>
        <button onclick="choose('A3')">Deixar a caverna e procurar outro lugar</button>
      `;
      break;

    case 'A1':
      storyText.textContent = "Você entra com cuidado, iluminando o caminho com o reflexo da luz. No fundo, há um baú coberto por teias de aranha e um pequeno túnel lateral que parece levar a outro compartimento.";
      choices.innerHTML = `
        <button onclick="choose('A1a')">Abrir o baú</button>
        <button onclick="choose('A1b')">Explorar o túnel lateral</button>
      `;
      break;

    case 'A1a':
      storyText.textContent = "Dentro do baú há cordas, ferramentas e uma velha bússola enferrujada. Isso pode ser útil.";
      choices.innerHTML = `
        <button onclick="choose('A1a1')">Usar as ferramentas para construir um abrigo</button>
        <button onclick="choose('A1a2')">Usar a bússola para explorar a ilha</button>
      `;
      break;

    case 'A1a1':
      storyText.textContent = "Com as ferramentas, você constrói um abrigo resistente perto da caverna. Aos poucos, aprende a caçar e sobreviver, tornando-se o guardião da ilha.";
      choices.innerHTML = `<p class="final">FINAL: Guardião da Ilha</p>`;
      break;

    case 'A1a2':
      storyText.textContent = "A bússola guia você até uma praia escondida onde há destroços de outro navio. Você encontra suprimentos e um pequeno rádio quebrado.";
      choices.innerHTML = `
        <button onclick="choose('A1a2a')">Tentar consertar o rádio</button>
        <button onclick="choose('A1a2b')">Usar os destroços para construir uma jangada</button>
      `;
      break;

    case 'A1a2a':
      storyText.textContent = "Você consegue consertar o rádio e enviar um sinal de socorro. Dias depois, um helicóptero aparece sobre a ilha.";
      choices.innerHTML = `<p class="final">FINAL: Resgatado pelo Rádio</p>`;
      break;

    case 'A1a2b':
      storyText.textContent = "Você constrói uma jangada robusta e navega por dias até avistar outra ilha habitada.";
      choices.innerHTML = `<p class="final">FINAL: Fuga para a Liberdade</p>`;
      break;

    case 'A1b':
      storyText.textContent = "O túnel leva a uma câmara iluminada por uma fenda no teto. Lá, há desenhos antigos nas paredes e uma nascente de água cristalina.";
      choices.innerHTML = `
        <button onclick="choose('A1b1')">Beber da água da nascente</button>
        <button onclick="choose('A1b2')">Examinar os desenhos</button>
      `;
      break;

    case 'A1b1':
      storyText.textContent = "A água tem um gosto estranho, mas revigorante. Você sente energia e clareza mental. Talvez haja algo especial nessa nascente.";
      choices.innerHTML = `<p class="final">FINAL: Benção da Ilha</p>`;
      break;

    case 'A1b2':
      storyText.textContent = "Os desenhos contam a história de antigos exploradores que viveram na ilha. Você descobre símbolos que apontam para uma rota segura até a costa.";
      choices.innerHTML = `
        <button onclick="choose('A1b2a')">Seguir o caminho indicado</button>
        <button onclick="choose('A1b2b')">Ignorar e continuar na caverna</button>
      `;
      break;

    case 'A1b2a':
      storyText.textContent = "Seguindo o caminho, você chega a uma praia com marcas recentes de pegadas humanas. Pouco depois, encontra uma equipe de resgate.";
      choices.innerHTML = `<p class="final">FINAL: Encontro com o Resgate</p>`;
      break;

    case 'A1b2b':
      storyText.textContent = "Você decide ficar na caverna. Com o tempo, a solidão domina e você se torna parte dos mistérios da ilha.";
      choices.innerHTML = `<p class="final">FINAL: O Eremita da Caverna</p>`;
      break;

    case 'A2':
      storyText.textContent = "O fogo ilumina a noite e aquece seu corpo cansado. Horas depois, você nota sombras se aproximando — são nativos da ilha.";
      choices.innerHTML = `
        <button onclick="choose('A2a')">Falar com eles</button>
        <button onclick="choose('A2b')">Fugir para a floresta</button>
      `;
      break;

    case 'A2a':
      storyText.textContent = "Os nativos observam em silêncio. Um deles oferece comida e aponta para o horizonte, onde um navio está ancorado ao longe.";
      choices.innerHTML = `<p class="final">FINAL: Resgate Amigável</p>`;
      break;

    case 'A2b':
      storyText.textContent = "Você corre floresta adentro, tropeçando em galhos e raízes. O som do mar desaparece e tudo fica escuro.";
      choices.innerHTML = `
        <button onclick="choose('A2b1')">Subir em uma árvore para se orientar</button>
        <button onclick="choose('A2b2')">Seguir o som de um riacho</button>
      `;
      break;

    case 'A2b1':
      storyText.textContent = "Lá de cima, você vê fumaça ao longe — talvez de um acampamento. Ao tentar descer, um galho se quebra e você se machuca gravemente.";
      choices.innerHTML = `<p class="final">FINAL: Ferido e Perdido</p>`;
      break;

    case 'A2b2':
      storyText.textContent = "Você segue o riacho e encontra um pequeno vilarejo de pescadores. Eles te ajudam e te levam até a civilização.";
      choices.innerHTML = `<p class="final">FINAL: Salvo pelo Destino</p>`;
      break;

    case 'A3':
      storyText.textContent = "Você decide que a caverna é perigosa demais e caminha até uma clareira com árvores frutíferas.";
      choices.innerHTML = `
        <button onclick="choose('B')">Procurar comida</button>
        <button onclick="choose('C')">Explorar mais o interior da ilha</button>
      `;
      break;

    case 'B':
      storyText.textContent = "Você encontra frutas coloridas e um riacho de águas límpidas. O som dos pássaros é reconfortante.";
      choices.innerHTML = `
        <button onclick="choose('B1')">Comer as frutas</button>
        <button onclick="choose('B2')">Pescar no riacho</button>
        <button onclick="choose('B3')">Seguir o curso do riacho</button>
      `;
      break;

    case 'B1':
      storyText.textContent = "As frutas eram venenosas. Você passa mal e desmaia, acordando dias depois enfraquecido.";
      choices.innerHTML = `<p class="final">FINAL: Intoxicação</p>`;
      break;

    case 'B2':
      storyText.textContent = "Você pesca alguns peixes e faz uma pequena fogueira para cozinhar. Com energia renovada, decide planejar seu futuro.";
      choices.innerHTML = `
        <button onclick="choose('B2a')">Construir um abrigo</button>
        <button onclick="choose('B2b')">Explorar o litoral</button>
      `;
      break;

    case 'B2a':
      storyText.textContent = "Com o tempo, você se adapta à vida na ilha. Torna-se um sobrevivente habilidoso e confiante.";
      choices.innerHTML = `<p class="final">FINAL: Sobrevivente da Ilha</p>`;
      break;

    case 'B2b':
      storyText.textContent = "Enquanto caminha pelo litoral, você encontra uma garrafa com uma mensagem dentro — um mapa indicando um ponto de resgate.";
      choices.innerHTML = `<p class="final">FINAL: O Mapa do Destino</p>`;
      break;

    case 'B3':
      storyText.textContent = "Seguindo o riacho, você encontra uma cachoeira majestosa e um abrigo natural atrás dela. Parece o lugar perfeito para descansar.";
      choices.innerHTML = `
        <button onclick="choose('B3a')">Montar acampamento ali</button>
        <button onclick="choose('B3b')">Continuar explorando</button>
      `;
      break;

    case 'B3a':
      storyText.textContent = "Você descansa ao som da água caindo e sente que encontrou seu refúgio ideal.";
      choices.innerHTML = `<p class="final">FINAL: Refúgio das Águas</p>`;
      break;

    case 'B3b':
      storyText.textContent = "Ao seguir mais fundo, encontra uma antiga construção coberta pela selva. Talvez um templo abandonado.";
      choices.innerHTML = `<p class="final">FINAL: Mistério da Selva</p>`;
      break;

    case 'C':
      storyText.textContent = "No interior da ilha, o terreno se torna acidentado e coberto por uma floresta densa. Você sente que não está sozinho...";
      choices.innerHTML = `
        <button onclick="choose('C1')">Procurar uma trilha</button>
        <button onclick="choose('C2')">Subir em uma pedra para observar</button>
      `;
      break;

    case 'C1':
      storyText.textContent = "Você segue uma trilha coberta de folhas e encontra uma pequena cabana abandonada com alguns utensílios antigos.";
      choices.innerHTML = `<p class="final">FINAL: Herdeiro da Cabana</p>`;
      break;

    case 'C2':
      storyText.textContent = "Do alto da pedra, você avista o mar e o que parece ser uma embarcação se aproximando lentamente.";
      choices.innerHTML = `<p class="final">FINAL: A Salvação Chega</p>`;
      break;
  }
}
