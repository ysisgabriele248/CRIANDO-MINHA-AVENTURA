let storyText = document.getElementById("story-text");
let choices = document.getElementById("choices");

function choose(option) {
  switch(option) {

    // Início
    case 'A':
      storyText.textContent = "Você decide procurar abrigo. O sol está escaldante, e o corpo ainda está cansado do naufrágio. Após caminhar pela areia, avista algumas rochas mais altas próximas à vegetação.";
      choices.innerHTML = `
        <button onclick="choose('A1')">Subir nas rochas para observar o entorno</button>
        <button onclick="choose('A2')">Ir direto para a sombra e descansar</button>
      `;
      break;

    case 'B':
      storyText.textContent = "Você opta por procurar comida. O estômago ronca e a sede aumenta. Há coqueiros próximos e uma área de floresta logo adiante.";
      choices.innerHTML = `
        <button onclick="choose('B1')">Tentar subir em um coqueiro</button>
        <button onclick="choose('B2')">Entrar na floresta</button>
      `;
      break;


    // Caminho A (abrigo)
    case 'A1':
      storyText.textContent = "Do alto das rochas, você observa boa parte da ilha: uma praia extensa, uma floresta densa e uma possível nascente de água ao longe. O calor é intenso.";
      choices.innerHTML = `
        <button onclick="choose('A1a')">Seguir em direção à nascente</button>
        <button onclick="choose('A1b')">Descer e buscar abrigo próximo à praia</button>
      `;
      break;

    case 'A1a':
      storyText.textContent = "Após uma longa caminhada, você encontra um riacho de água doce. Finalmente pode se hidratar. A noite se aproxima, e o vento começa a esfriar.";
      choices.innerHTML = `
        <button onclick="choose('A1a1')">Montar abrigo improvisado perto do riacho</button>
        <button onclick="choose('A1a2')">Voltar para a praia antes de escurecer</button>
      `;
      break;

    case 'A1a1':
      storyText.textContent = "Você usa galhos e folhas para montar um abrigo simples. Durante a noite, ouve sons distantes de animais. Está seguro, mas o medo é constante.";
      choices.innerHTML = `
        <button onclick="choose('A1a1a')">Acender uma fogueira</button>
        <button onclick="choose('A1a1b')">Ficar em silêncio e se esconder</button>
      `;
      break;

    case 'A1a1a':
      storyText.textContent = "A fogueira espanta os animais e traz conforto, mas sua fumaça pode ser vista de longe. Pela manhã, você encontra pegadas humanas perto do riacho.";
      choices.innerHTML = `
        <button onclick="choose('A1a1a1')">Seguir as pegadas</button>
        <button onclick="choose('A1a1a2')">Ignorar e buscar alimentos</button>
      `;
      break;

    case 'A1a1a1':
      storyText.textContent = "As pegadas levam até uma cabana simples. Dentro, há ferramentas e um rádio antigo. Você tenta usá-lo, mas precisa de energia.";
      choices.innerHTML = `
        <button onclick="choose('A1a1a1a')">Tentar consertar o rádio com baterias velhas</button>
        <button onclick="choose('A1a1a1b')">Voltar ao riacho e planejar outro dia</button>
      `;
      break;

    case 'A1a1a1a':
      storyText.textContent = "Após horas de tentativa, o rádio emite um sinal fraco. Você repete a chamada todos os dias até que, após uma semana, ouve uma resposta distante.";
      choices.innerHTML = `<p class="final">FINAL: Resgate Realista — Sinal de Rádio Recebido</p>`;
      break;

    case 'A1a1a1b':
      storyText.textContent = "Você volta ao riacho, mas o rádio quebrou no caminho. Ainda assim, sobrevive caçando peixes e recolhendo água. Nunca é encontrado, mas aprende a viver com a ilha.";
      choices.innerHTML = `<p class="final">FINAL: Isolamento e Sobrevivência</p>`;
      break;

    case 'A1a1a2':
      storyText.textContent = "Você ignora as pegadas e se concentra em caçar. Consegue alguns peixes e frutas. Com o tempo, monta uma rotina estável de sobrevivência.";
      choices.innerHTML = `<p class="final">FINAL: Sobrevivente da Ilha</p>`;
      break;

    case 'A1a1b':
      storyText.textContent = "Você decide se esconder. A noite é longa e fria, e você dorme pouco. Pela manhã, encontra marcas de garras perto do abrigo. Está claro que há predadores por perto.";
      choices.innerHTML = `
        <button onclick="choose('A1a1b1')">Abandonar o abrigo e ir para a praia</button>
        <button onclick="choose('A1a1b2')">Ficar e reforçar o abrigo</button>
      `;
      break;

    case 'A1a1b1':
      storyText.textContent = "Você volta à praia, cansado e com fome. Encontra destroços do navio e alguns pacotes de mantimentos parcialmente molhados. São sua salvação temporária.";
      choices.innerHTML = `
        <button onclick="choose('A1a1b1a')">Montar acampamento ali</button>
        <button onclick="choose('A1a1b1b')">Tentar construir uma jangada</button>
      `;
      break;

    case 'A1a1b1a':
      storyText.textContent = "Você passa os dias vivendo entre os destroços. Com o tempo, consegue caçar e armazenar alimentos. Nunca é resgatado, mas sobrevive por anos.";
      choices.innerHTML = `<p class="final">FINAL: O Náufrago</p>`;
      break;

    case 'A1a1b1b':
      storyText.textContent = "Você tenta construir uma jangada, mas a correnteza é forte. Depois de alguns metros, ela se desfaz. Você volta para a praia exausto e quase se afoga.";
      choices.innerHTML = `<p class="final">FINAL: Tentativa Frustrada de Fuga</p>`;
      break;


    case 'A1a2':
      storyText.textContent = "Você volta à praia antes do pôr do sol. Durante a noite, uma tempestade forte destrói parte do litoral. Ao amanhecer, o mar trouxe destroços e uma caixa fechada.";
      choices.innerHTML = `
        <button onclick="choose('A1a2a')">Abrir a caixa</button>
        <button onclick="choose('A1a2b')">Ignorar e procurar abrigo mais seguro</button>
      `;
      break;

    case 'A1a2a':
      storyText.textContent = "Dentro da caixa há mantimentos e um kit de primeiros socorros. Você usa parte do material e guarda o resto. Dias depois, um navio passa ao longe e você acende uma fogueira.";
      choices.innerHTML = `<p class="final">FINAL: Resgate por Sinal de Fumaça</p>`;
      break;

    case 'A1a2b':
      storyText.textContent = "Você decide deixar a caixa e procurar segurança. Um galho cai durante a tempestade e te fere gravemente na perna. Sem socorro, não resiste por muito tempo.";
      choices.innerHTML = `<p class="final">FINAL: Ferimento Fatal</p>`;
      break;


    // Caminho B (comida)
    case 'B1':
      storyText.textContent = "Você sobe com dificuldade no coqueiro, derruba alguns cocos e bebe a água. O corpo relaxa, mas o braço dói por causa do esforço.";
      choices.innerHTML = `
        <button onclick="choose('B1a')">Descansar e recuperar energia</button>
        <button onclick="choose('B1b')">Seguir para o interior da ilha</button>
      `;
      break;

    case 'B1a':
      storyText.textContent = "Após descansar, você percebe pegadas leves na areia — talvez de alguém que também sobreviveu ao naufrágio.";
      choices.innerHTML = `
        <button onclick="choose('B1a1')">Seguir as pegadas</button>
        <button onclick="choose('B1a2')">Ignorar e procurar abrigo</button>
      `;
      break;

    case 'B1a1':
      storyText.textContent = "As pegadas levam até uma fogueira apagada. Há restos de peixe e uma garrafa. Parece recente.";
      choices.innerHTML = `
        <button onclick="choose('B1a1a')">Ficar e esperar a pessoa voltar</button>
        <button onclick="choose('B1a1b')">Pegar os itens e continuar</button>
      `;
      break;

    case 'B1a1a':
      storyText.textContent = "Você espera o dia todo, mas ninguém aparece. À noite, ouve passos e acorda com alguém te observando. É outro sobrevivente, assustado, mas humano.";
      choices.innerHTML = `<p class="final">FINAL: Sobrevivência em Dupla</p>`;
      break;

    case 'B1a1b':
      storyText.textContent = "Você pega os itens e segue pela costa. Dias depois, encontra uma área segura e sobrevive pescando e armazenando alimentos.";
      choices.innerHTML = `<p class="final">FINAL: O Pescador Solitário</p>`;
      break;

    case 'B1b':
      storyText.textContent = "A floresta é úmida e densa. Você encontra frutas desconhecidas e ouve o som de um riacho.";
      choices.innerHTML = `
        <button onclick="choose('B1b1')">Seguir o som da água</button>
        <button onclick="choose('B1b2')">Comer as frutas</button>
      `;
      break;

    case 'B1b1':
      storyText.textContent = "O riacho é limpo e refrescante. Você bebe um pouco e monta um abrigo próximo. Aos poucos, adapta-se ao ambiente.";
      choices.innerHTML = `<p class="final">FINAL: Vida Selvagem</p>`;
      break;

    case 'B1b2':
      storyText.textContent = "As frutas parecem boas, mas horas depois você sente náusea e febre. Sem ajuda, acaba sucumbindo à intoxicação.";
      choices.innerHTML = `<p class="final">FINAL: Intoxicação Alimentar</p>`;
      break;


    case 'B2':
      storyText.textContent = "A floresta é escura e cheia de insetos. Você caminha com cuidado até encontrar uma clareira com galhos secos e restos de madeira.";
      choices.innerHTML = `
        <button onclick="choose('B2a')">Montar abrigo aqui</button>
        <button onclick="choose('B2b')">Procurar um rio próximo</button>
      `;
      break;

    case 'B2a':
      storyText.textContent = "Você monta um abrigo e faz uma fogueira. O fogo afasta os mosquitos e dá sensação de segurança.";
      choices.innerHTML = `
        <button onclick="choose('B2a1')">Explorar no dia seguinte</button>
        <button onclick="choose('B2a2')">Ficar por alguns dias</button>
      `;
      break;

    case 'B2a1':
      storyText.textContent = "No dia seguinte, você encontra uma trilha aberta. Ela leva até um acampamento antigo com restos de barracas e utensílios.";
      choices.innerHTML = `<p class="final">FINAL: O Último Acampamento</p>`;
      break;

    case 'B2a2':
      storyText.textContent = "Você decide ficar no mesmo lugar. Com o tempo, aprende a caçar pequenos animais e viver da natureza.";
      choices.innerHTML = `<p class="final">FINAL: Sobrevivente Natural</p>`;
      break;

    case 'B2b':
      storyText.textContent = "Você segue em busca de um rio. Depois de horas, encontra uma nascente, mas é picado por um inseto venenoso no caminho.";
      choices.innerHTML = `<p class="final">FINAL: Envenenamento</p>`;
      break;
  }
}
