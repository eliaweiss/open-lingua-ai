// const phrases = [
//   {
//     target: "noventa e oito mil, setecentos e sessenta e cinco",
//     src: "98765",
//   },
//   { target: "Qual, nome 1?", src: "What is your name?" },
// ];

const phrases = [
  { pt: "Olá, como você está?", en: "Hi, how are you?" },
  {
    pt: "Bom dia, prazer em conhecê-lo.",
    en: "Good morning, nice to meet you.",
  },
  { pt: "Obrigado por sua ajuda.", en: "Thank you for your help." },
  { pt: "Até logo!", en: "See you later!" },
  { pt: "Eu gostaria de um café.", en: "I would like a coffee." },
  { pt: "Eu moro no Brasil.", en: "I live in Brazil." },
  { pt: "Gosto de estudar línguas.", en: "I like to study languages." },
  { pt: "Eu estou com fome.", en: "I am hungry." },
  { pt: "Hoje é um dia bonito.", en: "Today is a beautiful day." },
  { target: "Qual é o seu nome?", src: "What is your name?" },
  { target: "Qual é a sua idade?", src: "How old are you?" },
  { target: "Qual é a sua profissão?", src: "What is your profession?" },
  { target: "Qual é o seu endereço?", src: "What is your address?" },
  {
    target: "Qual é o seu número de telefone?",
    src: "What is your phone number?",
  },
  { target: "Qual é a sua nacionalidade?", src: "What is your nationality?" },
  {
    target: "Qual é o seu time de futebol favorito?",
    src: "What is your favorite soccer team?",
  },
  { target: "Qual é a data de hoje?", src: "What is today's date?" },
  {
    target: "Qual é o seu filme favorito?",
    src: "What is your favorite movie?",
  },
  {
    target: "Qual é a sua comida favorita?",
    src: "What is your favorite food?",
  },
  { target: "Onde você mora?", src: "Where do you live?" },
  { target: "Onde você trabalha?", src: "Where do you work?" },
  { target: "Onde está o banheiro?", src: "Where is the bathroom?" },
  {
    target: "Onde fica a estação de trem?",
    src: "Where is the train station?",
  },
  { target: "Onde você nasceu?", src: "Where were you born?" },
  { target: "Onde está o restaurante?", src: "Where is the restaurant?" },
  {
    target: "Onde está o supermercado mais próximo?",
    src: "Where is the nearest supermarket?",
  },
  { target: "Onde você estudou?", src: "Where did you study?" },
  { target: "Onde está o ponto de ônibus?", src: "Where is the bus stop?" },
  { target: "Onde você estava ontem?", src: "Where were you yesterday?" },
  { target: "Meu nome é João.", src: "My name is João." },
  { target: "Eu tenho 25 anos.", src: "I am 25 years old." },
  { target: "Eu sou engenheiro.", src: "I am an engineer." },
  {
    target: "Meu endereço é Rua das Flores, 123.",
    src: "My address is 123 Flowers Street.",
  },
  {
    target: "Meu número de telefone é, (11) 98765-4321.",
    src: "My phone number is (11) 98765-4321.",
  },
  {
    target: "Meu time de futebol favorito é o Flamengo.",
    src: "My favorite soccer team is Flamengo.",
  },
  { target: "Hoje é 11 de junho de 2024.", src: "Today is June 11, 2024." },
  {
    target: 'Meu filme favorito é "O Poderoso Chefão".',
    src: 'My favorite movie is "The Godfather".',
  },
  {
    target: "Minha comida favorita é pizza.",
    src: "My favorite food is pizza.",
  },
  { target: "Eu moro em São Paulo.", src: "I live in São Paulo." },
  { target: "Eu trabalho em um escritório.", src: "I work in an office." },
  { target: "O banheiro está ali.", src: "The bathroom is over there." },
  {
    target: "A estação de trem fica na próxima rua.",
    src: "The train station is on the next street.",
  },
  {
    target: "Eu nasci em Rio de Janeiro.",
    src: "I was born in Rio de Janeiro.",
  },
  {
    target: "O restaurante está na esquina.",
    src: "The restaurant is on the corner.",
  },
  {
    target: "O supermercado mais próximo está a duas quadras daqui.",
    src: "The nearest supermarket is two blocks away.",
  },
  {
    target: "Eu estudei na Universidade de São Paulo.",
    src: "I studied at the University of São Paulo.",
  },
  {
    target: "O ponto de ônibus está naquela direção.",
    src: "The bus stop is in that direction.",
  },
  { target: "Eu estava em casa ontem.", src: "I was at home yesterday." },
  { target: "Quanto custa isso?", src: "How much does this cost?" },
  { target: "Eu não entendo.", src: "I don't understand." },
  { target: "Você fala inglês?", src: "Do you speak English?" },
  { target: "Eu preciso de um médico.", src: "I need a doctor." },
  { target: "Onde fica o hotel?", src: "Where is the hotel?" },
  { target: "Pode repetir, por favor?", src: "Can you repeat, please?" },
  { target: "A escola fica perto daqui", src: "The school is near here" },
  { target: "Ele vai ficar em casa hoje", src: "He will stay at home today" },
  { target: "Fique aqui enquanto eu saio", src: "Stay here while I go out" },
  {
    target: "Ele ficou triste com a notícia",
    src: "He became sad with the news",
  },
  { target: "O tempo ficou quente", src: "The weather became hot" },
  {
    target: "Eu gostaria de uma mesa para duas pessoas.",
    src: "I would like a table for two, please.",
  },
  {
    target: "Qual é o horário de funcionamento?",
    src: "What are the opening hours?",
  },
  { target: "Posso pagar com cartão?", src: "Can I pay with a card?" },
  {
    target: "Claro, estou aqui para ajudar.",
    src: "Of course, I'm here to help.",
  },
  { target: "Isso custa R$ 20.", src: "That costs $20." },
  {
    target: "Você pode explicar de forma diferente?",
    src: "Can you explain it differently?",
  },
  {
    target: "Sim, eu falo inglês fluentemente.",
    src: "Yes, I speak English fluently.",
  },
  {
    target: "Vou chamar um médico imediatamente.",
    src: "I will call a doctor immediately.",
  },
  {
    target: "O hotel fica na rua principal.",
    src: "The hotel is on the main street.",
  },
  { target: "Claro, eu posso repetir.", src: "Sure, I can repeat." },
  {
    target: "Certamente, vou providenciar uma mesa para duas pessoas.",
    src: "Certainly, I will arrange a table for two.",
  },
  {
    target: "Estamos abertos das 9h às 18h, de segunda a sexta-feira.",
    src: "We are open from 9am to 6pm, Monday to Friday.",
  },
  {
    target: "Sim, aceitamos cartões de crédito e débito.",
    src: "Yes, we accept credit and debit cards.",
  },
  {
    target: "um dois três quatro cinco seis sete oito nove dez",
    src: "count 1 to 10",
  },
  {
    target:
      "onze doze treze quatorze quinze dezesseis dezessete dezoito dezenove vinte",
    src: "count 11 to 20",
  },
  {
    target:
      "domingo segunda-feira terça-feira quarta-feira quinta-feira sexta-feira sábado",
    src: "days of week",
  },
  {
    target:
      "janeiro fevereiro março abril maio junho julho agosto setembro outubro novembro dezembro",
    src: "name of months",
  },
  { target: "Como você se chama?", src: "What is your name?" },
  { target: "Prazer em conhecê-lo.", src: "Nice to meet you." },
  { target: "Posso te fazer uma pergunta?", src: "Can I ask you a question?" },
  {
    target: "Desculpe, como faço para chegar ao parque?",
    src: "Excuse me, how do I get to the park?",
  },
  {
    target: "Quanto custa um celular?",
    src: "How much does a cell phone cost?",
  },
  {
    target: "Onde posso encontrar chocolate?",
    src: "Where can I find chocolate?",
  },
  { target: "Você sabe que horas são?", src: "Do you know what time it is?" },
  { target: "Que dia é hoje?", src: "What day is it today?" },
  { target: "Onde fica o banheiro?", src: "Where is the bathroom?" },
  { target: "Posso usar o seu Wi-Fi?", src: "Can I use your Wi-Fi?" },
  { target: "Onde posso comer algo?", src: "Where can I eat something?" },
  { target: "De nada.", src: "You're welcome." },
  { target: "Não sei.", src: "I don't know." },
  { target: "Posso te ajudar?", src: "Can I help you?" },
  { target: "Fale mais devagar.", src: "Speak more slowly." },
  { target: "Não entendi.", src: "I didn't understand." },
  {
    target: "Você pode me recomendar um livro?",
    src: "Can you recommend a book to me?",
  },
  { target: "Você tem uma xícara de chá?", src: "Do you have a cup of tea?" },
  { target: "Eu quero uma fatia de bolo.", src: "I want a slice of cake." },
  {
    target: "Preciso de uma carona para o aeroporto.",
    src: "I need a ride to the airport.",
  },
  { target: "Posso entrar?", src: "May I come in?" },
  { target: "Posso sentar aqui?", src: "May I sit here?" },
  { target: "Você está ocupado?", src: "Are you busy?" },
  { target: "Posso te fazer companhia?", src: "Can I join you?" },
  {
    target: "Posso pegar emprestado seu carro?",
    src: "Can I borrow your car?",
  },
  { target: "Posso usar seu telefone?", src: "Can I use your phone?" },
  { target: "Posso abrir a janela?", src: "Can I open the window?" },
  {
    target: "Posso falar com o gerente?",
    src: "Can I speak with the manager?",
  },
  { target: "Posso tirar uma foto?", src: "Can I take a picture?" },
  { target: "Posso levar isso?", src: "Can I take this?" },
  {
    target: "Será que eu posso te ajudar?",
    src: "I wonder if I can help you?",
  },
  {
    target: "Você me permite pegar emprestado seu carro?",
    src: "Do you allow me to borrow your car?",
  },
  {
    target:
      "dez vinte trinta quarenta cinquenta sessenta setenta oitenta noventa cem",
    src: "count 10 to 100",
  },

  { target: "É possível eu entrar?", src: "Is it possible for me to come in?" },
  {
    target: "Tem como eu sentar aqui?",
    src: "Is there a way for me to sit here?",
  },
  {
    target: "Será que eu posso usar seu telefone?",
    src: "I wonder if I can use your phone?",
  },
  {
    target: "Você me permite abrir a janela?",
    src: "Do you allow me to open the window?",
  },
  {
    target: "É possível eu falar com o gerente?",
    src: "Is it possible for me to speak with the manager?",
  },
  {
    target: "Tem como eu pagar com cartão?",
    src: "Is there a way for me to pay with a card?",
  },
  {
    target: "Será que eu posso tirar uma foto?",
    src: "I wonder if I can take a picture?",
  },
  {
    target: "Você me permite levar isso?",
    src: "Do you allow me to take this?",
  },
  { target: "Você pode me ajudar?", src: "Can you help me?" },
  {
    target: "Você pode falar mais devagar?",
    src: "Can you speak more slowly?",
  },
  { target: "Você pode me dar uma carona?", src: "Can you give me a ride?" },
  {
    target: "Você pode me emprestar um livro?",
    src: "Can you lend me a book?",
  },
  { target: "Você pode abrir a porta?", src: "Can you open the door?" },
  { target: "Você pode fechar a janela?", src: "Can you close the window?" },
  { target: "Você pode me dizer as horas?", src: "Can you tell me the time?" },
  {
    target: "Você pode me mostrar o caminho?",
    src: "Can you show me the way?",
  },
  {
    target: "Você pode me enviar o documento?",
    src: "Can you send me the document?",
  },
  {
    target: "Você pode repetir a pergunta?",
    src: "Can you repeat the question?",
  },
  {
    target: "Como faço para chegar ao centro da cidade?",
    src: "How do I get to the city center?",
  },
  {
    target: "Onde fica a estação de metrô mais próxima?",
    src: "Where is the nearest subway station?",
  },
  {
    target: "Siga em frente e vire à esquerda.",
    src: "Go straight ahead and turn left.",
  },
  {
    target: "A farmácia fica ao lado do supermercado.",
    src: "The pharmacy is next to the supermarket.",
  },
  {
    target: "Você pode me mostrar no mapa?",
    src: "Can you show me on the map?",
  },
  {
    target: "O hotel fica a duas quadras daqui.",
    src: "The hotel is two blocks from here.",
  },
  {
    target: "Atravesse a rua e continue reto.",
    src: "Cross the street and keep going straight.",
  },
  {
    target: "A estação de trem fica à direita depois do parque.",
    src: "The train station is to the right after the park.",
  },
  { target: "Onde posso pegar um táxi?", src: "Where can I get a taxi?" },
  {
    target: "O banco fica em frente à praça.",
    src: "The bank is in front of the square.",
  },
  { target: "Qual é o prato do dia?", src: "What is the dish of the day?" },
  {
    target: "Eu gostaria de uma salada, por favor.",
    src: "I would like a salad, please.",
  },
  {
    target: "Você tem opções vegetarianas?",
    src: "Do you have vegetarian options?",
  },
  { target: "Essa sopa está deliciosa!", src: "This soup is delicious!" },
  {
    target: "Posso ver o cardápio, por favor?",
    src: "Can I see the menu, please?",
  },
  {
    target: "Eu quero um café sem açúcar.",
    src: "I want a coffee without sugar.",
  },
  {
    target: "O que você recomenda para sobremesa?",
    src: "What do you recommend for dessert?",
  },
  {
    target: "O frango grelhado vem com quais acompanhamentos?",
    src: "What sides come with the grilled chicken?",
  },
  { target: "Eu sou alérgico a amendoim.", src: "I am allergic to peanuts." },
  { target: "A conta, por favor.", src: "The check, please." },
  {
    target: "Com licença, onde fica o banheiro?",
    src: "Excuse me, where is the bathroom?",
  },
  {
    target: "Com licença, você pode repetir, por favor?",
    src: "Excuse me, can you repeat that, please?",
  },
  {
    target: "Com licença, posso passar?",
    src: "Excuse me, can I pass through?",
  },
  {
    target: "Com licença, há Wi-Fi disponível aqui?",
    src: "Excuse me, is there Wi-Fi available here?",
  },
  {
    target: "Com licença, este lugar está ocupado?",
    src: "Excuse me, is this seat taken?",
  },
  {
    target: "Com licença, você pode me dizer como chegar à estação de trem?",
    src: "Excuse me, can you tell me how to get to the train station?",
  },
  {
    target: "Com licença, onde posso encontrar um caixa eletrônico?",
    src: "Excuse me, where can I find an ATM?",
  },
  {
    target: "Com licença, você pode me emprestar um lápis?",
    src: "Excuse me, can you lend me a pencil?",
  },

  { target: "Olá, como você está?", src: "Hello, how are you?" },
  {
    target: "Bom dia! Espero que você tenha um ótimo dia.",
    src: "Good morning! I hope you have a great day.",
  },
  {
    target: "Boa tarde, vamos tomar um café?",
    src: "Good afternoon, shall we have a coffee?",
  },
  {
    target: "Boa noite, durma bem e sonhe com os anjos.",
    src: "Good night, sleep well and dream with the angels.",
  },
  {
    target: "Como vai? Faz tempo que não nos vemos!",
    src: "How are you? Long time no see!",
  },
  { target: "Tudo bem, e com você?", src: "Everything is fine, and with you?" },
  {
    target: "Obrigado por me ajudar com a mudança.",
    src: "Thank you for helping me with the move.",
  },
  {
    target: "Obrigada pela sua generosidade.",
    src: "Thank you for your generosity.",
  },
  { target: "Por favor, me passe o sal.", src: "Please, pass me the salt." },
  {
    target: "Desculpe pelo atraso, o trânsito estava horrível.",
    src: "Sorry for being late, the traffic was terrible.",
  },
  { target: "Eu só preciso de um minuto.", src: "I just need one minute." },
  {
    target: "Eu tenho dois cachorros e um gato.",
    src: "I have two dogs and one cat.",
  },
  {
    target: "Três amigos vieram me visitar ontem.",
    src: "Three friends came to visit me yesterday.",
  },
  {
    target: "Quatro estações formam um ano.",
    src: "Four seasons make a year.",
  },
  {
    target: "Cinco estrelas brilham no céu.",
    src: "Five stars shine in the sky.",
  },
  { target: "Ele comprou seis livros novos.", src: "He bought six new books." },
  {
    target: "Sete dias se passaram desde que nos vimos.",
    src: "Seven days have passed since we last saw each other.",
  },
  {
    target: "Oito horas é o horário de início da aula.",
    src: "Eight o'clock is the start time of the class.",
  },
  {
    target: "Nove vidas tem um gato, dizem.",
    src: "A cat has nine lives, they say.",
  },
  {
    target: "Eu tenho dez dedos nas mãos.",
    src: "I have ten fingers on my hands.",
  },
  {
    target: "Na segunda-feira começo minha nova dieta.",
    src: "On Monday I start my new diet.",
  },
  {
    target: "Terça-feira é dia de cinema com os amigos.",
    src: "Tuesday is movie day with friends.",
  },
  {
    target: "Na quarta-feira temos uma reunião importante.",
    src: "On Wednesday we have an important meeting.",
  },
  {
    target: "Quinta-feira é meu dia favorito da semana.",
    src: "Thursday is my favorite day of the week.",
  },
  {
    target: "Sexta-feira à noite vou sair para jantar.",
    src: "Friday night I'm going out for dinner.",
  },
  {
    target: "Sábado é dia de descansar e relaxar.",
    src: "Saturday is a day to rest and relax.",
  },
  {
    target: "Domingo vamos fazer um piquenique no parque.",
    src: "Sunday we are going to have a picnic in the park.",
  },
  {
    target: "Eu sou feliz quando estou na praia.",
    src: "I am happy when I am at the beach.",
  },
  {
    target: "Eu estou cansado depois de um longo dia de trabalho.",
    src: "I am tired after a long day at work.",
  },
  {
    target: "Eu tenho um carro vermelho que adoro dirigir.",
    src: "I have a red car that I love to drive.",
  },
  {
    target: "Eu faço bolos deliciosos para festas.",
    src: "I make delicious cakes for parties.",
  },
  {
    target: "Eu vou à escola todos os dias de bicicleta.",
    src: "I go to school every day by bike.",
  },
  {
    target: "Eu posso cantar em português e inglês.",
    src: "I can sing in Portuguese and English.",
  },
  {
    target: "Eu vejo o pôr do sol da minha varanda.",
    src: "I see the sunset from my balcony.",
  },
  {
    target: "Eu ouço música clássica enquanto estudo.",
    src: "I listen to classical music while I study.",
  },
  {
    target: "Eu falo português fluentemente e estou aprendendo francês.",
    src: "I speak Portuguese fluently and am learning French.",
  },
  {
    target: "Minha casa é pequena, mas muito aconchegante.",
    src: "My house is small but very cozy.",
  },
  {
    target: "Meu carro azul é o mais rápido da rua.",
    src: "My blue car is the fastest on the street.",
  },
  {
    target: "A escola está cheia de alunos animados.",
    src: "The school is full of excited students.",
  },
  {
    target: "Eu amo meu trabalho porque é desafiador e gratificante.",
    src: "I love my job because it is challenging and rewarding.",
  },
  {
    target: "Minha família é muito unida e amorosa.",
    src: "My family is very close-knit and loving.",
  },
  {
    target: "Meu amigo e eu gostamos de jogar futebol aos finais de semana.",
    src: "My friend and I like to play soccer on weekends.",
  },
  {
    target: "Comida caseira é sempre a melhor.",
    src: "Homemade food is always the best.",
  },
  {
    target: "Eu bebo água fresca da nascente.",
    src: "I drink fresh spring water.",
  },
  {
    target: "Ele ganhou muito dinheiro com seu novo negócio.",
    src: "He made a lot of money with his new business.",
  },
  {
    target: "O carro esportivo vermelho é impressionante.",
    src: "The red sports car is impressive.",
  },
  {
    target: "O céu azul claro estava sem nuvens.",
    src: "The light blue sky was cloudless.",
  },
  {
    target: "A floresta verdejante é um refúgio tranquilo.",
    src: "The lush green forest is a tranquil retreat.",
  },
  {
    target: "As flores amarelas iluminam o jardim.",
    src: "The yellow flowers brighten the garden.",
  },
  {
    target: "A noite estava tão escura quanto preta.",
    src: "The night was as dark as black.",
  },
  {
    target: "A neve branca cobriu toda a cidade.",
    src: "The white snow covered the entire city.",
  },
  {
    target: "Eu adoro comer pão fresco de manhã.",
    src: "I love eating fresh bread in the morning.",
  },
  {
    target: "Eu tomo um copo de leite todas as noites.",
    src: "I have a glass of milk every night.",
  },
  {
    target: "Eu não consigo começar o dia sem uma xícara de café.",
    src: "I can't start the day without a cup of coffee.",
  },
  {
    target: "O queijo francês é o meu favorito.",
    src: "French cheese is my favorite.",
  },
  {
    target: "Frango assado é perfeito para o jantar.",
    src: "Roast chicken is perfect for dinner.",
  },
  {
    target: "Eu prefiro peixe grelhado ao invés de frito.",
    src: "I prefer grilled fish over fried.",
  },
  {
    target: "Uma maçã por dia mantém o médico longe.",
    src: "An apple a day keeps the doctor away.",
  },
  {
    target: "Bananas são ótimas para um lanche rápido.",
    src: "Bananas are great for a quick snack.",
  },
  {
    target: "Meu pai me ensinou a andar de bicicleta.",
    src: "My father taught me how to ride a bike.",
  },
  {
    target: "Minha mãe faz o melhor bolo de chocolate.",
    src: "My mother makes the best chocolate cake.",
  },
  {
    target: "Meu irmão mais novo adora videogames.",
    src: "My younger brother loves video games.",
  },
  {
    target: "Minha irmã mais velha é uma excelente pianista.",
    src: "My older sister is an excellent pianist.",
  },
  {
    target: "Meu avô sempre conta histórias fascinantes.",
    src: "My grandfather always tells fascinating stories.",
  },
  {
    target: "Minha avó cozinha pratos deliciosos.",
    src: "My grandmother cooks delicious dishes.",
  },
  {
    target: "Meu tio é um talentoso artista.",
    src: "My uncle is a talented artist.",
  },
  {
    target: "Minha tia tem uma loja de roupas elegante.",
    src: "My aunt owns a stylish clothing store.",
  },
  {
    target: "Vamos nos encontrar amanhã para discutir o projeto.",
    src: "Let’s meet tomorrow to discuss the project.",
  },
  {
    target: "Amanhã será um novo dia, cheio de possibilidades.",
    src: "Tomorrow will be a new day, full of possibilities.",
  },
  {
    target: "Eu vou começar minha nova rotina de exercícios amanhã.",
    src: "I will start my new exercise routine tomorrow.",
  },
  {
    target: "Amanhã, a previsão do tempo diz que vai chover.",
    src: "Tomorrow, the weather forecast says it will rain.",
  },
  {
    target: "Não se preocupe, vamos resolver isso amanhã.",
    src: "Don’t worry, we’ll sort this out tomorrow.",
  },
  {
    target: "A festa de aniversário é amanhã à noite.",
    src: "The birthday party is tomorrow night.",
  },
  {
    target: "Vou terminar de ler este livro amanhã.",
    src: "I will finish reading this book tomorrow.",
  },
  {
    target: "Amanhã é o último dia para se inscrever no curso.",
    src: "Tomorrow is the last day to register for the course.",
  },
  {
    target: "Amanhã vou visitar meus avós no campo.",
    src: "Tomorrow I will visit my grandparents in the countryside.",
  },
  {
    target: "Nós vamos começar o projeto amanhã de manhã.",
    src: "We will start the project tomorrow morning.",
  },
  {
    target: "Maioria das ondas formada pelos ver a força do vento",
    src: "Most waves formed by the force of the wind.",
  },
  {
    target: "Manda as imagens e sons pelo ar.",
    src: "sends images and sounds through the air.",
  },
  {
    target:
      "Se tiver mais alguma dúvida ou quiser saber mais sobre qualquer coisa, é só falar!",
    src: "If you have any further questions or want to know more about anything, just ask!",
  },
  {
    target: "As imagens que você vê e os sons que você ouve",
    src: "the images you see and the sounds you hear.",
  },
  {
    target: "Bilhete, por favor",
    src: "Ticket, please",
  },
  {
    target:
      'Você pode comprar a passagem na rodoviária, procure a placa que diz "Bilhete" ou "Guichê"',
    src: "You can buy a ticket at the bus station, look for the sign that says Ticket or Counter",
  },

  {
    target: "Como posso chegar ao aeroporto?",
    src: "How can I get to the airport?",
  },
  {
    target: "Você tem algum livro de ficção científica?",
    src: "Do you have any science fiction books?",
  },
  {
    target: "O que você acha desta situação?",
    src: "What do you think about this situation?",
  },
  {
    target: "Podemos nos encontrar na praça?",
    src: "Can we meet at the square?",
  },
  {
    target: "Quando começa a apresentação?",
    src: "When does the presentation start?",
  },
  {
    target: "Eu perdi minha carteira, você pode me ajudar?",
    src: "I lost my wallet, can you help me?",
  },
  {
    target: "Quanto tempo leva para fazer esse prato?",
    src: "How long does it take to make this dish?",
  },
  { target: "Onde posso comprar selos?", src: "Where can I buy stamps?" },
  {
    target: "Você sabe onde fica a livraria?",
    src: "Do you know where the bookstore is?",
  },
  { target: "A que horas o banco abre?", src: "What time does the bank open?" },
  {
    target: "Eu gostaria de cancelar minha reserva.",
    src: "I would like to cancel my reservation.",
  },
  {
    target: "Você pode me mostrar o caminho para o museu?",
    src: "Can you show me the way to the museum?",
  },
  {
    target: "Qual é a melhor maneira de aprender português?",
    src: "What is the best way to learn Portuguese?",
  },
  {
    target: "Podemos remarcar nossa reunião para quarta-feira?",
    src: "Can we reschedule our meeting for Wednesday?",
  },
  {
    target: "Qual é o código de área desta cidade?",
    src: "What is the area code for this city?",
  },
  {
    target: "Você pode me dar um desconto?",
    src: "Can you give me a discount?",
  },
  {
    target: "Quais são as principais atrações turísticas aqui?",
    src: "What are the main tourist attractions here?",
  },
  {
    target: "Qual é a previsão do tempo para amanhã?",
    src: "What is the weather forecast for tomorrow?",
  },
  {
    target: "Você pode me ajudar a traduzir este documento?",
    src: "Can you help me translate this document?",
  },
  {
    target: "Qual é a taxa de câmbio hoje?",
    src: "What is the exchange rate today?",
  },
  {
    target: "Eu preciso ir ao consulado, você sabe onde é?",
    src: "I need to go to the consulate, do you know where it is?",
  },
  {
    target: "Você pode me recomendar um restaurante típico da região?",
    src: "Can you recommend a typical restaurant in the area?",
  },
  {
    target: "Qual é o número de emergência?",
    src: "What is the emergency number?",
  },
  {
    target: "Você sabe onde eu posso alugar um carro?",
    src: "Do you know where I can rent a car?",
  },
  { target: "Podemos pedir uma pizza?", src: "Can we order a pizza?" },
  {
    target: "Você tem algum remédio para dor de cabeça?",
    src: "Do you have any headache medicine?",
  },
  {
    target: "Quanto custa uma passagem de ônibus?",
    src: "How much does a bus ticket cost?",
  },
  {
    target: "Você sabe quando é o próximo jogo de futebol?",
    src: "Do you know when the next football game is?",
  },
  {
    target: "Posso ter um recibo, por favor?",
    src: "Can I have a receipt, please?",
  },
  {
    target: "Você conhece algum bom lugar para caminhar?",
    src: "Do you know any good places to hike?",
  },
  {
    target: "Como faço para usar este aparelho?",
    src: "How do I use this device?",
  },
  { target: "Você tem um mapa da cidade?", src: "Do you have a city map?" },
  {
    target: "A que horas começa o filme?",
    src: "What time does the movie start?",
  },
  {
    target: "Você podeme ajudar a carregar isso?",
    src: "Can you help me carry this?",
  },
  {
    target: "Você conhece um bom professor de português?",
    src: "Do you know a good Portuguese teacher?",
  },
  { target: "Qual é a senha do Wi-Fi?", src: "What is the Wi-Fi password?" },
  {
    target: "Você pode me dizer onde fica a saída de emergência?",
    src: "Can you tell me where the emergency exit is?",
  },
  {
    target: "Eu gostaria de fazer uma reserva para sexta-feira.",
    src: "I would like to make a reservation for Friday.",
  },
  {
    target: "Você sabe onde posso fazer uma cópia das chaves?",
    src: "Do you know where I can make a copy of the keys?",
  },
  {
    target: "Qual é o melhor horário para visitar o museu?",
    src: "What is the best time to visit the museum?",
  },
  {
    target: "Você tem um carregador de telefone que eu possa usar?",
    src: "Do you have a phone charger I can use?",
  },
  {
    target: "Onde posso encontrar uma farmácia aberta?",
    src: "Where can I find an open pharmacy?",
  },
  {
    target: "Você sabe onde posso comprar um cartão SIM local?",
    src: "Do you know where I can buy a local SIM card?",
  },
  {
    target: "Qual é o melhor local para assistir ao pôr do sol?",
    src: "What is the best place to watch the sunset?",
  },
  {
    target: "Você pode me dizer como chegar ao zoológico?",
    src: "Can you tell me how to get to the zoo?",
  },
  {
    target: "Quanto tempo demora para chegar ao centro da cidade?",
    src: "How long does it take to get to the city center?",
  },
  {
    target: "Onde posso comprar lembranças?",
    src: "Where can I buy souvenirs?",
  },
  {
    target: "Você sabe onde fica o posto de turismo?",
    src: "Do you know where the tourist office is?",
  },
  {
    target: "Você pode me indicar um bom local para tomar café?",
    src: "Can you recommend a good place to have coffee?",
  },
  {
    target: "Você conhece algum serviço de táxi confiável?",
    src: "Do you know any reliable taxi services?",
  },
  { target: "Onde posso trocar dinheiro?", src: "Where can I exchange money?" },
  {
    target: "Você pode verificar se isso está correto?",
    src: "Can you check if this is correct?",
  },
  {
    target: "Posso deixar minha bagagem aqui?",
    src: "Can I leave my luggage here?",
  },
  {
    target: "Qual é a distância até a praia?",
    src: "What is the distance to the beach?",
  },
  {
    target: "Você sabe onde posso alugar uma bicicleta?",
    src: "Do you know where I can rent a bike?",
  },
  {
    target: "Onde posso comprar ingressos para o concerto?",
    src: "Where can I buy tickets for the concert?",
  },
  {
    target: "Você pode me ajudar a encontrar um bom hotel?",
    src: "Can you help me find a good hotel?",
  },
  {
    target: "A que horas o mercado fecha?",
    src: "What time does the market close?",
  },
  {
    target: "Você sabe onde posso assistir a um filme em inglês?",
    src: "Do you know where I can watch a movie in English?",
  },
  {
    target: "Você pode me ajudar a configurar meu telefone?",
    src: "Can you help me set up my phone?",
  },
  {
    target: "Onde posso encontrar uma lavanderia?",
    src: "Where can I find a laundromat?",
  },
  {
    target: "Você tem alguma sugestão de atividades para crianças?",
    src: "Do you have any suggestions for activities for children?",
  },
  {
    target: "Você pode me indicar um bom lugar para nadar?",
    src: "Can you recommend a good place to swim?",
  },
  {
    target: "Onde posso comprar produtos locais?",
    src: "Where can I buy local products?",
  },
  {
    target: "Você sabe onde posso fazer um seguro de viagem?",
    src: "Do you know where I can get travel insurance?",
  },
  {
    target: "Quanto custa o aluguel de um carro por um dia?",
    src: "How much does it cost to rent a car for one day?",
  },
  {
    target: "Você sabe onde posso obter informações sobre excursões locais?",
    src: "Do you know where I can get information about local tours?",
  },
  {
    target: "Você conhece algum lugar tranquilo para estudar?",
    src: "Do you know a quiet place to study?",
  },
  {
    target: "Onde posso comprar um cartão de transporte público?",
    src: "Where can I buy a public transport card?",
  },
  {
    target: "Você sabe onde posso fazer um teste de COVID-19?",
    src: "Do you know where I can get a COVID-19 test?",
  },
  {
    target: "Você pode me ajudar a encontrar um médico que fale inglês?",
    src: "Can you help me find a doctor who speaks English?",
  },
  {
    target: "Você sabe onde posso fazer uma aula de surf?",
    src: "Do you know where I can take a surf lesson?",
  },
  {
    target: "Onde posso encontrar um bom restaurante de frutos do mar?",
    src: "Where can I find a good seafood restaurant?",
  },
  {
    target: "Você sabe onde posso comprar equipamento de mergulho?",
    src: "Do you know where I can buy diving equipment?",
  },
  {
    target: "Onde posso assistir a uma apresentação de música ao vivo?",
    src: "Where can I watch a live music performance?",
  },
  {
    target: "Você pode me indicar um bom bar?",
    src: "Can you recommend a good bar?",
  },
  {
    target: "Você sabe onde posso alugar equipamento de esqui?",
    src: "Do you know where I can rent ski equipment?",
  },
  {
    target: "Onde posso encontrar uma boa pizzaria?",
    src: "Where can I find a good pizzeria?",
  },
  {
    target: "Você sabe onde posso tirar fotos?",
    src: "Do you know where I can take photos?",
  },
  {
    target: "Você conhece algum lugar para fazer escalada?",
    src: "Do you know any places to go climbing?",
  },
  { target: "Onde posso comprar um presente?", src: "Where can I buy a gift?" },
  {
    target: "Você sabe onde posso encontrar uma boa padaria?",
    src: "Do you know where I can find a good bakery?",
  },
  {
    target: "Onde posso alugar um apartamento?",
    src: "Where can I rent an apartment?",
  },
  {
    target: "Você sabe onde posso fazer aulas de dança?",
    src: "Do you know where I can take dance classes?",
  },
  {
    target: "Onde posso comprar roupas de banho?",
    src: "Where can I buy swimwear?",
  },
  {
    target: "Você sabe onde posso comprar um guia turístico?",
    src: "Do you know where I can buy a travel guide?",
  },
  {
    target: "Onde posso encontrar um bom café?",
    src: "Where can I find a good cafe?",
  },
  {
    target: "Você sabe onde posso encontrar um bom parque?",
    src: "Do you know where I can find a good park?",
  },
  {
    target: "Onde posso comprar um novo carregador para meu telefone?",
    src: "Where can I buy a new charger for my phone?",
  },
  {
    target: "Você sabe onde posso alugar uma motocicleta?",
    src: "Do you know where I can rent a motorcycle?",
  },
  {
    target: "Onde posso encontrar uma boa sorveteria?",
    src: "Where can I find a good ice cream shop?",
  },
  {
    target: "Você sabe onde posso comprar um novo laptop?",
    src: "Do you know where I can buy a new laptop?",
  },
  {
    target: "Onde posso encontrar um bom lugar para fazer um piquenique?",
    src: "Where can I find a good place for a picnic?",
  },
  {
    target: "Você sabe onde posso comprar um guarda-chuva?",
    src: "Do you know where I can buy an umbrella?",
  },
  {
    target: "Onde posso encontrar uma boa loja de chocolates?",
    src: "Where can I find a good chocolate shop?",
  },
  {
    target: "Você sabe onde posso alugar um barco?",
    src: "Do you know where I can rent a boat?",
  },
  {
    target: "Onde posso encontrar uma boa loja de artesanato?",
    src: "Where can I find a good craft store?",
  },
  {
    target: "Você sabe onde posso comprar uma bicicleta nova?",
    src: "Do you know where I can buy a new bicycle?",
  },
  {
    target: "Onde posso encontrar uma boa churrascaria?",
    src: "Where can I find a good steakhouse?",
  },
  {
    target: "Você sabe onde posso fazer um passeio de balão?",
    src: "Do you know where I can take a balloon ride?",
  },
  { target: "Onde posso comprar flores?", src: "Where can I buy flowers?" },
  {
    target: "Você sabe onde posso encontrar uma boa loja de vinhos?",
    src: "Do you know where I can find a good wine shop?",
  },
  {
    target: "Onde posso assistir a uma peça de teatro?",
    src: "Where can I watch a play?",
  },
  {
    target: "Você sabe onde posso comprar um novo relógio?",
    src: "Do you know where I can buy a new watch?",
  },
  {
    target: "Onde posso encontrar um bom restaurante italiano?",
    src: "Where can I find a good Italian restaurant?",
  },
  {
    target: "Você sabe onde posso comprar uma câmera nova?",
    src: "Do you know where I can buy a new camera?",
  },
  {
    target: "Onde posso encontrar uma boa galeria de arte?",
    src: "Where can I find a good art gallery?",
  },
  {
    target: "Você sabe onde posso comprar especiarias locais?",
    src: "Do you know where I can buy local spices?",
  },
  {
    target: "Onde posso encontrar uma boa livraria?",
    src: "Where can I find a good bookstore?",
  },
  {
    target: "Você sabe onde posso fazer uma massagem?",
    src: "Do you know where I can get a massage?",
  },
  {
    target: "Onde posso comprar um novo par de sapatos?",
    src: "Where can I buy a new pair of shoes?",
  },
  {
    target: "Você sabe onde posso assistir a uma corrida de cavalos?",
    src: "Do you know where I can watch a horse race?",
  },
  {
    target: "Onde posso encontrar um bom lugar para jogar golfe?",
    src: "Where can I find a good place to play golf?",
  },
  {
    target: "Você sabe onde posso fazer uma tatuagem?",
    src: "Do you know where I can get a tattoo?",
  },
  {
    target: "Onde posso comprar um novo telefone?",
    src: "Where can I buy a new phone?",
  },
  {
    target: "Você sabe onde posso assistir a uma aula de ioga?",
    src: "Do you know where I can attend a yoga class?",
  },
  {
    target: "Onde posso encontrar uma boa pousada?",
    src: "Where can I find a good inn?",
  },
  {
    target: "Você sabe onde posso comprar uma nova mochila?",
    src: "Do you know where I can buy a new backpack?",
  },
  {
    target: "Onde posso encontrar um bom lugar para observar pássaros?",
    src: "Where can I find a good place for bird watching?",
  },
  {
    target: "Você sabe onde posso comprar uma nova câmera?",
    src: "Do you know where I can buy a new camera?",
  },
  {
    target: "Onde posso comprar uma máquina de café?",
    src: "Where can I buy a coffee machine?",
  },
  {
    target: "Você sabe onde posso comprar joias?",
    src: "Do you know where I can buy jewelry?",
  },
  {
    target: "Onde posso encontrar uma boa sorveteria?",
    src: "Where can I find a good ice cream parlor?",
  },
  {
    target: "Você sabe onde posso comprar livros usados?",
    src: "Do you know where I can buy used books?",
  },
  {
    target: "Onde posso comprar uma nova bicicleta?",
    src: "Where can I buy a new bike?",
  },
  {
    target: "Você sabe onde posso comprar um violão?",
    src: "Do you know where I can buy a guitar?",
  },
  {
    target: "Onde posso encontrar um bom lugar para tomar chá?",
    src: "Where can I find a good place for tea?",
  },
  {
    target: "Você sabe onde posso comprar uma câmera de filme?",
    src: "Do you know where I can buy a film camera?",
  },
  {
    target: "O aeroporto fica a 30 minutos de carro daqui.",
    src: "The airport is a 30-minute drive from here.",
  },
  {
    target: "Temos vários livros de ficção científica na prateleira ao fundo.",
    src: "We have several science fiction books on the back shelf.",
  },
  {
    target: "Esta situação parece complicada, mas temos algumas opções.",
    src: "This situation seems complicated, but we have some options.",
  },
  {
    target: "Podemos nos encontrar na praça às três da tarde.",
    src: "We can meet at the square at three in the afternoon.",
  },
  {
    target: "A apresentação começa às 19h00 na sala de conferências.",
    src: "The presentation starts at 7:00 PM in the conference room.",
  },
  {
    target:
      "Vou ajudá-lo a encontrar sua carteira. Onde você a viu pela última vez?",
    src: "I will help you find your wallet. Where did you see it last?",
  },
  {
    target: "Esse prato leva cerca de 45 minutos para ser preparado.",
    src: "This dish takes about 45 minutes to prepare.",
  },
  {
    target: "Você pode comprar selos na loja de conveniência na esquina.",
    src: "You can buy stamps at the convenience store on the corner.",
  },
  {
    target: "A livraria fica a duas quadras daqui, na Rua Principal.",
    src: "The bookstore is two blocks from here, on Main Street.",
  },
  {
    target: "O banco abre às 9h00 durante a semana.",
    src: "The bank opens at 9:00 AM on weekdays.",
  },
  {
    target: "Sua reserva foi cancelada com sucesso.",
    src: "Your reservation has been successfully canceled.",
  },
  {
    target:
      "Para chegar ao museu, continue reto por dois quarteirões e vire à direita.",
    src: "To get to the museum, continue straight for two blocks and turn right.",
  },
  {
    target:
      "A melhor maneira de aprender português é praticar todos os dias e conversar com falantes nativos.",
    src: "The best way to learn Portuguese is to practice every day and converse with native speakers.",
  },
  {
    target: "Nossa reunião foi remarcada para quarta-feira às 14h00.",
    src: "Our meeting has been rescheduled for Wednesday at 2:00 PM.",
  },
  {
    target: "O código de área desta cidade é 21.",
    src: "The area code for this city is 21.",
  },
  {
    target: "Posso oferecer um desconto de 10% no total da sua compra.",
    src: "I can offer a 10% discount on your total purchase.",
  },
  {
    target:
      "As principais atrações turísticas são o museu de arte, o parque central e o antigo teatro.",
    src: "The main tourist attractions are the art museum, the central park, and the old theater.",
  },
  {
    target:
      "A previsão do tempo para amanhã é de sol pela manhã com possibilidade de chuva à tarde.",
    src: "The weather forecast for tomorrow is sunny in the morning with a chance of rain in the afternoon.",
  },
  {
    target: "Posso ajudá-lo com a tradução deste documento para o inglês.",
    src: "I can help you translate this document into English.",
  },
  {
    target: "A taxa de câmbio hoje é de 1 dólar para 5,20 reais.",
    src: "The exchange rate today is 1 dollar to 5.20 reais.",
  },
  {
    target:
      "O consulado fica no centro da cidade, próximo ao monumento histórico.",
    src: "The consulate is in the city center, near the historical monument.",
  },
  {
    target:
      "Recomendo o restaurante 'Sabor Local', que serve pratos típicos da região.",
    src: "I recommend the 'Local Flavor' restaurant, which serves typical dishes of the region.",
  },
  {
    target:
      "O número de emergência é 190 para polícia, 192 para ambulância e 193 para bombeiros.",
    src: "The emergency number is 190 for police, 192 for ambulance, and 193 for firefighters.",
  },
  {
    target: "Você pode alugar um carrona agência localizada no aeroporto.",
    src: "You can rent a car at the agency located at the airport.",
  },
  {
    target:
      "Sim, podemos pedir uma pizza. Temos um menu com várias opções aqui.",
    src: "Yes, we can order a pizza. We have a menu with various options here.",
  },
  {
    target:
      "Temos um kit de primeiros socorros com remédio para dor de cabeça na recepção.",
    src: "We have a first aid kit with headache medicine at the reception.",
  },
  {
    target: "Uma passagem de ônibus custa R$ 4,50.",
    src: "A bus ticket costs BRL 4.50.",
  },
  {
    target:
      "O próximo jogo de futebol será neste sábado às 16h00 no estádio municipal.",
    src: "The next football game will be this Saturday at 4:00 PM at the municipal stadium.",
  },
  {
    target: "Aqui está seu recibo, deseja mais alguma coisa?",
    src: "Here is your receipt, would you like anything else?",
  },
  {
    target:
      "Existem várias trilhas para caminhada no parque nacional, que fica a 30 km daqui.",
    src: "There are several hiking trails in the national park, which is 30 km from here.",
  },
  {
    target:
      "Este aparelho é muito simples de usar, deixe-me mostrar-lhe como funciona.",
    src: "This device is very simple to use, let me show you how it works.",
  },
  {
    target: "Sim, temos um mapa da cidade disponível na recepção.",
    src: "Yes, we have a city map available at the reception.",
  },
  {
    target: "O filme começa às 20h00 no cinema central.",
    src: "The movie starts at 8:00 PM at the central cinema.",
  },
  {
    target: "Claro, posso ajudar a carregar isso até seu carro.",
    src: "Sure, I can help carry this to your car.",
  },
  {
    target:
      "Conheço um excelente professor de português que oferece aulas online e presenciais.",
    src: "I know an excellent Portuguese teacher who offers both online and face-to-face classes.",
  },
  {
    target: "A senha do Wi-Fi é 'convidado123'.",
    src: "The Wi-Fi password is 'guest123'.",
  },
  {
    target:
      "A saída de emergência está ao lado do elevador no final do corredor.",
    src: "The emergency exit is next to the elevator at the end of the hallway.",
  },
  {
    target:
      "Sua reserva para sexta-feira foi confirmada. Você gostaria de adicionar algum pedido especial?",
    src: "Your reservation for Friday has been confirmed. Would you like to add any special requests?",
  },
  {
    target:
      "Você pode fazer uma cópia das chaves na loja de ferragens na Rua 25 de Março.",
    src: "You can make a copy of the keys at the hardware store on 25 de Março Street.",
  },
  {
    target:
      "O melhor horário para visitar o museu é durante a semana pela manhã, quando é menos movimentado.",
    src: "The best time to visit the museum is during weekday mornings when it's less crowded.",
  },
  {
    target:
      "Sim, temos um carregador de telefone universal que você pode usar enquanto estiver aqui.",
    src: "Yes, we have a universal phone charger that you can use while you are here.",
  },
  {
    target:
      "A farmácia aberta mais próxima fica a 24 horas, e está localizada a apenas 5 minutos daqui de carro.",
    src: "The nearest 24-hour open pharmacy is located just 5 minutes away by car.",
  },
  {
    target:
      "Você pode comprar um cartão SIM local em qualquer loja de telecomunicações no centro da cidade.",
    src: "You can buy a local SIM card at any telecommunications store in the city center.",
  },
  {
    target:
      "O melhor local para assistir ao pôr do sol é no parque da colina, que oferece uma vista panorâmica da cidade.",
    src: "The best place to watch the sunset is at the hill park, which offers a panoramic view of the city.",
  },
  {
    target:
      "Para chegar ao zoológico, pegue o ônibus número 15 que sai do terminal central a cada 20 minutos.",
    src: "To get to the zoo, take bus number 15 that leaves from the central terminal every 20 minutes.",
  },
  {
    target:
      "Chegar ao centro da cidade leva aproximadamente 20 minutos de metrô a partir daqui.",
    src: "It takes approximately 20 minutes to get to the city center by subway from here.",
  },
  {
    target:
      "Você pode comprar lembranças na loja de presentes ao lado do museu da cidade.",
    src: "You can buy souvenirs at the gift shop next to the city museum.",
  },
  {
    target:
      "O posto de turismo fica no prédio da prefeitura, que é o grande edifício verde no centro da praça.",
    src: "The tourist office is located in the town hall, which is the large green building in the center of the square.",
  },
  {
    target:
      "Um excelente local para tomar café é o 'Café com Arte', que também expõe obras de artistas locais.",
    src: "A great place to have coffee is 'Coffee with Art', which also displays works by local artists.",
  },
  {
    target:
      "Para um serviço de táxi confiável, recomendo a 'Rádio Táxi', que você pode chamar pelo aplicativo ou telefone.",
    src: "For reliable taxi service, I recommend 'Radio Taxi', which you can call via app or phone.",
  },
  {
    target:
      "Você pode trocar dinheiro no banco, ou em qualquer casa de câmbio que fica no centro comercial da cidade.",
    src: "You can exchange money at the bank, or at any currency exchange located in the city's shopping center.",
  },
  {
    target:
      "Sim, está tudo correto. Seu nome e a data estão corretos no formulário.",
    src: "Yes, everything is correct. Your name and the date are correct on the form.",
  },
  {
    target:
      "Você pode deixar sua bagagem aqui no guarda-volumes enquanto visita a cidade.",
    src: "You can leave your luggage here in the luggage storage while you visit the city.",
  },
  {
    target:
      "A praia fica a cerca de 15 km daqui, e você pode chegar lá de ônibus ou táxi.",
    src: "The beach is about 15 km from here, and you can get there by bus or taxi.",
  },
  {
    target:
      "Você pode alugar uma bicicleta na loja 'Pedal Leve', que fica na rua ao lado do parque.",
    src: "You can rent a bike at 'Light Pedal' shop, which is on the street next to the park.",
  },
  {
    target:
      "Os ingressos para o concerto estão disponíveis no site oficial do evento ou na bilheteria do teatro.",
    src: "Tickets for the concert are available on the official event website or at the theater box office.",
  },
  {
    target:
      "Posso ajudá-lo a encontrar um hotel dentro do seu orçamento e preferências. Que tipo de acomodação você está procurando?",
    src: "I can help you find a hotel within your budget and preferences. What kind of accommodation are you looking for?",
  },
  {
    target:
      "O mercado fecha às 18h00, mas aos sábados fecha mais tarde, às 20h00.",
    src: "The market closes at 6:00 PM, but on Saturdays, it closes later at 8:00 PM.",
  },
  {
    target:
      "Há um cinema que exibe filmes em inglês no shopping center, a 10 minutos de carro daqui.",
    src: "There is a cinema that shows movies in English at the shopping center, a 10-minute drive from here.",
  },
  {
    target:
      "Claro, posso ajudá-lo a configurar seu telefone. Qual é o modelo e o que você precisa configurar?",
    src: "Sure, I can help you set up your phone. What is the model and what do you need to configure?",
  },
  {
    target:
      "A lavanderia mais próxima fica a três quarteirões daqui, na mesma rua do supermercado.",
    src: "The nearest laundromat is three blocks from here, on the same street as the supermarket.",
  },
  {
    target:
      "Há várias atividades para crianças no centro cultural, incluindo oficinas de arte e sessões de cinema infantil.",
    src: "There are various activities for children at the cultural center, including art workshops and children's cinema sessions.",
  },
  {
    target:
      "Um ótimo lugar para nadar é o clube aquático, que tem piscinas abertas ao público durante o verão.",
    src: "A great place to swim is the aquatic club, which has pools open to the public during the summer.",
  },
  {
    target:
      "Produtos locais podem ser comprados no mercado de agricultores que acontece todos os sábados na praça central.",
    src: "Local products can be purchased at the farmers' market that takes place every Saturday in the central square.",
  },
  {
    target:
      "Para fazer um seguro de viagem, você pode visitar qualquer agência de viagens ou fazer online através de vários provedores de serviços.",
    src: "To get travel insurance, you can visit any travel agency or do it online through various service providers.",
  },
  {
    target:
      "O aluguel de um carro custa aproximadamente R$ 100 por dia, incluindo seguro básico.",
    src: "Renting a car costs approximately BRL 100 per day, including basic insurance.",
  },
  {
    target:
      "Informações sobre excursões locais estão disponíveis no centro de informações turísticas, que fica na entrada do parque nacional.",
    src: "Information about local tours is available at the tourist information center, located at the entrance to the national park.",
  },
  {
    target:
      "Um lugar tranquilo para estudar é a biblioteca municipal, que tem várias salas de estudo silenciosas.",
    src: "A quiet place to study is the municipal library, which has several quiet study rooms.",
  },
  {
    target:
      "Você pode comprar um cartão de transporte público em qualquer estação de metrô, ou em pontos de venda autorizados.",
    src: "You can buy a public transport card at any subway station or at authorized sales points.",
  },
  {
    target:
      "O teste de COVID-19 pode ser feito no hospital central ou em clínicas privadas, que oferecem o serviço por uma taxa.",
    src: "COVID-19 testing can be done at the central hospital or at private clinics that offer the service for a fee.",
  },
  {
    target:
      "Há um médico que fala inglês no hospital internacional, que está equipado para atender turistas e expatriados.",
    src: "There is an English-speaking doctor at the international hospital, which is equipped to serve tourists and expatriates.",
  },
  {
    target:
      "Aulas de surf podem ser agendadas na escola de surf local, que fica na praia principal.",
    src: "Surf lessons can be scheduled at the local surf school, which is located on the main beach.",
  },
  {
    target:
      "O melhor restaurante de frutos do mar da região é o 'Maré Alta', que serve peixes e mariscos frescos todos os dias.",
    src: "The best seafood restaurant in the area is 'High Tide', which serves fresh fish and shellfish every day.",
  },
  {
    target:
      "Equipamento de mergulho pode ser comprado ou alugado na loja 'Submarino', que também oferece cursos de mergulho certificados.",
    src: "Diving equipment can be purchased or rented at 'Submarine' store, which also offers certified diving courses.",
  },
  {
    target:
      "Apresentações de música ao vivo acontecem no 'Jazz Club', localizado no centro histórico, todas as sextas e sábados à noite.",
    src: "Live music performances take place at the 'Jazz Club', located in the historic center, every Friday and Saturday night.",
  },
  {
    target:
      "Um excelente bar para visitar é o 'Bar do Céu', que oferece uma vista incrível da cidade e uma seleção de bebidas premium.",
    src: "An excellent bar to visit is 'Sky Bar', which offers an incredible view of the city and a selection of premium drinks.",
  },
  {
    target:
      "Equipamento de esqui pode ser alugado na loja 'Neve Total', que fica na entrada da estação de esqui.",
    src: "Ski equipment can be rented at 'Total Snow' shop, located at the entrance to the ski resort.",
  },
  {
    target:
      "A pizzaria 'Bella Napoli' oferece autênticas pizzas italianas assadas em forno a lenha.",
    src: "The 'Bella Napoli' pizzeria offers authentic Italian pizzas baked in a wood-fired oven.",
  },
  {
    target:
      "Você pode tirar fotos incríveis no mirante da montanha, que oferece uma vista panorâmica da região.",
    src: "You can take amazing photos at the mountain viewpoint, which offers a panoramic view of the area.",
  },
  {
    target:
      "Lugares para fazer escalada podem ser encontrados no parque de aventuras, que tem paredes de escalada naturais e artificiais.",
    src: "Places to go climbing can be found at the adventure park, which has both natural and artificial climbing walls.",
  },
  {
    target:
      "Você pode comprar um presente na loja 'Presentes Criativos', que tem uma variedade de opções únicas e artesanais.",
    src: "You can buy a gift at 'Creative Gifts' shop, which has a variety of unique and handmade options.",
  },
  {
    target:
      "A melhor padaria da cidade é a 'Pão & Companhia', conhecida por seus pães artesanais e doces deliciosos.",
    src: "The best bakery in town is 'Bread & Company', known for its artisan breads and delicious pastries.",
  },
  {
    target:
      "Você pode alugar um apartamento através de agências imobiliárias locais ou plataformas online como o Airbnb.",
    src: "You can rent an apartment through local real estate agencies or online platforms like Airbnb.",
  },
  {
    target:
      "Aulas de dança estão disponíveis no 'Studio Dança e Arte', que oferece classes de salsa, tango e ballet.",
    src: "Dance classes are available at 'Dance and Art Studio', which offers salsa, tango, and ballet classes.",
  },
  {
    target:
      "Roupas de banho podem ser compradas na loja 'Sol & Mar', que especializa em moda praia e acessórios.",
    src: "Swimwear can be purchased at 'Sun & Sea' store, which specializes in beach fashion and accessories.",
  },
  {
    target:
      "Guias turísticos estão disponíveis na livraria local, que tem uma seção dedicada a viagens e turismo.",
    src: "Travel guides are available at the local bookstore, which has a section dedicated to travel and tourism.",
  },
  {
    target:
      "O café 'Café das Artes' é um ótimo lugar para desfrutar de um bom café e apreciar arte local.",
    src: "The 'Art Coffee' is a great place to enjoy a good coffee and appreciate local art.",
  },
  {
    target:
      "O parque da cidade é um excelente lugar para passear e relaxar, com áreas verdes e um lago.",
    src: "The city park is an excellent place to stroll and relax, with green areas and a lake.",
  },
  {
    target:
      "Você pode comprar um carregador para seu telefone em qualquer loja de eletrônicos ou em quiosques em shoppings.",
    src: "You can buy a charger for your phone at any electronics store or at kiosks in shopping malls.",
  },
  {
    target:
      "Você pode alugar uma motocicleta na loja 'Moto Aventura', que oferece diferentes modelos para aluguel diário.",
    src: "You can rent a motorcycle at 'Moto Adventure' store, which offers different models for daily rental.",
  },
  {
    target:
      "A sorveteria 'Gelato Dreams' oferece uma variedade de sabores feitos com ingredientes naturais.",
    src: "The 'Gelato Dreams' ice cream shop offers a variety of flavors made with natural ingredients.",
  },
  {
    target:
      "Você pode comprar um novo laptop em qualquer loja de eletrônicos na cidade ou online.",
    src: "You can buy a new laptop at any electronics store in the city or online.",
  },
  {
    target:
      "O parque local é um ótimo lugar para fazer um piquenique, com muitas áreas sombreadas e mesas de piquenique.",
    src: "The local park is a great place for a picnic, with many shaded areas and picnic tables.",
  },
  {
    target:
      "Você pode comprar um guarda-chuva na loja 'Clima', que vende uma variedade de guarda-chuvas e capas de chuva.",
    src: "You can buy an umbrella at 'Weather' store, which sells a variety of umbrellas and raincoats.",
  },
  {
    target:
      "A loja de chocolates 'Doce Sabor' oferece uma ampla seleção de chocolates artesanais e importados.",
    src: "The 'Sweet Taste' chocolate shop offers a wide selection of handmade and imported chocolates.",
  },
  {
    target:
      "Você pode alugar um barco no clube náutico, que oferece aluguéis por hora ou dia.",
    src: "You can rent a boat at the yacht club, which offers rentals by the hour or day.",
  },
  {
    target:
      "A loja de artesanato 'Mãos Criativas' tem uma grande variedade de produtos feitos por artesãos locais.",
    src: "The 'Creative Hands' craft store has a wide range of products made by local artisans.",
  },
  {
    target:
      "Você pode comprar uma bicicleta nova na loja 'Pedal Seguro', que oferece uma variedade de modelos e acessórios.",
    src: "You can buy a new bike at 'Safe Pedal' store, which offers a variety of models and accessories.",
  },
  {
    target:
      "A churrascaria 'Fogo de Chão' é conhecida por seus cortes de carne de alta qualidade e ambiente acolhedor.",
    src: "The 'Ground Fire' steakhouse is known for its high-quality cuts of meat and welcoming atmosphere.",
  },
  {
    target:
      "Passeios de balão estão disponíveis através da empresa 'Céu Aventuras', que oferece voos panorâmicos sobre a região.",
    src: "Balloon rides are available through 'Sky Adventures' company, which offers scenic flights over the area.",
  },
  {
    target:
      "Você pode comprar flores na floricultura 'Jardim das Flores', que tem uma grande variedade de flores e arranjos.",
    src: "You can buy flowers at 'Garden of Flowers' florist, which has a wide variety of flowers and arrangements.",
  },
  {
    target:
      "A loja de vinhos 'Vinhos & Vinhedos' oferece uma seleção de vinhos nacionais e importados, além de degustações regulares.",
    src: "The 'Wines & Vineyards' wine shop offers a selection of domestic and imported wines, plus regular tastings.",
  },
  {
    target:
      "Você pode assistir a uma peça de teatro no 'Teatro da Cidade', que apresenta espetáculos variados ao longo do ano.",
    src: "You can watch a play at the 'City Theater', which features various shows throughout the year.",
  },
  {
    target:
      "Você pode comprar um novo relógio na joalheria 'Tempo Precioso', que tem uma coleção exclusiva de relógios de luxo.",
    src: "You can buy a new watch at 'Precious Time' jewelry store, which has an exclusive collection of luxury watches.",
  },
  {
    target:
      "O restaurante italiano 'Cantina Bella Italia' serve pratos clássicos italianos em um ambiente autêntico e acolhedor.",
    src: "The 'Bella Italia Cantina' Italian restaurant serves classic Italian dishes in an authentic and welcoming environment.",
  },
  {
    target:
      "Você pode comprar uma nova câmera na loja 'Foto & Imagem', que oferece uma ampla seleção de câmeras e acessórios.",
    src: "You can buy a new camera at 'Photo & Image' store, which offers a wide selection of cameras and accessories.",
  },
  {
    target:
      "A galeria de arte 'Arte Moderna' apresenta obras de artistas contemporâneos e clássicos, com exposições que mudam regularmente.",
    src: "The 'Modern Art' gallery features works by contemporary and classic artists, with regularly changing exhibitions.",
  },
  {
    target:
      "Especiarias locais podem ser encontradas no mercado central, que tem uma seção dedicada a produtos regionais.",
    src: "Local spices can be found at the central market, which has a section dedicated to regional products.",
  },
  {
    target:
      "A livraria 'Ler e Saber' tem uma excelente seleção de livros, incluindo best-sellers, clássicos e novidades.",
    src: "The 'Read and Know' bookstore has an excellent selection of books, including best-sellers, classics, and new releases.",
  },
  {
    target:
      "Massagens estão disponíveis no spa 'Relax Total', que oferece uma variedade de tratamentos de bem-estar e relaxamento.",
    src: "Massages are available at the 'Total Relax' spa, which offers a variety of wellness and relaxation treatments.",
  },
  {
    target:
      "Você pode comprar um novo par de sapatos na loja 'Calçados Conforto', que se especializa em calçados ergonômicos e de moda.",
    src: "You can buy a new pair of shoes at 'Comfort Footwear' store, which specializes in ergonomic and fashionable footwear.",
  },
  {
    target:
      "Corridas de cavalos acontecem no hipódromo da cidade, geralmente aos fins de semana.",
    src: "Horse races take place at the city racetrack, usually on weekends.",
  },
  {
    target: "Eu preciso de ajuda com meu trabalho de casa.",
    src: "I need help with my homework.",
  },
  {
    target: "Vamos ao mercado comprar ingredientes para o jantar.",
    src: "Let's go to the market to buy ingredients for dinner.",
  },
  {
    target: "Estou aprendendo português para poder me comunicar melhor.",
    src: "I am learning Portuguese to communicate better.",
  },
  {
    target: "A festa foi um grande sucesso, todos se divertiram.",
    src: "The party was a great success, everyone had fun.",
  },
  {
    target: "O filme que assistimos ontem foi muito emocionante.",
    src: "The movie we watched yesterday was very exciting.",
  },
  {
    target: "Preciso revisar meus estudos antes da prova.",
    src: "I need to review my studies before the exam.",
  },
  {
    target: "Eu gostaria de aprender a tocar violão.",
    src: "I would like to learn to play the guitar.",
  },
  {
    target: "Estamos planejando uma viagem para a praia no próximo mês.",
    src: "We are planning a trip to the beach next month.",
  },
  {
    target: "A comida no restaurante era deliciosa e bem apresentada.",
    src: "The food at the restaurant was delicious and well presented.",
  },
  {
    target: "Vou tirar um dia de folga para descansar.",
    src: "I will take a day off to rest.",
  },
  {
    target: "O trânsito na cidade está cada vez pior.",
    src: "Traffic in the city is getting worse.",
  },
  {
    target: "Ela sempre me apoia nos momentos difíceis.",
    src: "She always supports me in difficult times.",
  },
  {
    target: "Vamos assistir ao jogo de futebol juntos.",
    src: "Let's watch the soccer game together.",
  },
  {
    target: "O livro que estou lendo é muito interessante.",
    src: "The book I am reading is very interesting.",
  },
  {
    target: "Meu cachorro adora passear no parque.",
    src: "My dog loves to walk in the park.",
  },
  {
    target: "Preciso comprar novos móveis para minha casa.",
    src: "I need to buy new furniture for my house.",
  },
  {
    target: "Vamos ao cinema assistir a um filme novo.",
    src: "Let's go to the cinema to watch a new movie.",
  },
  {
    target: "Ela gosta de cozinhar receitas diferentes todos os dias.",
    src: "She likes to cook different recipes every day.",
  },
  {
    target: "Estou me preparando para uma apresentação importante.",
    src: "I am preparing for an important presentation.",
  },
  {
    target: "Ele me ajudou a resolver um problema complicado.",
    src: "He helped me solve a complicated problem.",
  },
  {
    target: "Nós passamos o dia todo limpando a casa.",
    src: "We spent the whole day cleaning the house.",
  },
  {
    target: "Estou economizando dinheiro para comprar um carro novo.",
    src: "I am saving money to buy a new car.",
  },
  {
    target: "Ela está estudando para se tornar uma médica.",
    src: "She is studying to become a doctor.",
  },
  {
    target: "Vou fazer uma viagem internacional nas férias.",
    src: "I will take an international trip on vacation.",
  },
  {
    target: "Meu irmão começou um novo emprego na semana passada.",
    src: "My brother started a new job last week.",
  },
  {
    target: "Eu gosto de passar meu tempo livre lendo livros.",
    src: "I like to spend my free time reading books.",
  },
  {
    target: "A reunião foi adiada para a próxima semana.",
    src: "The meeting was postponed to next week.",
  },
  {
    target: "Nós precisamos discutir os detalhes do projeto.",
    src: "We need to discuss the project details.",
  },
  {
    target: "Ele comprou um presente para sua mãe.",
    src: "He bought a gift for his mother.",
  },
  {
    target: "Vamos fazer um piquenique no parque amanhã.",
    src: "Let's have a picnic in the park tomorrow.",
  },
  {
    target: "Estou aprendendo a falar espanhol também.",
    src: "I am learning to speak Spanish too.",
  },
  {
    target: "Ela sempre me faz rir com suas piadas.",
    src: "She always makes me laugh with her jokes.",
  },
  {
    target: "Vou ao médico para um check-up anual.",
    src: "I am going to the doctor for an annual check-up.",
  },
  {
    target: "Meu computador está com problemas, preciso consertá-lo.",
    src: "My computer is having issues, I need to fix it.",
  },
  {
    target: "Nós vamos sair para jantar hoje à noite.",
    src: "We are going out for dinner tonight.",
  },
  {
    target: "Ele está treinando para uma maratona.",
    src: "He is training for a marathon.",
  },
  {
    target: "A praia estava lotada no fim de semana passado.",
    src: "The beach was crowded last weekend.",
  },
  {
    target: "Eu prefiro chá ao invés de café.",
    src: "I prefer tea instead of coffee.",
  },
  {
    target: "Ela gosta de pintar quadros nas horas vagas.",
    src: "She likes to paint pictures in her spare time.",
  },
  {
    target: "Estamos organizando uma festa de aniversário surpresa.",
    src: "We are organizing a surprise birthday party.",
  },
  {
    target: "O jardim está cheio de flores coloridas.",
    src: "The garden is full of colorful flowers.",
  },
  {
    target: "Preciso comprar um presente de aniversário para meu amigo.",
    src: "I need to buy a birthday present for my friend.",
  },
  {
    target: "Nós assistimos a um filme emocionante na TV.",
    src: "We watched an exciting movie on TV.",
  },
  {
    target: "Ele está sempre disposto a ajudar os outros.",
    src: "He is always willing to help others.",
  },
  {
    target: "Vamos viajar de carro até a praia.",
    src: "We are going to drive to the beach.",
  },
  {
    target: "Ela tem um talento especial para a música.",
    src: "She has a special talent for music.",
  },
  {
    target: "Estou procurando um novo apartamento para alugar.",
    src: "I am looking for a new apartment to rent.",
  },
  {
    target: "Nós vamos fazer uma caminhada na montanha amanhã.",
    src: "We are going hiking in the mountains tomorrow.",
  },
  {
    target: "Ele está estudando para um exame importante.",
    src: "He is studying for an important exam.",
  },
  {
    target: "Preciso terminar meu projeto antes do prazo.",
    src: "I need to finish my project before the deadline.",
  },
  {
    target: "Ela adora fotografar paisagens naturais.",
    src: "She loves photographing natural landscapes.",
  },
  {
    target: "Nós estamos planejando uma festa de Natal.",
    src: "We are planning a Christmas party.",
  },
  {
    target: "Vou ao shopping comprar roupas novas.",
    src: "I am going to the mall to buy new clothes.",
  },
  {
    target: "Ele está interessado em aprender a cozinhar.",
    src: "He is interested in learning to cook.",
  },
  {
    target: "Estamos organizando uma viagem de família.",
    src: "We are organizing a family trip.",
  },
  {
    target: "Ela está trabalhando em um novo projeto de arte.",
    src: "She is working on a new art project.",
  },
  {
    target: "Eu gosto de correr no parque pela manhã.",
    src: "I like to run in the park in the morning.",
  },
  {
    target: "Nós vamos visitar um museu neste fim de semana.",
    src: "We are going to visit a museum this weekend.",
  },
  {
    target: "Ele está aprendendo a tocar piano.",
    src: "He is learning to play the piano.",
  },
  {
    target: "Ela gosta de assistir documentários sobre a natureza.",
    src: "She likes to watch documentaries about nature.",
  },
  {
    target: "Nós vamos ao parque de diversões amanhã.",
    src: "We are going to the amusement park tomorrow.",
  },
  {
    target: "Eu prefiro ler livros de ficção científica.",
    src: "I prefer to read science fiction books.",
  },
  {
    target: "Ela está estudando para se tornar uma engenheira.",
    src: "She is studying to become an engineer.",
  },
  {
    target: "Nós vamos celebrar nosso aniversário de casamento.",
    src: "We are going to celebrate our wedding anniversary.",
  },
  {
    target: "Ele está treinando para um torneio de tênis.",
    src: "He is training for a tennis tournament.",
  },
  {
    target: "Ela gosta de passar o tempo livre fazendo tricô.",
    src: "She likes to spend her free time knitting.",
  },
  {
    target: "Nós vamos ao zoológico ver os animais.",
    src: "We are going to the zoo to see the animals.",
  },
  {
    target: "Eu gosto de cozinhar receitas saudáveis.",
    src: "I like to cook healthy recipes.",
  },
  {
    target: "Ela está lendo um livro sobre história antiga.",
    src: "She is reading a book about ancient history.",
  },
  {
    target: "Nós vamos fazer uma viagem de trem pela Europa.",
    src: "We are going on a train trip through Europe.",
  },
  {
    target: "Ele está aprendendo a falar japonês.",
    src: "He is learning to speak Japanese.",
  },
  {
    target: "Ela gosta de fazer exercícios na academia.",
    src: "She likes to exercise at the gym.",
  },
  {
    target: "Nós vamos ao teatro assistir a uma peça.",
    src: "We are going to the theater to watch a play.",
  },
  {
    target: "Eu prefiro tomar chá verde ao invés de café.",
    src: "I prefer to drink green tea instead of coffee.",
  },
  {
    target: "Ela está aprendendo a pintar com aquarelas.",
    src: "She is learning to paint with watercolors.",
  },
  {
    target: "Nós vamos ao parque para um piquenique.",
    src: "We are going to the park for a picnic.",
  },
  {
    target: "Ele está estudando para um concurso público.",
    src: "He is studying for a public examination.",
  },
  {
    target: "Ela gosta de assistir a programas de culinária.",
    src: "She likes to watch cooking shows.",
  },
  {
    target: "Nós vamos ao festival de música neste fim de semana.",
    src: "We are going to the music festival this weekend.",
  },
  {
    target: "Eu gosto de jogar xadrez com meus amigos.",
    src: "I like to play chess with my friends.",
  },
  {
    target: "Ela está aprendendo a costurar roupas.",
    src: "She is learning to sew clothes.",
  },
  {
    target: "Nós vamos ao parque aquático amanhã.",
    src: "We are going to the water park tomorrow.",
  },
  {
    target: "Ele está interessado em fotografia.",
    src: "He is interested in photography.",
  },
  {
    target: "Ela gosta de passear de bicicleta pela cidade.",
    src: "She likes to ride her bike around the city.",
  },
  {
    target: "Nós vamos ao mercado de agricultores no sábado.",
    src: "We are going to the farmer's market on Saturday.",
  },
  {
    target: "Eu gosto de aprender sobre novas culturas.",
    src: "I like to learn about new cultures.",
  },
  {
    target: "Ela está lendo um romance de mistério.",
    src: "She is reading a mystery novel.",
  },
  {
    target: "Nós vamos ao parque fazer um churrasco.",
    src: "We are going to the park for a barbecue.",
  },
  {
    target: "Ele está aprendendo a tocar violino.",
    src: "He is learning to play the violin.",
  },
  {
    target: "Ela gosta de fazer caminhadas na montanha.",
    src: "She likes to hike in the mountains.",
  },
  {
    target: "Nós vamos ao festival de cinema na próxima semana.",
    src: "We are going to the film festival next week.",
  },
  {
    target: "Eu gosto de assistir a documentários científicos.",
    src: "I like to watch science documentaries.",
  },
  {
    target: "Ela está aprendendo a fazer cerâmica.",
    src: "She is learning to make pottery.",
  },
  {
    target: "Pode escolher qualquer livro",
    src: "You can choose any book",
  },
  {
    target: "Qualquer pessoa pode fazer isso",
    src: "Any person can do this",
  },
  {
    target: "Ele é um qualquer",
    src: "He is a nobody",
  },
  {
    target: "Eu aceito qualquer ajuda.",
    src: "I accept any help",
  },
  {
    target: "Tenho alguma dúvida",
    src: "I have some doubt",
  },
  {
    target: "Não tenho alguma dúvida",
    src: "I don't have any doubt",
  },
  {
    target: "Eu preciso de alguma ajuda",
    src: "I need some help",
  },
  {
    target: "O início das aulas será na próxima semana",
    src: "The start of classes will be next week",
  },
  {
    target: "Desde o início do projeto, tivemos muitos desafios",
    src: "Since the beginning of the project, we have had many challenges",
  },
  {
    target: "No começo, eu não entendia nada",
    src: "At the beginning, I didn’t understand anything",
  },
  {
    target: "Vamos marcar o começo da reunião para as nove",
    src: "Let's schedule the start of the meeting for nine o'clock",
  },
  {
    target: "Vamos marcar o começo da reunião para as nove",
    src: "Let's schedule the start of the meeting for nine o'clock",
  },
  {
    target: "O início das atividades está previsto para setembro",
    src: "The beginning of activities is scheduled for September",
  },
  {
    target: "No começo do ano, sempre faço resoluções",
    src: "At the beginning of the year, I always make resolutions",
  },
  {
    target: "início de carreira",
    src: "career start",
  },
  {
    target: "começo de conversa",
    src: "beginning of a conversation",
  },
  {
    target: "Ontem foi um dia muito quente.",
    src: "Yesterday was a very hot day.",
  },
  {
    target: "Ele era um homem muito inteligente.",
    src: "He was a very intelligent man.",
  },
  {
    target: "Eu fui à festa, mas não me diverti muito.",
    src: "I went to the party, but I didn't have much fun.",
  },
  {
    target: "Ela era uma professora muito dedicada.",
    src: "She was a very dedicated teacher.",
  },
  {
    target: "Nós fomos ao parque e brincamos o dia todo.",
    src: "We went to the park and played all day.",
  },
  {
    target: "Eles eram amigos de infância.",
    src: "They were childhood friends.",
  },
  {
    target:
      "Se você estudar todos os dias, então você aprenderá português rapidamente.",
    src: "If you study every day, then you will learn Portuguese quickly.",
  },
  {
    target: "Se chover amanhã, então nós não iremos ao parque.",
    src: "If it rains tomorrow, then we will not go to the park.",
  },
  {
    target: "Se você economizar dinheiro, então poderá comprar um carro novo.",
    src: "If you save money, then you can buy a new car.",
  },
  {
    target: "Se ela praticar esportes, então ela ficará mais saudável.",
    src: "If she practices sports, then she will become healthier.",
  },
  {
    target: "Se eu cozinhar hoje, então você lava a louça.",
    src: "If I cook today, then you wash the dishes.",
  },
  {
    target: "Se ele chegar cedo, então nós podemos sair para jantar.",
    src: "If he arrives early, then we can go out for dinner.",
  },
  {
    target: "Se você ler este livro, então entenderá melhor a história.",
    src: "If you read this book, then you will understand the story better.",
  },
  {
    target: "Se eles ganharem o jogo, então estarão na final.",
    src: "If they win the game, then they will be in the final.",
  },
  {
    target:
      "Se nós trabalharmos juntos, então terminaremos o projeto mais rápido.",
    src: "If we work together, then we will finish the project faster.",
  },
  {
    target: "Se você beber muita água, então você se sentirá mais hidratado.",
    src: "If you drink a lot of water, then you will feel more hydrated.",
  },
  {
    target: "Se você for ao supermercado, então compre leite, por favor.",
    src: "If you go to the supermarket, then buy milk, please.",
  },
  {
    target: "Se eles estudarem para o exame, então passarão com boas notas.",
    src: "If they study for the exam, then they will pass with good grades.",
  },
  {
    target: "Se o filme for bom, então vamos recomendá-lo aos amigos.",
    src: "If the movie is good, then we will recommend it to friends.",
  },
  {
    target: "Se eu me exercitar regularmente, então perderei peso.",
    src: "If I exercise regularly, then I will lose weight.",
  },
  {
    target: "Se você precisar de ajuda, então me ligue a qualquer hora.",
    src: "If you need help, then call me anytime.",
  },
  {
    target: "Se eles construírem a ponte, então a viagem será mais curta.",
    src: "If they build the bridge, then the journey will be shorter.",
  },
  {
    target:
      "Se a internet estiver funcionando, então poderemos assistir ao filme online.",
    src: "If the internet is working, then we can watch the movie online.",
  },
  {
    target: "Se eu ganhar na loteria, então viajarei pelo mundo.",
    src: "If I win the lottery, then I will travel around the world.",
  },
  {
    target: "Se nós plantarmos mais árvores, então o ar será mais limpo.",
    src: "If we plant more trees, then the air will be cleaner.",
  },
  {
    target: "Se você se levantar cedo, então terá mais tempo para estudar.",
    src: "If you get up early, then you will have more time to study.",
  },
  {
    target: "noventa e oito mil, setecentos e sessenta e cinco",
    src: "98765",
  },
  {
    target: "Eu fui ao mercado ontem.",
    src: "I went to the market yesterday.",
  },
  {
    target: "Ela estudou a noite toda para o exame.",
    src: "She studied all night for the exam.",
  },
  {
    target: "Nós viajamos para o Brasil no ano passado.",
    src: "We traveled to Brazil last year.",
  },
  {
    target: "Eles jogaram futebol no parque.",
    src: "They played soccer in the park.",
  },
  {
    target: "Ele comeu todo o bolo sozinho.",
    src: "He ate the whole cake by himself.",
  },
  {
    target: "Ontem, eu encontrei um amigo antigo na rua.",
    src: "Yesterday, I met an old friend on the street.",
  },
  {
    target: "Ela cantou no coral da escola.",
    src: "She sang in the school choir.",
  },
  {
    target: "Nós assistimos a um filme no cinema.",
    src: "We watched a movie at the cinema.",
  },
  {
    target: "Eu perdi meu celular na semana passada.",
    src: "I lost my cell phone last week.",
  },
  {
    target: "Ele escreveu uma carta para os pais.",
    src: "He wrote a letter to his parents.",
  },
  {
    target: "Eu estava aprendendo a tocar violão.",
    src: "I was learning to play the guitar.",
  },
  {
    target: "Ele estava pintando um quadro na sala.",
    src: "He was painting a picture in the living room.",
  },
  {
    target: "Nós estávamos construindo um novo site.",
    src: "We were building a new website.",
  },
  {
    target: "Ela estava fazendo um bolo de chocolate.",
    src: "She was making a chocolate cake.",
  },
  {
    target: "Eles estavam discutindo o projeto no escritório.",
    src: "They were discussing the project in the office.",
  },
  {
    target: "O cachorro estava correndo no quintal.",
    src: "The dog was running in the yard.",
  },
  {
    target: "Nós estávamos planejando nossas férias.",
    src: "We were planning our vacation.",
  },
  {
    target: "Ela estava desenhando um retrato do irmão.",
    src: "She was drawing a portrait of her brother.",
  },
  {
    target: "Eu estava organizando meus documentos.",
    src: "I was organizing my documents.",
  },
  {
    target: "O gato estava dormindo no sofá.",
    src: "The cat was sleeping on the couch.",
  },
  {
    target:
      "Em 1500, o navegador português Pedro Álvares Cabral chegou ao que hoje conhecemos como o Brasil, marcando o início da colonização portuguesa.",
    src: "In 1500, the Portuguese navigator Pedro Álvares Cabral arrived at what we now know as Brazil, marking the beginning of Portuguese colonization.",
  },
  {
    target:
      "A cidade de Salvador foi fundada em 1549 e tornou-se a primeira capital do Brasil, servindo como o centro administrativo da colônia por muitos anos.",
    src: "The city of Salvador was founded in 1549 and became the first capital of Brazil, serving as the administrative center of the colony for many years.",
  },
  {
    target:
      "Durante o século XVII, a descoberta de ouro em Minas Gerais atraiu muitos colonos e levou ao desenvolvimento econômico significativo da região.",
    src: "During the 17th century, the discovery of gold in Minas Gerais attracted many settlers and led to significant economic development in the region.",
  },
  {
    target:
      "Em 1822, Dom Pedro I proclamou a independência do Brasil em relação a Portugal, tornando-se o primeiro imperador do país.",
    src: "In 1822, Dom Pedro I proclaimed Brazil's independence from Portugal, becoming the country's first emperor.",
  },
  {
    target:
      "A abolição da escravatura no Brasil foi oficialmente decretada pela Lei Áurea em 1888, assinada pela Princesa Isabel, encerrando séculos de exploração escravista.",
    src: "The abolition of slavery in Brazil was officially decreed by the Lei Áurea in 1888, signed by Princess Isabel, ending centuries of enslavement.",
  },
  {
    target:
      "O Brasil se tornou uma república em 1889, quando um golpe militar destituiu o imperador Dom Pedro II e estabeleceu um governo provisório.",
    src: "Brazil became a republic in 1889 when a military coup deposed Emperor Dom Pedro II and established a provisional government.",
  },
  {
    target:
      "Durante a década de 1930, Getúlio Vargas assumiu a presidência e instituiu o Estado Novo, um regime autoritário que durou até 1945.",
    src: "During the 1930s, Getúlio Vargas took the presidency and instituted the Estado Novo, an authoritarian regime that lasted until 1945.",
  },
  {
    target:
      "Em 1964, um golpe militar levou à instalação de um regime ditatorial que governou o Brasil até 1985, período marcado por repressão política e censura.",
    src: "In 1964, a military coup led to the installation of a dictatorial regime that governed Brazil until 1985, a period marked by political repression and censorship.",
  },
  {
    target:
      "A Constituição de 1988, conhecida como a Constituição Cidadã, marcou o retorno à democracia e estabeleceu uma série de direitos civis e sociais para os brasileiros.",
    src: "The 1988 Constitution, known as the Citizen Constitution, marked the return to democracy and established a series of civil and social rights for Brazilians.",
  },
  {
    target:
      "Em 2016, a presidente Dilma Rousseff foi afastada do cargo após um processo de impeachment, resultando em uma mudança significativa no cenário político do país.",
    src: "In 2016, President Dilma Rousseff was removed from office after an impeachment process, resulting in a significant change in the country's political landscape.",
  },
  {
    target:
      "No verão passado, nós passamos uma semana inteira na praia de Copacabana, aproveitando o sol e o mar.",
    src: "Last summer, we spent an entire week at Copacabana Beach, enjoying the sun and the sea.",
  },
  {
    target:
      "Ontem, nós levamos um piquenique para a praia e passamos o dia inteiro relaxando na areia.",
    src: "Yesterday, we took a picnic to the beach and spent the whole day relaxing on the sand.",
  },
  {
    target:
      "As crianças estavam construindo castelos de areia enquanto os adultos jogavam vôlei de praia.",
    src: "The children were building sandcastles while the adults played beach volleyball.",
  },
  {
    target:
      "Nós chegamos cedo na praia para conseguir um bom lugar perto da água e montamos nossas cadeiras e guarda-sóis.",
    src: "We arrived early at the beach to get a good spot near the water and set up our chairs and umbrellas.",
  },
  {
    target:
      "Enquanto nadávamos no mar, vimos golfinhos nadando não muito longe da costa.",
    src: "While we were swimming in the sea, we saw dolphins swimming not far from the shore.",
  },
  {
    target:
      "Eu estava lendo um livro debaixo do guarda-sol quando um vendedor ambulante passou vendendo água de coco.",
    src: "I was reading a book under the umbrella when a street vendor passed by selling coconut water.",
  },
  {
    target:
      "Nós caminhamos pela orla da praia ao entardecer, aproveitando a brisa fresca e o som das ondas.",
    src: "We walked along the beach promenade at dusk, enjoying the cool breeze and the sound of the waves.",
  },
  {
    target:
      "Depois de passar o dia na praia, fomos a um restaurante à beira-mar para jantar frutos do mar frescos.",
    src: "After spending the day at the beach, we went to a seaside restaurant to have fresh seafood for dinner.",
  },
  {
    target:
      "Ela estava recolhendo conchas na beira da água quando encontrou uma estrela-do-mar.",
    src: "She was collecting shells at the water's edge when she found a starfish.",
  },
  {
    target:
      "Nós estávamos jogando frisbee na areia quando o sol começou a se pôr, criando um belo pôr do sol.",
    src: "We were playing frisbee on the sand when the sun began to set, creating a beautiful sunset.",
  },
  {
    target: "Amanhã, nós vamos visitar o novo museu que abriu na cidade.",
    src: "Tomorrow, we will visit the new museum that opened in the city.",
  },
  {
    target:
      "Na próxima semana, ela vai começar um curso de culinária italiana.",
    src: "Next week, she will start an Italian cooking course.",
  },
  {
    target:
      "Na segunda-feira, eu vou me encontrar com meu chefe para discutir o novo projeto.",
    src: "On Monday, I will meet with my boss to discuss the new project.",
  },
  {
    target:
      "No fim de semana, nós vamos fazer uma viagem para a serra para aproveitar a natureza.",
    src: "This weekend, we will take a trip to the mountains to enjoy nature.",
  },
  {
    target: "Eles vão lançar um novo filme no cinema na próxima sexta-feira.",
    src: "They will release a new movie in the cinema next Friday.",
  },
  {
    target:
      "Eu vou participar de uma conferência sobre tecnologia na próxima quarta-feira.",
    src: "I will attend a technology conference next Wednesday.",
  },
  {
    target:
      "Nós vamos organizar uma festa surpresa para o aniversário do nosso amigo.",
    src: "We will organize a surprise party for our friend's birthday.",
  },
  {
    target: "Ela vai visitar os avós no próximo fim de semana.",
    src: "She will visit her grandparents next weekend.",
  },
  {
    target: "Eles vão iniciar a construção da nova casa no mês que vem.",
    src: "They will start building the new house next month.",
  },
  {
    target: "Na próxima terça-feira, eu vou ao médico para um check-up.",
    src: "Next Tuesday, I will go to the doctor for a check-up.",
  },
  {
    target: "Em dez anos, nós vamos nos mudar para uma casa maior no campo.",
    src: "In ten years, we will move to a bigger house in the countryside.",
  },
  {
    target:
      "Ela vai se aposentar após trinta anos de serviço na mesma empresa.",
    src: "She will retire after thirty years of service at the same company.",
  },
  {
    target:
      "Daqui a vinte anos, eles vão celebrar seu jubileu de ouro de casamento.",
    src: "In twenty years, they will celebrate their golden wedding anniversary.",
  },
  {
    target:
      "Eu vou escrever um livro sobre minhas experiências de vida quando tiver sessenta anos.",
    src: "I will write a book about my life experiences when I am sixty years old.",
  },
  {
    target:
      "No futuro, a tecnologia vai avançar a um ponto em que os carros voadores serão comuns.",
    src: "In the future, technology will advance to a point where flying cars will be common.",
  },
  {
    target:
      "Quando ele se aposentar, vai viajar pelo mundo para conhecer novas culturas.",
    src: "When he retires, he will travel around the world to experience new cultures.",
  },
  {
    target:
      "Nós vamos plantar uma floresta no terreno da nossa família para as gerações futuras.",
    src: "We will plant a forest on our family land for future generations.",
  },
  {
    target:
      "Em cinquenta anos, as cidades vão ser mais sustentáveis e ecologicamente corretas.",
    src: "In fifty years, cities will be more sustainable and environmentally friendly.",
  },
  {
    target:
      "Ela vai receber um prêmio pelo seu trabalho inovador na ciência daqui a décadas.",
    src: "She will receive an award for her innovative work in science decades from now.",
  },
  {
    target:
      "No futuro, nossos netos vão viver em um mundo muito diferente do que conhecemos hoje.",
    src: "In the future, our grandchildren will live in a very different world from the one we know today.",
  },
  {
    target: "Um dia, os peixes vão aprender a falar e contar suas histórias.",
    src: "One day, fish will learn to talk and tell their stories.",
  },
  {
    target:
      "No futuro, os humanos vão ser capazes de respirar debaixo d'água sem qualquer equipamento.",
    src: "In the future, humans will be able to breathe underwater without any equipment.",
  },
  {
    target:
      "Eventualmente, nós vamos descobrir uma maneira de viajar no tempo e mudar o passado.",
    src: "Eventually, we will discover a way to travel through time and change the past.",
  },
  {
    target:
      "Um dia, todas as pessoas no mundo vão concordar em tudo e não haverá mais conflitos.",
    src: "One day, all people in the world will agree on everything and there will be no more conflicts.",
  },
  {
    target:
      "Os carros vão voar como aviões e não precisarão de estradas para se mover.",
    src: "Cars will fly like airplanes and won't need roads to move.",
  },
  {
    target:
      "Em algum momento, os animais selvagens vão começar a viver em casas com humanos como animais de estimação.",
    src: "At some point, wild animals will start living in houses with humans as pets.",
  },
  {
    target:
      "No futuro, todos os alimentos serão comprimidos que fornecem toda a nutrição necessária.",
    src: "In the future, all food will be pills that provide all necessary nutrition.",
  },
  {
    target:
      "Um dia, as pessoas vão desenvolver a habilidade de se teletransportar instantaneamente para qualquer lugar do mundo.",
    src: "One day, people will develop the ability to teleport instantly to any place in the world.",
  },
  {
    target:
      "No futuro, as máquinas vão fazer todo o trabalho humano, e ninguém mais precisará trabalhar.",
    src: "In the future, machines will do all human work, and no one will need to work anymore.",
  },
  {
    target:
      "Um dia, todos os humanos vão viver em paz eterna sem qualquer doença ou sofrimento.",
    src: "One day, all humans will live in eternal peace without any disease or suffering.",
  },
  {
    target:
      "Ele provavelmente nunca vai terminar aquele romance que começou há anos.",
    src: "He will probably never finish that novel he started years ago.",
  },
  {
    target:
      "Ela disse que um dia vai escalar o Monte Everest, mas isso provavelmente nunca vai acontecer.",
    src: "She said she would climb Mount Everest one day, but that will probably never happen.",
  },
  {
    target:
      "Nós sempre falamos sobre fazer uma viagem ao redor do mundo, mas nunca conseguimos planejar.",
    src: "We always talk about taking a trip around the world, but we never manage to plan it.",
  },
  {
    target:
      "Ele prometeu que iria aprender a tocar piano, mas parece que isso nunca vai acontecer.",
    src: "He promised he would learn to play the piano, but it seems that will never happen.",
  },
  {
    target:
      "Ela sempre sonhou em abrir seu próprio restaurante, mas talvez isso nunca se torne realidade.",
    src: "She always dreamed of opening her own restaurant, but maybe that will never come true.",
  },
  {
    target:
      "Eles falaram que vão se mudar para o campo, mas é improvável que deixem a cidade.",
    src: "They said they would move to the countryside, but it's unlikely they will leave the city.",
  },
  {
    target:
      "Eu sempre quis aprender a falar japonês, mas nunca encontrei tempo para isso.",
    src: "I always wanted to learn to speak Japanese, but I never found time for it.",
  },
  {
    target:
      "Ela disse que vai viajar para a lua quando a tecnologia permitir, mas isso provavelmente nunca vai acontecer.",
    src: "She said she would travel to the moon when technology allows, but that will probably never happen.",
  },
  {
    target:
      "Ele quer escrever uma autobiografia, mas duvido que ele realmente comece.",
    src: "He wants to write an autobiography, but I doubt he will actually start.",
  },
  {
    target:
      "Nós sempre falamos sobre reformar a casa, mas parece que nunca vamos começar.",
    src: "We always talk about renovating the house, but it seems we will never start.",
  },
  {
    target: "Eu nunca vou ganhar na loteria porque nunca compro bilhetes.",
    src: "I will never win the lottery because I never buy tickets.",
  },
  {
    target:
      "Ela nunca vai conseguir falar com dinossauros, pois eles estão extintos há milhões de anos.",
    src: "She will never be able to talk to dinosaurs because they have been extinct for millions of years.",
  },
  {
    target:
      "Eles nunca vão morar em Marte, já que não têm interesse em exploração espacial.",
    src: "They will never live on Mars since they have no interest in space exploration.",
  },
  {
    target:
      "Nós nunca vamos ver porcos voando, pois isso é biologicamente impossível.",
    src: "We will never see pigs fly because it is biologically impossible.",
  },
  {
    target:
      "Ele nunca vai se tornar presidente dos Estados Unidos porque não é cidadão americano.",
    src: "He will never become President of the United States because he is not an American citizen.",
  },
  {
    target: "Eu nunca vou crescer novamente porque sou um adulto.",
    src: "I will never grow taller again because I am an adult.",
  },
  {
    target: "Ela nunca vai viver para sempre, pois a imortalidade não existe.",
    src: "She will never live forever because immortality does not exist.",
  },
  {
    target:
      "Nós nunca vamos poder respirar no espaço sem ajuda, pois não há ar lá.",
    src: "We will never be able to breathe in space without assistance because there is no air there.",
  },
  {
    target:
      "Ele nunca vai viajar no tempo, já que isso é cientificamente impossível com a tecnologia atual.",
    src: "He will never time travel because it is scientifically impossible with current technology.",
  },
  {
    target:
      "Ela nunca vai se transformar em uma sereia porque sereias não existem.",
    src: "She will never transform into a mermaid because mermaids do not exist.",
  },
  {
    target:
      "No passado distante, as estrelas eram as únicas testemunhas dos segredos sussurrados pelo vento nas noites solitárias.",
    src: "In the distant past, the stars were the only witnesses to the secrets whispered by the wind on lonely nights.",
  },
  {
    target:
      "No futuro, quando as flores desabrocharem em campos esquecidos, os sonhos da humanidade florescerão junto com elas.",
    src: "In the future, when flowers bloom in forgotten fields, the dreams of humanity will blossom alongside them.",
  },
  {
    target:
      "No presente, cada pôr do sol pinta o céu com cores de esperança, lembrando-nos de que o amanhã sempre traz novas possibilidades.",
    src: "In the present, each sunset paints the sky with colors of hope, reminding us that tomorrow always brings new possibilities.",
  },
  {
    target:
      "Um dia, quando os rios pararem de fluir, as lembranças de nossos risos ecoarão nas margens silenciosas.",
    src: "One day, when rivers cease to flow, the memories of our laughter will echo on the silent banks.",
  },
  {
    target:
      "Ela sempre soube que seus sonhos eram como borboletas, frágeis e coloridas, voando livremente na brisa da manhã.",
    src: "She always knew her dreams were like butterflies, fragile and colorful, flying freely in the morning breeze.",
  },
  {
    target:
      "No futuro, os livros contarão histórias de um tempo em que os corações falavam a mesma língua, apesar das distâncias.",
    src: "In the future, books will tell stories of a time when hearts spoke the same language despite the distances.",
  },
  {
    target:
      "Naquele dia, quando o céu desabou em lágrimas, o amor floresceu como nunca antes, enraizado na terra molhada.",
    src: "On that day, when the sky collapsed in tears, love blossomed like never before, rooted in the wet earth.",
  },
  {
    target:
      "Em algum lugar, uma criança observa as estrelas e sonha com mundos além do alcance de nossa imaginação.",
    src: "Somewhere, a child watches the stars and dreams of worlds beyond the reach of our imagination.",
  },
  {
    target:
      "No silêncio da madrugada, as palavras não ditas entre nós se tornaram as mais profundas poesias de nosso amor.",
    src: "In the silence of dawn, the unspoken words between us became the deepest poetry of our love.",
  },
  {
    target:
      "Um dia, quando as árvores antigas contarem suas histórias ao vento, nossos nomes serão sussurrados entre as folhas.",
    src: "One day, when the ancient trees tell their stories to the wind, our names will be whispered among the leaves.",
  },
  {
    target:
      "A garota de Ipanema passa, e o mundo inteiro para só para vê-la caminhar.",
    src: "The girl from Ipanema passes by, and the whole world stops just to watch her walk.",
  },
  {
    target:
      "No meio do caminho havia um barquinho a vela, navegando no mar azul de Copacabana.",
    src: "In the middle of the way, there was a little sailboat, sailing in the blue sea of Copacabana.",
  },
  {
    target:
      "Quando o sol se põe, o céu se pinta de rosa, e meu coração canta uma melodia de amor.",
    src: "When the sun sets, the sky is painted pink, and my heart sings a melody of love.",
  },
  {
    target:
      "A chuva caía suavemente, e com ela vinha a lembrança do nosso primeiro beijo.",
    src: "The rain was falling gently, and with it came the memory of our first kiss.",
  },
  {
    target:
      "No balanço da rede, eu sonho com você e a brisa do mar embala nossa canção.",
    src: "In the sway of the hammock, I dream of you and the sea breeze cradles our song.",
  },
  {
    target:
      "O cheiro do jasmim no ar me faz lembrar dos seus abraços e dos dias que não vão voltar.",
    src: "The smell of jasmine in the air reminds me of your embraces and the days that won't come back.",
  },
  {
    target:
      "Caminhando pela praia, vejo nossas pegadas lado a lado, marcas do nosso amor na areia.",
    src: "Walking along the beach, I see our footprints side by side, marks of our love in the sand.",
  },
  {
    target:
      "A lua cheia no céu ilumina a nossa dança, e o mundo inteiro parece parar para nos ver.",
    src: "The full moon in the sky lights up our dance, and the whole world seems to stop to watch us.",
  },
  {
    target:
      "O violão toca suavemente, e cada acorde é uma declaração de amor ao luar.",
    src: "The guitar plays softly, and each chord is a declaration of love under the moonlight.",
  },
  {
    target:
      "No jardim, as flores se abrem com a sua chegada, e a natureza celebra nosso encontro.",
    src: "In the garden, the flowers bloom with your arrival, and nature celebrates our meeting.",
  },
  {
    target: "Quando ele chegar, avise-me.",
    src: "When he arrives, let me know.",
  },
  {
    target: "Assim que terminarmos o trabalho, podemos sair.",
    src: "As soon as we finish the work, we can leave.",
  },
  {
    target: "Se eu encontrar a chave, te aviso.",
    src: "If I find the key, I'll let you know.",
  },
  {
    target: "Quando vocês estiverem prontos, podemos começar.",
    src: "When you all are ready, we can start.",
  },
  {
    target: "Se eles vierem amanhã, faremos uma festa.",
    src: "If they come tomorrow, we'll have a party.",
  },
  {
    target: "Quando você tiver tempo, me ligue.",
    src: "When you have time, call me.",
  },
  {
    target: "Se você fizer isso, ficará feliz.",
    src: "If you do this, you will be happy.",
  },
  {
    target: "Assim que ele vir a notícia, ele entenderá.",
    src: "As soon as he sees the news, he will understand.",
  },
  {
    target: "Se nós pudermos ajudar, nos avise.",
    src: "If we can help, let us know.",
  },
  {
    target: "Quando ela disser a verdade, tudo ficará claro.",
    src: "When she tells the truth, everything will be clear.",
  },
  {
    target: "Se eu souber a resposta, te conto.",
    src: "If I know the answer, I'll tell you.",
  },
  {
    target: "Quando você encontrar o livro, me empreste.",
    src: "When you find the book, lend it to me.",
  },
  {
    target: "Assim que ele entender a lição, poderá explicar aos outros.",
    src: "As soon as he understands the lesson, he can explain it to others.",
  },
  {
    target: "Se nós tivermos tempo, faremos um piquenique.",
    src: "If we have time, we'll have a picnic.",
  },
];

export default phrases;
