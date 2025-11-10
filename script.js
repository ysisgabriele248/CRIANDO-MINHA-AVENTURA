let storyText = document.getElementById("story-text");
let choices = document.getElementById("choices");

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
      storyText.textContent = "O helicóptero te vê acenando e se aproxima lentamente.";
      choices.innerHTML = `<p class="final">FINAL: Resgate Aéreo — Você foi salvo!</p>`;
      break;

    case 'A1a1a2':
      storyText.textContent = "Você tenta acender o fogo, mas a lenha está úmida. O helicóptero se afasta e você perde a chance de ser visto.";
      choices.innerHTML = `<p class="final">FINAL: Isolado — Você sobreviveu, mas o resgate não te encontrou.</p>`;
      break;

    case 'A1a1b':
      storyText.textContent = "Durante a madrugada, ouve passos e se esconde. Um pequeno grupo de pescadores passa pela praia próxima.";
      choices.innerHTML = `
        <button onclick="choose('A1a1b1')">Correr até eles e pedir ajuda</button>
        <button onclick="choose('A1a1b2')">Esperar amanhecer para segui-los</button>
      `;
      break;

    case 'A1a1b1':
      storyText.textContent = "Os pescadores te escutam e te levam para o barco.";
      choices.innerHTML = `<p class="final">FINAL: Resgatado pelos pescadores.</p>`;
      break;

    case 'A1a1b2':
      storyText.textContent = "Ao amanhecer, você segue as pegadas até a praia, mas eles já foram embora. Você continua sozinho, mas mais preparado.";
      choices.innerHTML = `<p class="final">FINAL: Sobrevivente solitário.</p>`;
      break;

    case 'A1a2':
      storyText.textContent = "Você volta para a entrada e decide descansar ali. O vento é forte, mas é mais seguro que o interior da caverna.";
      choices.innerHTML = `
        <button onclick="choose('A1a2a')">Fazer uma fogueira</button>
        <button onclick="choose('A1a2b')">Apenas esperar amanhecer</button>
      `;
      break;

    case 'A1a2a':
      storyText.textContent = "A fumaça da fogueira é vista por um navio distante.";
      choices.innerHTML = `<p class="final">FINAL: Sinal de Esperança — O navio envia uma equipe de busca e te encontra.</p>`;
      break;

    case 'A1a2b':
      storyText.textContent = "Você espera a noite toda em silêncio. Pela manhã, encontra pegadas recentes de alguém que passou por ali.";
      choices.innerHTML = `<p class="final">FINAL: Mistério da Ilha — Você não sabe quem mais está ali, mas sobreviveu mais um dia.</p>`;
      break;

    // Fazer fogo na entrada
    case 'A1b':
      storyText.textContent = "Você acende uma fogueira com cuidado. A fumaça sobe e espanta insetos, mas atrai atenção de longe.";
      choices.innerHTML = `
        <button onclick="choose('A1b1')">Tentar apagar a fogueira e se esconder</button>
        <button onclick="choose('A1b2')">Esperar para ver quem se aproxima</button>
      `;
      break;

    case 'A1b1':
      storyText.textContent = "Você se esconde entre as rochas e observa. É um pequeno grupo de pescadores explorando a costa.";
      choices.innerHTML = `<p class="final">FINAL: Encontro Pacífico — Eles te veem e te levam até o continente.</p>`;
      break;

    case 'A1b2':
      storyText.textContent = "Um grupo de nativos aparece. Eles parecem curiosos, mas não hostis.";
      choices.innerHTML = `
        <button onclick="choose('A1b2a')">Tentar se comunicar</button>
        <button onclick="choose('A1b2b')">Fugir para a floresta</button>
      `;
      break;

    case 'A1b2a':
      storyText.textContent = "Com gestos e calma, você explica sua situação. Eles te levam até um local seguro e compartilham comida.";
      choices.innerHTML = `<p class="final">FINAL: Convívio — Você passa dias com os nativos até ser encontrado por um navio.</p>`;
      break;

    case 'A1b2b':
      storyText.textContent = "Você foge apressado pela mata, mas acaba se perdendo e fica sem direção.";
      choices.innerHTML = `<p class="final">FINAL: Perdido na Floresta — Sua sorte agora depende da natureza.</p>`;
      break;

    // Procurar outro abrigo
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
        <button onclick="choose('A2a2')">Usar a lanterna para explorar a região à noite</button>
      `;
      break;

    case 'A2a1':
      storyText.textContent = "A cabana agora está mais resistente. Você passa a noite e acorda com barulhos de motor no mar.";
      choices.innerHTML = `<p class="final">FINAL: Resgate Marítimo — Um barco percebe sua presença e vem até a costa.</p>`;
      break;

    case 'A2a2':
      storyText.textContent = "Durante a noite, você encontra um pequeno caminho iluminado pela lua, que leva até uma trilha de pesca.";
      choices.innerHTML = `<p class="final">FINAL: Caminho da Esperança — Você segue a trilha e é salvo por pescadores.</p>`;
      break;

    case 'A2b':
      storyText.textContent = "Ao redor da cabana, há marcas de pegadas recentes. Alguém parece ter estado ali há pouco tempo.";
      choices.innerHTML = `<p class="final">FINAL: A Cabana de Alguém — Você decide não entrar e segue pela ilha, ainda sem saber quem mais está ali.</p>`;
      break;

    // Procurar comida
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
      storyText.textContent = "As frutas estavam maduras, mas te causam tontura e náusea.";
      choices.innerHTML = `<p class="final">FINAL: Intoxicação — Você sobrevive, mas passa dias debilitado e fraco.</p>`;
      break;

    case 'B1b':
      storyText.textContent = "Você guarda as frutas e segue explorando. Encontra uma clareira ideal para montar abrigo.";
      choices.innerHTML = `<p class="final">FINAL: Sobrevivente — Com comida e abrigo, você se adapta à ilha e espera o resgate.</p>`;
      break;

    case 'B2':
      storyText.textContent = "Você improvisa uma vara com um galho e tenta pescar.";
      choices.innerHTML = `
        <button onclick="choose('B2a')">Continuar tentando pescar</button>
        <button onclick="choose('B2b')">Desistir e procurar outro alimento</button>
      `;
      break;

    case 'B2a':
      storyText.textContent = "Depois de algum tempo, consegue capturar alguns peixes. Alimentado, decide montar um pequeno acampamento perto do riacho.";
      choices.innerHTML = `<p class="final">FINAL: Vida Selvagem — Você aprende a sobreviver e passa dias em segurança.</p>`;
      break;

    case 'B2b':
      storyText.textContent = "Você não encontra mais nada comestível e a fome começa a apertar.";
      choices.innerHTML = `<p class="final">FINAL: Fraqueza — Sem alimento suficiente, sua sobrevivência fica incerta.</p>`;
      break;
  }
}
