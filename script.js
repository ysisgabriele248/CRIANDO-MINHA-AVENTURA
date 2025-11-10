let storyText = document.getElementById("story-text");
let choices = document.getElementById("choices");

function restartGame() {
  storyText.textContent = "Você acorda em uma ilha desconhecida após um naufrágio. A praia é calma, mas o céu indica uma tempestade se aproximando. O que você faz?";
  choices.innerHTML = `
    <button onclick="choose('A')">Procurar abrigo</button>
    <button onclick="choose('B')">Procurar comida</button>
  `;
}

function endGame(finalText) {
  choices.innerHTML = `
    <p class="final">${finalText}</p>
    <button class="restart-btn" onclick="restartGame()">Jogar novamente</button>
  `;
}

function choose(option) {
  switch(option) {
    // Início
    case 'A':
      storyText.textContent = "Você decide procurar um abrigo. Após caminhar por um tempo, encontra uma caverna parcialmente escondida pela vegetação.";
      choices.innerHTML = `
        <button onclick="choose('A1')">Entrar na caverna</button>
        <button onclick="choose('A2')">Procurar outro tipo de abrigo</button>
      `;
      break;

    // Entrando na caverna
    case 'A1':
      storyText.textContent = "A caverna é escura, mas parece segura. O chão está úmido e há alguns sons de animais pequenos.";
      choices.innerHTML = `
        <button onclick="choose('A1a')">Explorar mais fundo</button>
        <button onclick="choose('A1b')">Fazer um fogo na entrada</button>
      `;
      break;

    // Explorando fundo da caverna
    case 'A1a':
      storyText.textContent = "Você avança com cuidado. Encontra uma pequena fonte de água limpa e alguns restos de uma fogueira antiga.";
      choices.innerHTML = `
        <button onclick="choose('A1a1')">Beber a água</button>
        <button onclick="choose('A1a2')">Ignorar e voltar para a entrada</button>
      `;
      break;

    case 'A1a1':
      storyText.textContent = "A água parece fresca e segura. Você bebe um pouco e se sente melhor. Agora precisa decidir como vai passar a noite.";
      choices.innerHTML = `
        <button onclick="choose('A1a1a')">Improvisar uma cama com folhas</button>
        <button onclick="choose('A1a1b')">Ficar acordado e vigiar o local</button>
      `;
      break;

    case 'A1a1a':
      storyText.textContent = "Você consegue descansar algumas horas. Pela manhã, escuta barulho de um helicóptero ao longe.";
      choices.innerHTML = `
        <button onclick="choose('A1a1a1')">Correr para fora e acenar</button>
        <button onclick="choose('A1a1a2')">Tentar fazer uma fogueira para sinalizar</button>
      `;
      break;

    case 'A1a1a1':
      endGame("FINAL: Resgate Aéreo — Você foi salvo e levado de volta ao continente.");
      break;

    case 'A1a1a2':
      endGame("FINAL: Solidão Eterna — Você nunca é encontrado e vive isolado na ilha até o fim da vida.");
      break;

    case 'A1a1b':
      storyText.textContent = "Durante a madrugada, ouve passos e se esconde. Um pequeno grupo de pescadores passa pela praia próxima.";
      choices.innerHTML = `
        <button onclick="choose('A1a1b1')">Correr até eles e pedir ajuda</button>
        <button onclick="choose('A1a1b2')">Esperar amanhecer para segui-los</button>
      `;
      break;

    case 'A1a1b1':
      endGame("FINAL: Resgatado — Você é levado para a cidade em segurança.");
      break;

    case 'A1a1b2':
      endGame("FINAL: Isolado — Você sobrevive por anos, mas nunca mais vê outro ser humano.");
      break;

    case 'A1a2':
      storyText.textContent = "Você volta para a entrada e decide descansar ali. O vento é forte, mas é mais seguro que o interior da caverna.";
      choices.innerHTML = `
        <button onclick="choose('A1a2a')">Fazer uma fogueira</button>
        <button onclick="choose('A1a2b')">Apenas esperar amanhecer</button>
      `;
      break;

    case 'A1a2a':
      endGame("FINAL: Resgate Marítimo — Um navio percebe sua fumaça e vem até a costa.");
      break;

    case 'A1a2b':
      endGame("FINAL: Encontro Fatal — Ao seguir pegadas pela manhã, você é atacado por um animal selvagem e não sobrevive.");
      break;

    case 'A1b':
      storyText.textContent = "Você acende uma fogueira com cuidado. A fumaça sobe e espanta insetos, mas atrai atenção de longe.";
      choices.innerHTML = `
        <button onclick="choose('A1b1')">Tentar apagar a fogueira e se esconder</button>
        <button onclick="choose('A1b2')">Esperar para ver quem se aproxima</button>
      `;
      break;

    case 'A1b1':
      endGame("FINAL: Encontro Pacífico — Pescadores te veem e te levam ao continente.");
      break;

    case 'A1b2':
      storyText.textContent = "Um grupo de nativos aparece. Eles parecem curiosos, mas não hostis.";
      choices.innerHTML = `
        <button onclick="choose('A1b2a')">Tentar se comunicar</button>
        <button onclick="choose('A1b2b')">Fugir para a floresta</button>
      `;
      break;

    case 'A1b2a':
      endGame("FINAL: Convívio — Você passa o resto da vida vivendo entre os nativos.");
      break;

    case 'A1b2b':
      endGame("FINAL: Morte na Selva — Você foge e acaba se perdendo, morrendo de fome e exaustão.");
      break;

    case 'A2':
      storyText.textContent = "Você decide não arriscar entrar na caverna e continua explorando. Após um tempo, encontra uma cabana antiga e abandonada.";
      choices.innerHTML = `
        <button onclick="choose('A2a')">Entrar na cabana</button>
        <button onclick="choose('A2b')">Verificar os arredores primeiro</button>
      `;
      break;

    case 'A2a':
      storyText.textContent = "Dentro da cabana há restos de ferramentas, uma lona e uma velha lanterna.";
      choices.innerHTML = `
        <button onclick="choose('A2a1')">Usar a lona para reforçar o teto</button>
        <button onclick="choose('A2a2')">Usar a lanterna para explorar à noite</button>
      `;
      break;

    case 'A2a1':
      endGame("FINAL: Resgate Marítimo — Um barco percebe sua presença e vem até a costa.");
      break;

    case 'A2a2':
      endGame("FINAL: Caminho da Esperança — Você segue uma trilha e é salvo por pescadores.");
      break;

    case 'A2b':
      storyText.textContent = "Ao redor da cabana, há marcas de pegadas recentes. Alguém parece ter estado ali há pouco tempo.";
      choices.innerHTML = `
        <button onclick="choose('A2b1')">Entrar na cabana mesmo assim</button>
        <button onclick="choose('A2b2')">Seguir as pegadas</button>
      `;
      break;

    case 'A2b1':
      endGame("FINAL: Armadilha Mortal — Você cai em uma armadilha e não sobrevive.");
      break;

    case 'A2b2':
      endGame("FINAL: Novo Lar — Você encontra sobreviventes e passa o resto da vida com eles.");
      break;

    case 'B':
      storyText.textContent = "Você decide procurar comida. Após explorar um pouco, encontra um riacho com peixes e algumas árvores frutíferas.";
      choices.innerHTML = `
        <button onclick="choose('B1')">Comer as frutas</button>
        <button onclick="choose('B2')">Tentar pescar</button>
      `;
      break;

    case 'B1':
      storyText.textContent = "As frutas parecem boas, mas você não tem certeza se são seguras.";
      choices.innerHTML = `
        <button onclick="choose('B1a')">Comer assim mesmo</button>
        <button onclick="choose('B1b')">Guardar para mais tarde</button>
      `;
      break;

    case 'B1a':
      endGame("FINAL: Intoxicação — Você morre envenenado pelas frutas desconhecidas.");
      break;

    case 'B1b':
      endGame("FINAL: Sobrevivência — Você monta um abrigo e sobrevive sozinho por anos.");
      break;

    case 'B2':
      storyText.textContent = "Você improvisa uma vara com um galho e tenta pescar.";
      choices.innerHTML = `
        <button onclick="choose('B2a')">Continuar tentando pescar</button>
        <button onclick="choose('B2b')">Desistir e procurar outro alimento</button>
      `;
      break;

    case 'B2a':
      endGame("FINAL: Vida Selvagem — Você sobrevive por muitos anos vivendo da pesca e da caça.");
      break;

    case 'B2b':
      endGame("FINAL: Morte pela Fome — Você não encontra mais alimento e seu corpo não resiste.");
      break;
  }
}

// Inicia o jogo automaticamente
restartGame();


