const fullText = `eu nem sabia direito como fazer isso aqui… mas queria fazer algo diferente pra vc princesa, então decidi fazer uma carta te falando tudo que nunca consegui
eu vou confiar em vc pra contar tudo q passa na minha mente…

tem muita coisa que eu simplesmente não sei falar direito quando a gente tá conversando
mas mesmo assim eu sinto tudo
às vezes até mais do que eu consigo mostrar

eu lembro de várias coisas nossas do nada
momentos simples mesmo
e fico pensando o quanto isso tudo virou importante pra mim

às vezes eu fico meio perdido
com medo, com dúvida, com um monte de coisa na cabeça
mas mesmo assim… eu continuo aqui
e não é por acaso

1 ano contigo não foi pouco pra mim
foi o suficiente pra eu perceber que eu realmente quero continuar
mesmo com tudo, mesmo nos dias difíceis

eu não sou perfeito, nem sempre sei demonstrar oq passa na minha cabeça
mas eu tô aqui, de verdade.

as vezes eu fico vendo suas fotos, as q eu tenho, as q vc me manda.. e eu simplesmente choro, eu não sei explicar qual é esse sentimento, eu só sei q ver vc me faz bem, aquele choro me alivia de dores que eu venho guardando só pra mim...

Eu já senti ciúmes de vc princesa, eu n lembro direito que dia e como foi, eu sei que simplesmente eu fiquei com raiva e me senti como se alguém fosse tomar vc de mim... é meio idiota isso, eu percebi logo dps e fiquei em paz pq sei q vc me ama..

ás vezes que parecem que eu tô seco ou que eu to distante... é pq eu to em conflito cmg mesmo na minha cabeça. Eu n qr falar e nem ouvir nesses momentos, por isso posso ficar distante sem perceber.. más se vc só me faz companhia.. princesa vc faz meu dia.

eu penso demais e eu já pensei como seria minha vida sem vc, eu já sonhei com isso tbm e é muito horrível a sensação eu chorei horrores dps de sonhar isso pq foi tão real.. doeu mt, eu sei q parece tosco, mas é isso que passa na minha cabeça.

Quando vc n faz questão de entender oq eu faço ou oq eu gosto.. me sinto como se eu tivesse sozinho ali.. pq eu tento entender vc.. eu assisti um anime inteiro só pq vc falou q amava dms. más vc se esforça muito, por isso nunca te falei isso. é algo que não é preciso falar.

na escola quando eu falava com vc pessoalmente, vc n se expressava nem um pouco, isso doía bastante em mim pq vc n falava direito cmg.. eu tava lá tentando e vc..nd. más eu entendo seu lado kk não é fácil se expressar quando nunca teve isso direito.

Seu jeito eu não sei explicar más seu jeito simplesmente me acalma... seu jeitinho de ser é tão confortável, é incrível como quando vc quer falar algo e não consegue, eu consigo perceber..não sei como explicar isso mas vc tem um jeito único pra isso kk

teve várias vezes que eu inventei uma mini história só pra vc se sentir confortável para falar sobre tal assunto, não é fácil vc se expressar e eu gosto de colocar eu no meio pra abri espaço pra vc conseguir se expressar e se sentir confortável cmg.

Quando vc tava se maquiando e se arrumando e me mandando foto e td, simplesmente n sei explicar o quanto foi bom.. vc nunca se sentiu tão confortável para fazer isso e quando fez...é algo que eu me importo bastante pq vc tá confiando em mim ainda mais.

Quando vc me dava carinho na cabeça kkk era tããããããããooo bom... e quando vc abraça por trás.. slk.

No dia em que nós fomos para diretoria, eu tava com muito, muito medo.. mas como vc tava cmg eu tinha que proteger vc, então eu falei e muito... e então eu entrei no modo super protetor e dps de conseguir explicar td.. o medo que eu tava foi passando, mas oq eu mais queria naquele momento era abraçar vc pq vc tava tão assustada...

Quando conheci tua mãe e o resto da tua família, aquilo na minha cabeça era algo que significa muito pq dês de pequeno aprendi que isso significa algo raro.. então eu tenho que fazer td certo, mesmo longe de vc ou dos seus pais, a partir aquele momento eu n podia mais fazer besteiras. eu acabei fazendo...

Quando pedi pra terminar, qualquer uma as vezes, n foi eu falando, e sim o impulso achando que vai ser melhor pra vc. eu todos os dias penso em escolhas boas para vc, eu acabo fazendo muita besteira e eu sei.. é algo que tenho que melhorar más.. a sensação de que talvez eu não tenha vc no futuro e no presente me deixou muito mal. eu decidi procurar psicologa  dps disso e ela me fez ver que eu tava fazendo a pior escolha da minha vida. desde aquela primeira conversa ctg eu nunca mais tenho dormido de noite não por medo e sim pq todas as noites minha cabeça me auto cobra por td q fiz e principalmente ctg. e eu errei nisso… mas hoje eu sei que te perder seria a pior coisa que eu poderia deixar acontecer...

Eu penso no futuro e penso em alguns casos com vc, eu tenho planos e um deles é chamar realmente vc para morar cmg, isso é um futuro distante.

eu poderia falar muito mais coisas más é difícil de escrever tudo que penso..o mais importante princesa é vc pra mim, às vezes eu filtro algumas coisas porque não quero te machucar ou te deixar insegura… mas o que realmente importa eu sempre vou te falar.

ficar do seu lado mesmo sem assunto...isso me deixa calmo e um jeito que eu não sei descrever.. isso é muito bom, vc me traz conforto, meu porto seguro.

Eu n consigo te falar tudo que passa na minha cabeça más oq eu sempre vou falar e sempre vai ser real é que eu quero continuar contigo
n só agora, mas em tudo que ainda vem pela frente

então…
vc continua comigo?
porque eu quero continuar com vc.`;

const parts = fullText.split("\n\n");
let index = 0;

const textEl = document.getElementById("text");
const btn = document.getElementById("btn");

function showNext() {
  textEl.style.opacity = 0;

  setTimeout(() => {
    if (index < parts.length) {
      textEl.textContent = parts[index];
      textEl.style.opacity = 1;
      index++;
    } else {
      textEl.innerHTML = "<div class='final'>amo vc princesa â¤ï¸</div>";
      btn.style.display = "none";
    }
  }, 1);
}

btn.addEventListener("click", showNext);

showNext();
