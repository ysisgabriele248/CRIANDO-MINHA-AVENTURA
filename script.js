let storyText = document.getElementById("story-text");
let choices = document.getElementById("choices");

function choose(option) {
  switch(option) {

    case 'A':
      storyText.textContent = "Você decide procurar abrigo. A ilha é densa e silenciosa, o ar úmido e pesado. Após caminhar por um tempo, encontra uma caverna parcialmente escondida por folhagens.";
      choices.innerHTML = `
        <button onclick="choose('A1')">Entrar na caverna</button>
        <button onclick="choose('A2')">Procurar outro abrigo</button>
      `;
      break;

    case 'A1':
      storyText.textContent = "Dentro da caverna, o ar é frio e o som do vento ecoa pelas paredes. Há pegadas antigas no chão — você não está certo se são humanas. Um leve brilho vem do fundo.";
      choices.innerHTML = `
        <button onclick="choose('A1a')">Seguir o brilho</button>
        <button onclick="choose('A1b')">Sair e acender uma fogueira na entrada</button>
      `;
      break;

    case 'A1a':
      storyText.textContent = "Você segue até encontrar um pequeno baú coberto de poeira. Dentro, há uma bússola e um mapa rasgado mostrando parte da ilha.";
      choices.innerHTML = `
        <button onclick="choose('A1a1')">Usar o mapa para explorar mais</button>
        <button onclick="choose('A1a2')">Guardar os itens e descansar ali</button>
      `;
      break;

    case 'A1a1':
      storyText.textContent = "Seguindo o mapa, você encontra uma trilha que leva até uma clareira com restos de um acampamento antigo. Há uma fogueira apagada e objetos deixados para trás.";
      choices.innerHTML = `
        <button onclick="choose('A1a1a')">Reacender a fogueira</button>
        <button onclick="choose('A1a1b')">Explorar os arredores do acampamento</button>
      `;
      break;

    case 'A1a1a':
      storyText.textContent = "O fogo brilha na noite. Horas depois, o barulho distante de um motor corta o silêncio — um barco passa pela costa, guiado pela luz do fogo.";
      choices.innerHTML = `<p class="final">FINAL: Resgate pela Luz</p>`;
      break;

    case 'A1a1b':
      storyText.textContent = "Ao explorar os arredores, você encontra uma placa enferrujada indicando uma antiga base de pesquisa. Seguindo a trilha, encontra antenas e um transmissor ainda funcional.";
      choices.innerHTML = `<p class="final">FINAL: O Sinal da Esperança</p>`;
      break;

    case 'A1a2':
      storyText.textContent = "Você tenta descansar, mas sons estranhos ecoam da caverna. Quando amanhece, descobre que as pegadas levaram algo embora... talvez o mapa tenha sido uma armadilha.";
      choices.innerHTML = `<p class="final">FINAL: O Mistério da Caverna</p>`;
      break;

    case 'A1b':
      storyText.textContent = "Você acende uma fogueira na entrada. A fumaça sobe e ilumina a noite. De repente, vultos aparecem à distância — parecem nativos observando você.";
      choices.innerHTML = `
        <button onclick="choose('A1b1')">Tentar se comunicar</button>
        <button onclick="choose('A1b2')">Apagar o fogo e se esconder</button>
      `;
      break;

    case 'A1b1':
      storyText.textContent = "Os nativos se aproximam lentamente. Um deles oferece frutas e água. Em troca, eles te guiam até uma aldeia próxima na beira do mar.";
      choices.innerHTML = `<p class="final">FINAL: Resgatado pelos Nativos</p>`;
      break;

    case 'A1b2':
      storyText.textContent = "Você se esconde atrás de rochas, mas os nativos percebem o fogo apagado e partem. Sozinho, você decide seguir em busca de ajuda ao amanhecer.";
      choices.innerHTML = `<p class="final">FINAL: O Sobrevivente Solitário</p>`;
      break;

    case 'A2':
      storyText.textContent = "Você decide continuar andando. O sol está forte, e após horas de caminhada, encontra um pequeno riacho. A água é cristalina e cercada por árvores frutíferas.";
      choices.innerHTML = `
        <button onclick="choose('B')">Beber e procurar comida</button>
        <button onclick="choose('C')">Seguir o curso do riacho</button>
      `;
      break;

    case 'B':
      storyText.textContent = "Você encontra frutas silvestres e decide experimentar algumas. Elas têm um gosto doce e refrescante. Um pouco mais adiante, vê marcas de pegadas recentes.";
      choices.innerHTML = `
        <button onclick="choose('B1')">Seguir as pegadas</button>
        <button onclick="choose('B2')">Ignorar e descansar ali</button>
      `;
      break;

    case 'B1':
      storyText.textContent = "As pegadas levam até uma cabana de madeira desgastada. Dentro, há restos de ferramentas e um diário molhado.";
      choices.innerHTML = `
        <button onclick="choose('B1a')">Ler o diário</button>
        <button onclick="choose('B1b')">Procurar suprimentos</button>
      `;
      break;

    case 'B1a':
      storyText.textContent = "O diário conta a história de um explorador que viveu na ilha e tentou construir um rádio caseiro. Ele deixou coordenadas de uma praia segura.";
      choices.innerHTML = `<p class="final">FINAL: O Legado do Explorador</p>`;
      break;

    case 'B1b':
      storyText.textContent = "Você encontra cordas, lonas e uma faca enferrujada. Com isso, monta um abrigo simples e sobrevive por mais alguns dias, à espera de ajuda.";
      choices.innerHTML = `<p class="final">FINAL: O Sobrevivente Prático</p>`;
      break;

    case 'B2':
      storyText.textContent = "Você descansa perto da água e observa o pôr do sol. Durante a noite, o barulho de tambores distantes ecoa pela floresta. Você não está sozinho...";
      choices.innerHTML = `<p class="final">FINAL: O Som da Selva</p>`;
      break;

    case 'C':
      storyText.textContent = "Você segue o riacho até ele se dividir em dois. Um caminho leva à floresta densa, o outro parece seguir em direção ao mar.";
      choices.innerHTML = `
        <button onclick="choose('C1')">Ir para a floresta</button>
        <button onclick="choose('C2')">Seguir rumo ao mar</button>
      `;
      break;

    case 'C1':
      storyText.textContent = "A floresta é escura e cheia de sons desconhecidos. De repente, o chão cede e você cai em uma caverna subterrânea iluminada por musgos.";
      choices.innerHTML = `<p class="final">FINAL: O Abismo Verde</p>`;
      break;

    case 'C2':
      storyText.textContent = "Seguindo o som das ondas, você chega à praia. Um barco velho está encalhado na areia, ainda com o nome visível: Esperança. Talvez haja combustível.";
      choices.innerHTML = `<p class="final">FINAL: A Fuga da Esperança</p>`;
      break;
  }
}
