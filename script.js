const storyText = document.getElementById("story-text");
const choices = document.getElementById("choices");

function startGame() {
  storyText.textContent = "Você acorda em uma praia deserta, sem lembrar como chegou ali. O som das ondas e o cheiro de sal estão por toda parte.";
  choices.innerHTML = `
    <button onclick="choose('A1')">Explorar a floresta próxima</button>
    <button onclick="choose('A2')">Seguir pela praia</button>
  `;
}

function choose(option) {
  switch (option) {
    case 'A1':
      storyText.textContent = "Você entra na floresta, ouvindo o barulho de animais e galhos quebrando. O caminho se divide em dois.";
      choices.innerHTML = `
        <button onclick="choose('A1a')">Seguir o som de água corrente</button>
        <button onclick="choose('A1b')">Subir uma colina para observar o local</button>
      `;
      break;

    case 'A1a':
      storyText.textContent = "Você encontra um pequeno riacho de água cristalina. Há pegadas humanas próximas.";
      choices.innerHTML = `
        <button onclick="choose('A1a1')">Seguir as pegadas</button>
        <button onclick="choose('A1a2')">Ignorar e descansar</button>
      `;
      break;

    case 'A1a1':
      storyText.textContent = "As pegadas levam até uma clareira com cabanas rudimentares. Pessoas parecem viver ali.";
      choices.innerHTML = `
        <button onclick="choose('A1a1a')">Se aproximar pacificamente</button>
        <button onclick="choose('A1a1b')">Observar de longe</button>
      `;
      break;

    case 'A1a1a':
      endGame("FINAL: Acolhido — Os nativos o recebem bem e você passa a viver entre eles, aprendendo a sobreviver na ilha.");
      break;

    case 'A1a1b':
      endGame("FINAL: Capturado — Os nativos percebem sua presença e o capturam. Sua sorte é incerta, mas você nunca mais é visto.");
      break;

    case 'A1a2':
      endGame("FINAL: Descuido Fatal — Enquanto descansa, um animal selvagem o ataca. A floresta não perdoa os descuidados.");
      break;

    case 'A1b':
      storyText.textContent = "Do alto da colina, você vê fumaça saindo de uma cabana próxima e o mar ao longe.";
      choices.innerHTML = `
        <button onclick="choose('A1b1')">Ir até a cabana</button>
        <button onclick="choose('A1b2')">Ir até o mar</button>
      `;
      break;

    case 'A1b1':
      storyText.textContent = "A cabana parece velha, mas há sinais de alguém morando ali. Você ouve passos do lado de fora.";
      choices.innerHTML = `
        <button onclick="choose('A1b1a')">Se esconder dentro</button>
        <button onclick="choose('A1b1b')">Sair e se revelar</button>
      `;
      break;

    case 'A1b1a':
      endGame("FINAL: Descoberto — Você tenta se esconder, mas é encontrado por um grupo armado. Eles não confiam em estranhos.");
      break;

    case 'A1b1b':
      endGame("FINAL: Novo Aliado — O homem da cabana era outro sobrevivente. Juntos, vocês constroem uma jangada e escapam da ilha.");
      break;

    case 'A1b2':
      storyText.textContent = "Você segue em direção ao mar e encontra destroços de um barco naufragado.";
      choices.innerHTML = `
        <button onclick="choose('A1b2a')">Procurar suprimentos</button>
        <button onclick="choose('A1b2b')">Tentar consertar o barco</button>
      `;
      break;

    case 'A1b2a':
      endGame("FINAL: Veneno do Mar — Você encontra comida estragada entre os destroços e acaba intoxicado. A ajuda nunca chega.");
      break;

    case 'A1b2b':
      endGame("FINAL: Fuga pelo Mar — Você repara o barco o suficiente para navegar e é resgatado dias depois.");
      break;

    case 'A2':
      storyText.textContent = "Você caminha pela praia por horas até avistar algo no horizonte — uma cabana solitária entre as palmeiras.";
      choices.innerHTML = `
        <button onclick="choose('A2a')">Entrar na cabana</button>
        <button onclick="choose('A2b')">Observar ao redor antes</button>
      `;
      break;

    // 🚨 Parte corrigida que você mencionou
    case 'A2b':
      storyText.textContent = "Ao redor da cabana, há marcas de pegadas recentes. Alguém parece ter estado ali há pouco tempo.";
      choices.innerHTML = `
        <button onclick="choose('A2b1')">Entrar na cabana mesmo assim</button>
        <button onclick="choose('A2b2')">Seguir as pegadas</button>
      `;
      break;

    case 'A2b1':
      endGame("FINAL: Armadilha Mortal — Você entra na cabana e cai em uma armadilha deixada por outros sobreviventes. Sua jornada termina ali.");
      break;

    case 'A2b2':
      storyText.textContent = "Você segue as pegadas pela floresta e encontra um pequeno grupo de sobreviventes isolados, vivendo de caça e pesca.";
      choices.innerHTML = `
        <button onclick="choose('A2b2a')">Juntar-se a eles</button>
        <button onclick="choose('A2b2b')">Tentar convencê-los a fugir com você</button>
      `;
      break;

    case 'A2b2a':
      endGame("FINAL: Vida em Comunidade — Você decide viver entre os sobreviventes, aceitando a ilha como seu novo lar.");
      break;

    case 'A2b2b':
      storyText.textContent = "Eles hesitam, mas concordam em ajudar. Juntos, vocês constroem uma jangada improvisada.";
      choices.innerHTML = `
        <button onclick="choose('A2b2b1')">Partir no mar</button>
        <button onclick="choose('A2b2b2')">Desistir e ficar</button>
      `;
      break;

    case 'A2b2b1':
      endGame("FINAL: Fuga Arriscada — Após dias à deriva, um navio de pesca os resgata. A liberdade, enfim, é conquistada.");
      break;

    case 'A2b2b2':
      endGame("FINAL: Escolha da Ilha — Você desiste de partir e passa o resto da vida com os sobreviventes, adaptando-se ao novo mundo.");
      break;

    case 'A2a':
      storyText.textContent = "A cabana está abandonada, mas há mapas e objetos antigos no interior. Parece que alguém tentou escapar da ilha antes.";
      choices.innerHTML = `
        <button onclick="choose('A2a1')">Examinar os mapas</button>
        <button onclick="choose('A2a2')">Sair e procurar outro abrigo</button>
      `;
      break;

    case 'A2a1':
      endGame("FINAL: Esperança no Horizonte — Usando o mapa, você encontra um ponto onde um helicóptero faz resgates ocasionais. Após dias de espera, você é salvo.");
      break;

    case 'A2a2':
      endGame("FINAL: Perdido na Escuridão — Você se afasta demais da costa e se perde na floresta. Ninguém jamais o encontra.");
      break;

    default:
      storyText.textContent = "Algo deu errado. Recomece o jogo.";
      choices.innerHTML = `<button onclick="startGame()">Reiniciar</button>`;
  }
}

function endGame(finalText) {
  storyText.textContent = finalText;
  choices.innerHTML = `<button onclick="startGame()">Jogar novamente</button>`;
}

startGame();

