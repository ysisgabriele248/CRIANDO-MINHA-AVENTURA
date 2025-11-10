let storyText = document.getElementById("story-text");
let choices = document.getElementById("choices");

function choose(option) {
  switch(option) {

    // Início
    case 'A':
      storyText.textContent = "Você decide procurar abrigo. O sol está forte, e a pele começa a queimar. Após caminhar pela areia, encontra uma formação de rochas que pode servir de proteção contra o vento e a chuva.";
      choices.innerHTML = `
        <button onclick="choose('A1')">Descansar ali</button>
        <button onclick="choose('A2')">Continuar explorando a ilha</button>
      `;
      break;

    case 'B':
      storyText.textContent = "Você decide procurar comida. Há alguns coqueiros próximos, mas escalar pode ser perigoso. O som do mar encobre ruídos vindos da floresta.";
      choices.innerHTML = `
        <button onclick="choose('B1')">Tentar subir no coqueiro</button>
        <button onclick="choose('B2')">Entrar na floresta</button>
      `;
      break;

    // Caminho A — procurar abrigo
    case 'A1':
      storyText.textContent = "Você se abriga entre as rochas. O local é frio, mas protegido. A sede começa a apertar, e você percebe que precisa encontrar água logo.";
      choices.innerHTML = `
        <button onclick="choose('A1a')">Seguir em busca de água</button>
        <button onclick="choose('A1b')">Ficar e tentar recolher água da chuva</button>
      `;
      break;

    case 'A1a':
      storyText.textContent = "Após algumas horas caminhando, você encontra um pequeno riacho. A água parece limpa, mas há folhas e insetos flutuando.";
      choices.innerHTML = `
        <button onclick="choose('A1a1')">Beber assim mesmo</button>
        <button onclick="choose('A1a2')">Ferver a água antes</button>
      `;
      break;

    case 'A1a1':
      storyText.textContent = "Você bebe a água e sente alívio imediato, mas algumas horas depois começa a passar mal. Febre e tontura te impedem de continuar.";
      choices.innerHTML = `<p class="final">FINAL: Doença por Água Contaminada</p>`;
      break;

    case 'A1a2':
      storyText.textContent = "Você faz uma fogueira improvisada e ferve a água. O gosto é amargo, mas você se sente melhor e com forças para continuar a explorar no dia seguinte.";
      choices.innerHTML = `
        <button onclick="choose('A1a2a')">Seguir o riacho</button>
        <button onclick="choose('A1a2b')">Voltar ao abrigo</button>
      `;
      break;

    case 'A1a2a':
      storyText.textContent = "Seguindo o riacho, você chega a uma praia ampla. Ao longe, há destroços do navio — e um rádio parcialmente intacto.";
      choices.innerHTML = `
        <button onclick="choose('A1a2a1')">Tentar consertar o rádio</button>
        <button onclick="choose('A1a2a2')">Procurar comida primeiro</button>
      `;
      break;

    case 'A1a2a1':
      storyText.textContent = "Depois de algumas tentativas, o rádio emite ruídos. Você envia sinais repetidamente até, dias depois, um barco pesqueiro aparecer no horizonte.";
      choices.innerHTML = `<p class="final">FINAL: Resgate Realista — Sinal de Rádio</p>`;
      break;

    case 'A1a2a2':
      storyText.textContent = "Você decide procurar comida antes. Ao voltar, percebe que a maré levou o rádio e parte dos destroços. Agora o resgate ficou muito mais difícil.";
      choices.innerHTML = `<p class="final">FINAL: Oportunidade Perdida</p>`;
      break;

    case 'A1a2b':
      storyText.textContent = "Você volta ao abrigo e consegue sobreviver por mais alguns dias, caçando pequenos caranguejos e armazenando água da chuva.";
      choices.innerHTML = `<p class="final">FINAL: Sobrevivente da Ilha</p>`;
      break;

    case 'A1b':
      storyText.textContent = "Você junta folhas e improvisa um recipiente com pedaços de plástico encontrados na praia. Após algumas horas, a chuva começa leve e te dá água suficiente para mais um dia.";
      choices.innerHTML = `
        <button onclick="choose('A1b1')">Explorar os arredores</button>
        <button onclick="choose('A1b2')">Descansar e economizar energia</button>
      `;
      break;

    case 'A1b1':
      storyText.textContent = "Nos arredores, você encontra restos de um acampamento antigo — cordas, latas vazias e um pedaço de lona. Agora pode construir um abrigo melhor.";
      choices.innerHTML = `<p class="final">FINAL: A Cabana Improvisada</p>`;
      break;

    case 'A1b2':
      storyText.textContent = "Você tenta descansar, mas o vento e o frio da noite são intensos. Ao amanhecer, acorda fraco e com sinais de hipotermia.";
      choices.innerHTML = `<p class="final">FINAL: Hipotermia</p>`;
      break;

    case 'A2':
      storyText.textContent = "Você continua andando pela ilha. Após horas, encontra pegadas humanas recentes. Alguém pode estar por perto.";
      choices.innerHTML = `
        <button onclick="choose('A2a')">Seguir as pegadas</button>
        <button onclick="choose('A2b')">Ignorar e procurar comida</button>
      `;
      break;

    case 'A2a':
      storyText.textContent = "As pegadas levam até uma pequena cabana feita de troncos. Parece abandonada, mas há sinais de que foi usada recentemente.";
      choices.innerHTML = `
        <button onclick="choose('A2a1')">Entrar e procurar suprimentos</button>
        <button onclick="choose('A2a2')">Esperar por quem mora ali</button>
      `;
      break;

    case 'A2a1':
      storyText.textContent = "Você encontra um canivete, uma garrafa d’água e um sinalizador. Dias depois, usa o sinalizador ao ver um avião passando.";
      choices.innerHTML = `<p class="final">FINAL: Resgate pelo Sinalizador</p>`;
      break;

    case 'A2a2':
      storyText.textContent = "Você espera até o entardecer, mas ninguém aparece. Durante a noite, o som de passos te acorda. Pela manhã, tudo está revirado e os suprimentos sumiram.";
      choices.innerHTML = `<p class="final">FINAL: Roubo na Ilha</p>`;
      break;

    // Caminho B — procurar comida
    case 'B1':
      storyText.textContent = "Você tenta subir no coqueiro, mas escorrega e machuca o braço. Apesar da dor, consegue derrubar alguns cocos com um galho.";
      choices.innerHTML = `
        <button onclick="choose('B1a')">Ficar e descansar</button>
        <button onclick="choose('B1b')">Seguir para o interior da ilha</button>
      `;
      break;

    case 'B1a':
      storyText.textContent = "Você se alimenta e bebe água de coco. O corpo relaxa, e você consegue dormir bem pela primeira vez. O dia seguinte traz forças renovadas.";
      choices.innerHTML = `<p class="final">FINAL: Adaptação e Sobrevivência</p>`;
      break;

    case 'B1b':
      storyText.textContent = "O interior da ilha é denso. Você encontra um riacho, mas também ouve sons de animais próximos. É perigoso continuar sozinho.";
      choices.innerHTML = `<p class="final">FINAL: Desaparecido na Floresta</p>`;
      break;

    case 'B2':
      storyText.textContent = "A floresta é úmida e cheia de insetos. Você encontra algumas frutas parecidas com goiabas, mas não tem certeza se são comestíveis.";
      choices.innerHTML = `
        <button onclick="choose('B2a')">Comer as frutas</button>
        <button onclick="choose('B2b')">Evitar e continuar caminhando</button>
      `;
      break;

    case 'B2a':
      storyText.textContent = "As frutas têm um gosto estranho, mas parecem inofensivas. Com energia renovada, você segue até encontrar uma clareira com restos de madeira — talvez possa construir algo.";
      choices.innerHTML = `<p class="final">FINAL: Abrigo Sustentado</p>`;
      break;

    case 'B2b':
      storyText.textContent = "Você caminha por horas sem encontrar nada útil. A fome e o cansaço te fazem desmaiar perto do pôr do sol.";
      choices.innerHTML = `<p class="final">FINAL: Exaustão</p>`;
      break;
  }
}
