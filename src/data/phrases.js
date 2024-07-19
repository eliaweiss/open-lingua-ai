const phrases = [
  { pt: "Qual é o seu nome?", en: "What is your name?" },
  { pt: "Qual é a sua idade?", en: "How old are you?" },
  { pt: "Qual é a sua profissão?", en: "What is your profession?" },
  { pt: "Qual é o seu endereço?", en: "What is your address?" },
  { pt: "Qual é o seu número de telefone?", en: "What is your phone number?" },
  { pt: "Qual é a sua nacionalidade?", en: "What is your nationality?" },
  {
    pt: "Qual é o seu time de futebol favorito?",
    en: "What is your favorite soccer team?",
  },
  { pt: "Qual é a data de hoje?", en: "What is today's date?" },
  { pt: "Qual é o seu filme favorito?", en: "What is your favorite movie?" },
  { pt: "Qual é a sua comida favorita?", en: "What is your favorite food?" },
  { pt: "Onde você mora?", en: "Where do you live?" },
  { pt: "Onde você trabalha?", en: "Where do you work?" },
  { pt: "Onde está o banheiro?", en: "Where is the bathroom?" },
  { pt: "Onde fica a estação de trem?", en: "Where is the train station?" },
  { pt: "Onde você nasceu?", en: "Where were you born?" },
  { pt: "Onde está o restaurante?", en: "Where is the restaurant?" },
  {
    pt: "Onde está o supermercado mais próximo?",
    en: "Where is the nearest supermarket?",
  },
  { pt: "Onde você estudou?", en: "Where did you study?" },
  { pt: "Onde está o ponto de ônibus?", en: "Where is the bus stop?" },
  { pt: "Onde você estava ontem?", en: "Where were you yesterday?" },
  { pt: "Meu nome é João.", en: "My name is João." },
  { pt: "Eu tenho 25 anos.", en: "I am 25 years old." },
  { pt: "Eu sou engenheiro.", en: "I am an engineer." },
  {
    pt: "Meu endereço é Rua das Flores, 123.",
    en: "My address is 123 Flowers Street.",
  },
  {
    pt: "Meu número de telefone é, (11) 98765-4321.",
    en: "My phone number is (11) 98765-4321.",
  },
  {
    pt: "Meu time de futebol favorito é o Flamengo.",
    en: "My favorite soccer team is Flamengo.",
  },
  { pt: "Hoje é 11 de junho de 2024.", en: "Today is June 11, 2024." },
  {
    pt: 'Meu filme favorito é "O Poderoso Chefão".',
    en: 'My favorite movie is "The Godfather".',
  },
  { pt: "Minha comida favorita é pizza.", en: "My favorite food is pizza." },
  { pt: "Eu moro em São Paulo.", en: "I live in São Paulo." },
  { pt: "Eu trabalho em um escritório.", en: "I work in an office." },
  { pt: "O banheiro está ali.", en: "The bathroom is over there." },
  {
    pt: "A estação de trem fica na próxima rua.",
    en: "The train station is on the next street.",
  },
  { pt: "Eu nasci em Rio de Janeiro.", en: "I was born in Rio de Janeiro." },
  {
    pt: "O restaurante está na esquina.",
    en: "The restaurant is on the corner.",
  },
  {
    pt: "O supermercado mais próximo está a duas quadras daqui.",
    en: "The nearest supermarket is two blocks away.",
  },
  {
    pt: "Eu estudei na Universidade de São Paulo.",
    en: "I studied at the University of São Paulo.",
  },
  {
    pt: "O ponto de ônibus está naquela direção.",
    en: "The bus stop is in that direction.",
  },
  { pt: "Eu estava em casa ontem.", en: "I was at home yesterday." },
  { pt: "Quanto custa isso?", en: "How much does this cost?" },
  { pt: "Eu não entendo.", en: "I don't understand." },
  { pt: "Você fala inglês?", en: "Do you speak English?" },
  { pt: "Eu preciso de um médico.", en: "I need a doctor." },
  { pt: "Onde fica o hotel?", en: "Where is the hotel?" },
  { pt: "Pode repetir, por favor?", en: "Can you repeat, please?" },
  { pt: "A escola fica perto daqui", en: "The school is near here" },
  { pt: "Ele vai ficar em casa hoje", en: "He will stay at home today" },
  { pt: "Fique aqui enquanto eu saio", en: "Stay here while I go out" },
  { pt: "Ele ficou triste com a notícia", en: "He became sad with the news" },
  { pt: "O tempo ficou quente", en: "The weather became hot" },
  {
    pt: "Eu gostaria de uma mesa para duas pessoas.",
    en: "I would like a table for two, please.",
  },
  {
    pt: "Qual é o horário de funcionamento?",
    en: "What are the opening hours?",
  },
  { pt: "Posso pagar com cartão?", en: "Can I pay with a card?" },
  { pt: "Claro, estou aqui para ajudar.", en: "Of course, I'm here to help." },
  { pt: "Isso custa R$ 20.", en: "That costs $20." },
  {
    pt: "Você pode explicar de forma diferente?",
    en: "Can you explain it differently?",
  },
  {
    pt: "Sim, eu falo inglês fluentemente.",
    en: "Yes, I speak English fluently.",
  },
  {
    pt: "Vou chamar um médico imediatamente.",
    en: "I will call a doctor immediately.",
  },
  {
    pt: "O hotel fica na rua principal.",
    en: "The hotel is on the main street.",
  },
  { pt: "Claro, eu posso repetir.", en: "Sure, I can repeat." },
  {
    pt: "Certamente, vou providenciar uma mesa para duas pessoas.",
    en: "Certainly, I will arrange a table for two.",
  },
  {
    pt: "Estamos abertos das 9h às 18h, de segunda a sexta-feira.",
    en: "We are open from 9am to 6pm, Monday to Friday.",
  },
  {
    pt: "Sim, aceitamos cartões de crédito e débito.",
    en: "Yes, we accept credit and debit cards.",
  },
  {
    pt: "um dois três quatro cinco seis sete oito nove dez",
    en: "count 1 to 10",
  },
  {
    pt: "onze doze treze quatorze quinze dezesseis dezessete dezoito dezenove vinte",
    en: "count 11 to 20",
  },
  {
    pt: "domingo segunda-feira terça-feira quarta-feira quinta-feira sexta-feira sábado",
    en: "days of week",
  },
  {
    pt: "janeiro fevereiro março abril maio junho julho agosto setembro outubro novembro dezembro",
    en: "name of months",
  },
  { pt: "Como você se chama?", en: "What is your name?" },
  { pt: "Prazer em conhecê-lo.", en: "Nice to meet you." },
  { pt: "Posso te fazer uma pergunta?", en: "Can I ask you a question?" },
  {
    pt: "Desculpe, como faço para chegar ao parque?",
    en: "Excuse me, how do I get to the park?",
  },
  { pt: "Quanto custa um celular?", en: "How much does a cell phone cost?" },
  { pt: "Onde posso encontrar chocolate?", en: "Where can I find chocolate?" },
  { pt: "Você sabe que horas são?", en: "Do you know what time it is?" },
  { pt: "Que dia é hoje?", en: "What day is it today?" },
  { pt: "Onde fica o banheiro?", en: "Where is the bathroom?" },
  { pt: "Posso usar o seu Wi-Fi?", en: "Can I use your Wi-Fi?" },
  { pt: "Onde posso comer algo?", en: "Where can I eat something?" },
  { pt: "De nada.", en: "You're welcome." },
  { pt: "Não sei.", en: "I don't know." },
  { pt: "Posso te ajudar?", en: "Can I help you?" },
  { pt: "Fale mais devagar.", en: "Speak more slowly." },
  { pt: "Não entendi.", en: "I didn't understand." },
  {
    pt: "Você pode me recomendar um livro?",
    en: "Can you recommend a book to me?",
  },
  { pt: "Você tem uma xícara de chá?", en: "Do you have a cup of tea?" },
  { pt: "Eu quero uma fatia de bolo.", en: "I want a slice of cake." },
  {
    pt: "Preciso de uma carona para o aeroporto.",
    en: "I need a ride to the airport.",
  },
  { pt: "Posso entrar?", en: "May I come in?" },
  { pt: "Posso sentar aqui?", en: "May I sit here?" },
  { pt: "Você está ocupado?", en: "Are you busy?" },
  { pt: "Posso te fazer companhia?", en: "Can I join you?" },
  { pt: "Posso pegar emprestado seu carro?", en: "Can I borrow your car?" },
  { pt: "Posso usar seu telefone?", en: "Can I use your phone?" },
  { pt: "Posso abrir a janela?", en: "Can I open the window?" },
  { pt: "Posso falar com o gerente?", en: "Can I speak with the manager?" },
  { pt: "Posso tirar uma foto?", en: "Can I take a picture?" },
  { pt: "Posso levar isso?", en: "Can I take this?" },
  { pt: "Será que eu posso te ajudar?", en: "I wonder if I can help you?" },
  {
    pt: "Você me permite pegar emprestado seu carro?",
    en: "Do you allow me to borrow your car?",
  },
  {
    pt: "dez vinte trinta quarenta cinquenta sessenta setenta oitenta noventa cem",
    en: "count 10 to 100",
  },

  { pt: "É possível eu entrar?", en: "Is it possible for me to come in?" },
  { pt: "Tem como eu sentar aqui?", en: "Is there a way for me to sit here?" },
  {
    pt: "Será que eu posso usar seu telefone?",
    en: "I wonder if I can use your phone?",
  },
  {
    pt: "Você me permite abrir a janela?",
    en: "Do you allow me to open the window?",
  },
  {
    pt: "É possível eu falar com o gerente?",
    en: "Is it possible for me to speak with the manager?",
  },
  {
    pt: "Tem como eu pagar com cartão?",
    en: "Is there a way for me to pay with a card?",
  },
  {
    pt: "Será que eu posso tirar uma foto?",
    en: "I wonder if I can take a picture?",
  },
  { pt: "Você me permite levar isso?", en: "Do you allow me to take this?" },
  { pt: "Você pode me ajudar?", en: "Can you help me?" },
  { pt: "Você pode falar mais devagar?", en: "Can you speak more slowly?" },
  { pt: "Você pode me dar uma carona?", en: "Can you give me a ride?" },
  { pt: "Você pode me emprestar um livro?", en: "Can you lend me a book?" },
  { pt: "Você pode abrir a porta?", en: "Can you open the door?" },
  { pt: "Você pode fechar a janela?", en: "Can you close the window?" },
  { pt: "Você pode me dizer as horas?", en: "Can you tell me the time?" },
  { pt: "Você pode me mostrar o caminho?", en: "Can you show me the way?" },
  {
    pt: "Você pode me enviar o documento?",
    en: "Can you send me the document?",
  },
  { pt: "Você pode repetir a pergunta?", en: "Can you repeat the question?" },
  {
    pt: "Como faço para chegar ao centro da cidade?",
    en: "How do I get to the city center?",
  },
  {
    pt: "Onde fica a estação de metrô mais próxima?",
    en: "Where is the nearest subway station?",
  },
  {
    pt: "Siga em frente e vire à esquerda.",
    en: "Go straight ahead and turn left.",
  },
  {
    pt: "A farmácia fica ao lado do supermercado.",
    en: "The pharmacy is next to the supermarket.",
  },
  { pt: "Você pode me mostrar no mapa?", en: "Can you show me on the map?" },
  {
    pt: "O hotel fica a duas quadras daqui.",
    en: "The hotel is two blocks from here.",
  },
  {
    pt: "Atravesse a rua e continue reto.",
    en: "Cross the street and keep going straight.",
  },
  {
    pt: "A estação de trem fica à direita depois do parque.",
    en: "The train station is to the right after the park.",
  },
  { pt: "Onde posso pegar um táxi?", en: "Where can I get a taxi?" },
  {
    pt: "O banco fica em frente à praça.",
    en: "The bank is in front of the square.",
  },
  { pt: "Qual é o prato do dia?", en: "What is the dish of the day?" },
  {
    pt: "Eu gostaria de uma salada, por favor.",
    en: "I would like a salad, please.",
  },
  {
    pt: "Você tem opções vegetarianas?",
    en: "Do you have vegetarian options?",
  },
  { pt: "Essa sopa está deliciosa!", en: "This soup is delicious!" },
  { pt: "Posso ver o cardápio, por favor?", en: "Can I see the menu, please?" },
  { pt: "Eu quero um café sem açúcar.", en: "I want a coffee without sugar." },
  {
    pt: "O que você recomenda para sobremesa?",
    en: "What do you recommend for dessert?",
  },
  {
    pt: "O frango grelhado vem com quais acompanhamentos?",
    en: "What sides come with the grilled chicken?",
  },
  { pt: "Eu sou alérgico a amendoim.", en: "I am allergic to peanuts." },
  { pt: "A conta, por favor.", en: "The check, please." },
  {
    pt: "Com licença, onde fica o banheiro?",
    en: "Excuse me, where is the bathroom?",
  },
  {
    pt: "Com licença, você pode repetir, por favor?",
    en: "Excuse me, can you repeat that, please?",
  },
  { pt: "Com licença, posso passar?", en: "Excuse me, can I pass through?" },
  {
    pt: "Com licença, há Wi-Fi disponível aqui?",
    en: "Excuse me, is there Wi-Fi available here?",
  },
  {
    pt: "Com licença, este lugar está ocupado?",
    en: "Excuse me, is this seat taken?",
  },
  {
    pt: "Com licença, você pode me dizer como chegar à estação de trem?",
    en: "Excuse me, can you tell me how to get to the train station?",
  },
  {
    pt: "Com licença, onde posso encontrar um caixa eletrônico?",
    en: "Excuse me, where can I find an ATM?",
  },
  {
    pt: "Com licença, você pode me emprestar um lápis?",
    en: "Excuse me, can you lend me a pencil?",
  },

  { pt: "Olá, como você está?", en: "Hello, how are you?" },
  {
    pt: "Bom dia! Espero que você tenha um ótimo dia.",
    en: "Good morning! I hope you have a great day.",
  },
  {
    pt: "Boa tarde, vamos tomar um café?",
    en: "Good afternoon, shall we have a coffee?",
  },
  {
    pt: "Boa noite, durma bem e sonhe com os anjos.",
    en: "Good night, sleep well and dream with the angels.",
  },
  {
    pt: "Como vai? Faz tempo que não nos vemos!",
    en: "How are you? Long time no see!",
  },
  { pt: "Tudo bem, e com você?", en: "Everything is fine, and with you?" },
  {
    pt: "Obrigado por me ajudar com a mudança.",
    en: "Thank you for helping me with the move.",
  },
  {
    pt: "Obrigada pela sua generosidade.",
    en: "Thank you for your generosity.",
  },
  { pt: "Por favor, me passe o sal.", en: "Please, pass me the salt." },
  {
    pt: "Desculpe pelo atraso, o trânsito estava horrível.",
    en: "Sorry for being late, the traffic was terrible.",
  },
  { pt: "Eu só preciso de um minuto.", en: "I just need one minute." },
  {
    pt: "Eu tenho dois cachorros e um gato.",
    en: "I have two dogs and one cat.",
  },
  {
    pt: "Três amigos vieram me visitar ontem.",
    en: "Three friends came to visit me yesterday.",
  },
  { pt: "Quatro estações formam um ano.", en: "Four seasons make a year." },
  { pt: "Cinco estrelas brilham no céu.", en: "Five stars shine in the sky." },
  { pt: "Ele comprou seis livros novos.", en: "He bought six new books." },
  {
    pt: "Sete dias se passaram desde que nos vimos.",
    en: "Seven days have passed since we last saw each other.",
  },
  {
    pt: "Oito horas é o horário de início da aula.",
    en: "Eight o'clock is the start time of the class.",
  },
  {
    pt: "Nove vidas tem um gato, dizem.",
    en: "A cat has nine lives, they say.",
  },
  { pt: "Eu tenho dez dedos nas mãos.", en: "I have ten fingers on my hands." },
  {
    pt: "Na segunda-feira começo minha nova dieta.",
    en: "On Monday I start my new diet.",
  },
  {
    pt: "Terça-feira é dia de cinema com os amigos.",
    en: "Tuesday is movie day with friends.",
  },
  {
    pt: "Na quarta-feira temos uma reunião importante.",
    en: "On Wednesday we have an important meeting.",
  },
  {
    pt: "Quinta-feira é meu dia favorito da semana.",
    en: "Thursday is my favorite day of the week.",
  },
  {
    pt: "Sexta-feira à noite vou sair para jantar.",
    en: "Friday night I'm going out for dinner.",
  },
  {
    pt: "Sábado é dia de descansar e relaxar.",
    en: "Saturday is a day to rest and relax.",
  },
  {
    pt: "Domingo vamos fazer um piquenique no parque.",
    en: "Sunday we are going to have a picnic in the park.",
  },
  {
    pt: "Eu sou feliz quando estou na praia.",
    en: "I am happy when I am at the beach.",
  },
  {
    pt: "Eu estou cansado depois de um longo dia de trabalho.",
    en: "I am tired after a long day at work.",
  },
  {
    pt: "Eu tenho um carro vermelho que adoro dirigir.",
    en: "I have a red car that I love to drive.",
  },
  {
    pt: "Eu faço bolos deliciosos para festas.",
    en: "I make delicious cakes for parties.",
  },
  {
    pt: "Eu vou à escola todos os dias de bicicleta.",
    en: "I go to school every day by bike.",
  },
  {
    pt: "Eu posso cantar em português e inglês.",
    en: "I can sing in Portuguese and English.",
  },
  {
    pt: "Eu vejo o pôr do sol da minha varanda.",
    en: "I see the sunset from my balcony.",
  },
  {
    pt: "Eu ouço música clássica enquanto estudo.",
    en: "I listen to classical music while I study.",
  },
  {
    pt: "Eu falo português fluentemente e estou aprendendo francês.",
    en: "I speak Portuguese fluently and am learning French.",
  },
  {
    pt: "Minha casa é pequena, mas muito aconchegante.",
    en: "My house is small but very cozy.",
  },
  {
    pt: "Meu carro azul é o mais rápido da rua.",
    en: "My blue car is the fastest on the street.",
  },
  {
    pt: "A escola está cheia de alunos animados.",
    en: "The school is full of excited students.",
  },
  {
    pt: "Eu amo meu trabalho porque é desafiador e gratificante.",
    en: "I love my job because it is challenging and rewarding.",
  },
  {
    pt: "Minha família é muito unida e amorosa.",
    en: "My family is very close-knit and loving.",
  },
  {
    pt: "Meu amigo e eu gostamos de jogar futebol aos finais de semana.",
    en: "My friend and I like to play soccer on weekends.",
  },
  {
    pt: "Comida caseira é sempre a melhor.",
    en: "Homemade food is always the best.",
  },
  { pt: "Eu bebo água fresca da nascente.", en: "I drink fresh spring water." },
  {
    pt: "Ele ganhou muito dinheiro com seu novo negócio.",
    en: "He made a lot of money with his new business.",
  },
  {
    pt: "O carro esportivo vermelho é impressionante.",
    en: "The red sports car is impressive.",
  },
  {
    pt: "O céu azul claro estava sem nuvens.",
    en: "The light blue sky was cloudless.",
  },
  {
    pt: "A floresta verdejante é um refúgio tranquilo.",
    en: "The lush green forest is a tranquil retreat.",
  },
  {
    pt: "As flores amarelas iluminam o jardim.",
    en: "The yellow flowers brighten the garden.",
  },
  {
    pt: "A noite estava tão escura quanto preta.",
    en: "The night was as dark as black.",
  },
  {
    pt: "A neve branca cobriu toda a cidade.",
    en: "The white snow covered the entire city.",
  },
  {
    pt: "Eu adoro comer pão fresco de manhã.",
    en: "I love eating fresh bread in the morning.",
  },
  {
    pt: "Eu tomo um copo de leite todas as noites.",
    en: "I have a glass of milk every night.",
  },
  {
    pt: "Eu não consigo começar o dia sem uma xícara de café.",
    en: "I can't start the day without a cup of coffee.",
  },
  {
    pt: "O queijo francês é o meu favorito.",
    en: "French cheese is my favorite.",
  },
  {
    pt: "Frango assado é perfeito para o jantar.",
    en: "Roast chicken is perfect for dinner.",
  },
  {
    pt: "Eu prefiro peixe grelhado ao invés de frito.",
    en: "I prefer grilled fish over fried.",
  },
  {
    pt: "Uma maçã por dia mantém o médico longe.",
    en: "An apple a day keeps the doctor away.",
  },
  {
    pt: "Bananas são ótimas para um lanche rápido.",
    en: "Bananas are great for a quick snack.",
  },
  {
    pt: "Meu pai me ensinou a andar de bicicleta.",
    en: "My father taught me how to ride a bike.",
  },
  {
    pt: "Minha mãe faz o melhor bolo de chocolate.",
    en: "My mother makes the best chocolate cake.",
  },
  {
    pt: "Meu irmão mais novo adora videogames.",
    en: "My younger brother loves video games.",
  },
  {
    pt: "Minha irmã mais velha é uma excelente pianista.",
    en: "My older sister is an excellent pianist.",
  },
  {
    pt: "Meu avô sempre conta histórias fascinantes.",
    en: "My grandfather always tells fascinating stories.",
  },
  {
    pt: "Minha avó cozinha pratos deliciosos.",
    en: "My grandmother cooks delicious dishes.",
  },
  {
    pt: "Meu tio é um talentoso artista.",
    en: "My uncle is a talented artist.",
  },
  {
    pt: "Minha tia tem uma loja de roupas elegante.",
    en: "My aunt owns a stylish clothing store.",
  },
  {
    pt: "Vamos nos encontrar amanhã para discutir o projeto.",
    en: "Let’s meet tomorrow to discuss the project.",
  },
  {
    pt: "Amanhã será um novo dia, cheio de possibilidades.",
    en: "Tomorrow will be a new day, full of possibilities.",
  },
  {
    pt: "Eu vou começar minha nova rotina de exercícios amanhã.",
    en: "I will start my new exercise routine tomorrow.",
  },
  {
    pt: "Amanhã, a previsão do tempo diz que vai chover.",
    en: "Tomorrow, the weather forecast says it will rain.",
  },
  {
    pt: "Não se preocupe, vamos resolver isso amanhã.",
    en: "Don’t worry, we’ll sort this out tomorrow.",
  },
  {
    pt: "A festa de aniversário é amanhã à noite.",
    en: "The birthday party is tomorrow night.",
  },
  {
    pt: "Vou terminar de ler este livro amanhã.",
    en: "I will finish reading this book tomorrow.",
  },
  {
    pt: "Amanhã é o último dia para se inscrever no curso.",
    en: "Tomorrow is the last day to register for the course.",
  },
  {
    pt: "Amanhã vou visitar meus avós no campo.",
    en: "Tomorrow I will visit my grandparents in the countryside.",
  },
  {
    pt: "Nós vamos começar o projeto amanhã de manhã.",
    en: "We will start the project tomorrow morning.",
  },
  {
    pt: "Maioria das ondas formada pelos ver a força do vento",
    en: "Most waves formed by the force of the wind.",
  },
  {
    pt: "Manda as imagens e sons pelo ar.",
    en: "sends images and sounds through the air.",
  },
  {
    pt: "Se tiver mais alguma dúvida ou quiser saber mais sobre qualquer coisa, é só falar!",
    en: "If you have any further questions or want to know more about anything, just ask!",
  },
  {
    pt: "As imagens que você vê e os sons que você ouve",
    en: "the images you see and the sounds you hear.",
  },
  {
    pt: "Bilhete, por favor",
    en: "Ticket, please",
  },
  {
    pt: 'Você pode comprar a passagem na rodoviária, procure a placa que diz "Bilhete" ou "Guichê"',
    en: "You can buy a ticket at the bus station, look for the sign that says Ticket or Counter",
  },

  {
    pt: "Como posso chegar ao aeroporto?",
    en: "How can I get to the airport?",
  },
  {
    pt: "Você tem algum livro de ficção científica?",
    en: "Do you have any science fiction books?",
  },
  {
    pt: "O que você acha desta situação?",
    en: "What do you think about this situation?",
  },
  { pt: "Podemos nos encontrar na praça?", en: "Can we meet at the square?" },
  {
    pt: "Quando começa a apresentação?",
    en: "When does the presentation start?",
  },
  {
    pt: "Eu perdi minha carteira, você pode me ajudar?",
    en: "I lost my wallet, can you help me?",
  },
  {
    pt: "Quanto tempo leva para fazer esse prato?",
    en: "How long does it take to make this dish?",
  },
  { pt: "Onde posso comprar selos?", en: "Where can I buy stamps?" },
  {
    pt: "Você sabe onde fica a livraria?",
    en: "Do you know where the bookstore is?",
  },
  { pt: "A que horas o banco abre?", en: "What time does the bank open?" },
  {
    pt: "Eu gostaria de cancelar minha reserva.",
    en: "I would like to cancel my reservation.",
  },
  {
    pt: "Você pode me mostrar o caminho para o museu?",
    en: "Can you show me the way to the museum?",
  },
  {
    pt: "Qual é a melhor maneira de aprender português?",
    en: "What is the best way to learn Portuguese?",
  },
  {
    pt: "Podemos remarcar nossa reunião para quarta-feira?",
    en: "Can we reschedule our meeting for Wednesday?",
  },
  {
    pt: "Qual é o código de área desta cidade?",
    en: "What is the area code for this city?",
  },
  { pt: "Você pode me dar um desconto?", en: "Can you give me a discount?" },
  {
    pt: "Quais são as principais atrações turísticas aqui?",
    en: "What are the main tourist attractions here?",
  },
  {
    pt: "Qual é a previsão do tempo para amanhã?",
    en: "What is the weather forecast for tomorrow?",
  },
  {
    pt: "Você pode me ajudar a traduzir este documento?",
    en: "Can you help me translate this document?",
  },
  {
    pt: "Qual é a taxa de câmbio hoje?",
    en: "What is the exchange rate today?",
  },
  {
    pt: "Eu preciso ir ao consulado, você sabe onde é?",
    en: "I need to go to the consulate, do you know where it is?",
  },
  {
    pt: "Você pode me recomendar um restaurante típico da região?",
    en: "Can you recommend a typical restaurant in the area?",
  },
  { pt: "Qual é o número de emergência?", en: "What is the emergency number?" },
  {
    pt: "Você sabe onde eu posso alugar um carro?",
    en: "Do you know where I can rent a car?",
  },
  { pt: "Podemos pedir uma pizza?", en: "Can we order a pizza?" },
  {
    pt: "Você tem algum remédio para dor de cabeça?",
    en: "Do you have any headache medicine?",
  },
  {
    pt: "Quanto custa uma passagem de ônibus?",
    en: "How much does a bus ticket cost?",
  },
  {
    pt: "Você sabe quando é o próximo jogo de futebol?",
    en: "Do you know when the next football game is?",
  },
  {
    pt: "Posso ter um recibo, por favor?",
    en: "Can I have a receipt, please?",
  },
  {
    pt: "Você conhece algum bom lugar para caminhar?",
    en: "Do you know any good places to hike?",
  },
  { pt: "Como faço para usar este aparelho?", en: "How do I use this device?" },
  { pt: "Você tem um mapa da cidade?", en: "Do you have a city map?" },
  { pt: "A que horas começa o filme?", en: "What time does the movie start?" },
  {
    pt: "Você podeme ajudar a carregar isso?",
    en: "Can you help me carry this?",
  },
  {
    pt: "Você conhece um bom professor de português?",
    en: "Do you know a good Portuguese teacher?",
  },
  { pt: "Qual é a senha do Wi-Fi?", en: "What is the Wi-Fi password?" },
  {
    pt: "Você pode me dizer onde fica a saída de emergência?",
    en: "Can you tell me where the emergency exit is?",
  },
  {
    pt: "Eu gostaria de fazer uma reserva para sexta-feira.",
    en: "I would like to make a reservation for Friday.",
  },
  {
    pt: "Você sabe onde posso fazer uma cópia das chaves?",
    en: "Do you know where I can make a copy of the keys?",
  },
  {
    pt: "Qual é o melhor horário para visitar o museu?",
    en: "What is the best time to visit the museum?",
  },
  {
    pt: "Você tem um carregador de telefone que eu possa usar?",
    en: "Do you have a phone charger I can use?",
  },
  {
    pt: "Onde posso encontrar uma farmácia aberta?",
    en: "Where can I find an open pharmacy?",
  },
  {
    pt: "Você sabe onde posso comprar um cartão SIM local?",
    en: "Do you know where I can buy a local SIM card?",
  },
  {
    pt: "Qual é o melhor local para assistir ao pôr do sol?",
    en: "What is the best place to watch the sunset?",
  },
  {
    pt: "Você pode me dizer como chegar ao zoológico?",
    en: "Can you tell me how to get to the zoo?",
  },
  {
    pt: "Quanto tempo demora para chegar ao centro da cidade?",
    en: "How long does it take to get to the city center?",
  },
  { pt: "Onde posso comprar lembranças?", en: "Where can I buy souvenirs?" },
  {
    pt: "Você sabe onde fica o posto de turismo?",
    en: "Do you know where the tourist office is?",
  },
  {
    pt: "Você pode me indicar um bom local para tomar café?",
    en: "Can you recommend a good place to have coffee?",
  },
  {
    pt: "Você conhece algum serviço de táxi confiável?",
    en: "Do you know any reliable taxi services?",
  },
  { pt: "Onde posso trocar dinheiro?", en: "Where can I exchange money?" },
  {
    pt: "Você pode verificar se isso está correto?",
    en: "Can you check if this is correct?",
  },
  {
    pt: "Posso deixar minha bagagem aqui?",
    en: "Can I leave my luggage here?",
  },
  {
    pt: "Qual é a distância até a praia?",
    en: "What is the distance to the beach?",
  },
  {
    pt: "Você sabe onde posso alugar uma bicicleta?",
    en: "Do you know where I can rent a bike?",
  },
  {
    pt: "Onde posso comprar ingressos para o concerto?",
    en: "Where can I buy tickets for the concert?",
  },
  {
    pt: "Você pode me ajudar a encontrar um bom hotel?",
    en: "Can you help me find a good hotel?",
  },
  {
    pt: "A que horas o mercado fecha?",
    en: "What time does the market close?",
  },
  {
    pt: "Você sabe onde posso assistir a um filme em inglês?",
    en: "Do you know where I can watch a movie in English?",
  },
  {
    pt: "Você pode me ajudar a configurar meu telefone?",
    en: "Can you help me set up my phone?",
  },
  {
    pt: "Onde posso encontrar uma lavanderia?",
    en: "Where can I find a laundromat?",
  },
  {
    pt: "Você tem alguma sugestão de atividades para crianças?",
    en: "Do you have any suggestions for activities for children?",
  },
  {
    pt: "Você pode me indicar um bom lugar para nadar?",
    en: "Can you recommend a good place to swim?",
  },
  {
    pt: "Onde posso comprar produtos locais?",
    en: "Where can I buy local products?",
  },
  {
    pt: "Você sabe onde posso fazer um seguro de viagem?",
    en: "Do you know where I can get travel insurance?",
  },
  {
    pt: "Quanto custa o aluguel de um carro por um dia?",
    en: "How much does it cost to rent a car for one day?",
  },
  {
    pt: "Você sabe onde posso obter informações sobre excursões locais?",
    en: "Do you know where I can get information about local tours?",
  },
  {
    pt: "Você conhece algum lugar tranquilo para estudar?",
    en: "Do you know a quiet place to study?",
  },
  {
    pt: "Onde posso comprar um cartão de transporte público?",
    en: "Where can I buy a public transport card?",
  },
  {
    pt: "Você sabe onde posso fazer um teste de COVID-19?",
    en: "Do you know where I can get a COVID-19 test?",
  },
  {
    pt: "Você pode me ajudar a encontrar um médico que fale inglês?",
    en: "Can you help me find a doctor who speaks English?",
  },
  {
    pt: "Você sabe onde posso fazer uma aula de surf?",
    en: "Do you know where I can take a surf lesson?",
  },
  {
    pt: "Onde posso encontrar um bom restaurante de frutos do mar?",
    en: "Where can I find a good seafood restaurant?",
  },
  {
    pt: "Você sabe onde posso comprar equipamento de mergulho?",
    en: "Do you know where I can buy diving equipment?",
  },
  {
    pt: "Onde posso assistir a uma apresentação de música ao vivo?",
    en: "Where can I watch a live music performance?",
  },
  {
    pt: "Você pode me indicar um bom bar?",
    en: "Can you recommend a good bar?",
  },
  {
    pt: "Você sabe onde posso alugar equipamento de esqui?",
    en: "Do you know where I can rent ski equipment?",
  },
  {
    pt: "Onde posso encontrar uma boa pizzaria?",
    en: "Where can I find a good pizzeria?",
  },
  {
    pt: "Você sabe onde posso tirar fotos?",
    en: "Do you know where I can take photos?",
  },
  {
    pt: "Você conhece algum lugar para fazer escalada?",
    en: "Do you know any places to go climbing?",
  },
  { pt: "Onde posso comprar um presente?", en: "Where can I buy a gift?" },
  {
    pt: "Você sabe onde posso encontrar uma boa padaria?",
    en: "Do you know where I can find a good bakery?",
  },
  {
    pt: "Onde posso alugar um apartamento?",
    en: "Where can I rent an apartment?",
  },
  {
    pt: "Você sabe onde posso fazer aulas de dança?",
    en: "Do you know where I can take dance classes?",
  },
  {
    pt: "Onde posso comprar roupas de banho?",
    en: "Where can I buy swimwear?",
  },
  {
    pt: "Você sabe onde posso comprar um guia turístico?",
    en: "Do you know where I can buy a travel guide?",
  },
  {
    pt: "Onde posso encontrar um bom café?",
    en: "Where can I find a good cafe?",
  },
  {
    pt: "Você sabe onde posso encontrar um bom parque?",
    en: "Do you know where I can find a good park?",
  },
  {
    pt: "Onde posso comprar um novo carregador para meu telefone?",
    en: "Where can I buy a new charger for my phone?",
  },
  {
    pt: "Você sabe onde posso alugar uma motocicleta?",
    en: "Do you know where I can rent a motorcycle?",
  },
  {
    pt: "Onde posso encontrar uma boa sorveteria?",
    en: "Where can I find a good ice cream shop?",
  },
  {
    pt: "Você sabe onde posso comprar um novo laptop?",
    en: "Do you know where I can buy a new laptop?",
  },
  {
    pt: "Onde posso encontrar um bom lugar para fazer um piquenique?",
    en: "Where can I find a good place for a picnic?",
  },
  {
    pt: "Você sabe onde posso comprar um guarda-chuva?",
    en: "Do you know where I can buy an umbrella?",
  },
  {
    pt: "Onde posso encontrar uma boa loja de chocolates?",
    en: "Where can I find a good chocolate shop?",
  },
  {
    pt: "Você sabe onde posso alugar um barco?",
    en: "Do you know where I can rent a boat?",
  },
  {
    pt: "Onde posso encontrar uma boa loja de artesanato?",
    en: "Where can I find a good craft store?",
  },
  {
    pt: "Você sabe onde posso comprar uma bicicleta nova?",
    en: "Do you know where I can buy a new bicycle?",
  },
  {
    pt: "Onde posso encontrar uma boa churrascaria?",
    en: "Where can I find a good steakhouse?",
  },
  {
    pt: "Você sabe onde posso fazer um passeio de balão?",
    en: "Do you know where I can take a balloon ride?",
  },
  { pt: "Onde posso comprar flores?", en: "Where can I buy flowers?" },
  {
    pt: "Você sabe onde posso encontrar uma boa loja de vinhos?",
    en: "Do you know where I can find a good wine shop?",
  },
  {
    pt: "Onde posso assistir a uma peça de teatro?",
    en: "Where can I watch a play?",
  },
  {
    pt: "Você sabe onde posso comprar um novo relógio?",
    en: "Do you know where I can buy a new watch?",
  },
  {
    pt: "Onde posso encontrar um bom restaurante italiano?",
    en: "Where can I find a good Italian restaurant?",
  },
  {
    pt: "Você sabe onde posso comprar uma câmera nova?",
    en: "Do you know where I can buy a new camera?",
  },
  {
    pt: "Onde posso encontrar uma boa galeria de arte?",
    en: "Where can I find a good art gallery?",
  },
  {
    pt: "Você sabe onde posso comprar especiarias locais?",
    en: "Do you know where I can buy local spices?",
  },
  {
    pt: "Onde posso encontrar uma boa livraria?",
    en: "Where can I find a good bookstore?",
  },
  {
    pt: "Você sabe onde posso fazer uma massagem?",
    en: "Do you know where I can get a massage?",
  },
  {
    pt: "Onde posso comprar um novo par de sapatos?",
    en: "Where can I buy a new pair of shoes?",
  },
  {
    pt: "Você sabe onde posso assistir a uma corrida de cavalos?",
    en: "Do you know where I can watch a horse race?",
  },
  {
    pt: "Onde posso encontrar um bom lugar para jogar golfe?",
    en: "Where can I find a good place to play golf?",
  },
  {
    pt: "Você sabe onde posso fazer uma tatuagem?",
    en: "Do you know where I can get a tattoo?",
  },
  {
    pt: "Onde posso comprar um novo telefone?",
    en: "Where can I buy a new phone?",
  },
  {
    pt: "Você sabe onde posso assistir a uma aula de ioga?",
    en: "Do you know where I can attend a yoga class?",
  },
  {
    pt: "Onde posso encontrar uma boa pousada?",
    en: "Where can I find a good inn?",
  },
  {
    pt: "Você sabe onde posso comprar uma nova mochila?",
    en: "Do you know where I can buy a new backpack?",
  },
  {
    pt: "Onde posso encontrar um bom lugar para observar pássaros?",
    en: "Where can I find a good place for bird watching?",
  },
  {
    pt: "Você sabe onde posso comprar uma nova câmera?",
    en: "Do you know where I can buy a new camera?",
  },
  {
    pt: "Onde posso comprar uma máquina de café?",
    en: "Where can I buy a coffee machine?",
  },
  {
    pt: "Você sabe onde posso comprar joias?",
    en: "Do you know where I can buy jewelry?",
  },
  {
    pt: "Onde posso encontrar uma boa sorveteria?",
    en: "Where can I find a good ice cream parlor?",
  },
  {
    pt: "Você sabe onde posso comprar livros usados?",
    en: "Do you know where I can buy used books?",
  },
  {
    pt: "Onde posso comprar uma nova bicicleta?",
    en: "Where can I buy a new bike?",
  },
  {
    pt: "Você sabe onde posso comprar um violão?",
    en: "Do you know where I can buy a guitar?",
  },
  {
    pt: "Onde posso encontrar um bom lugar para tomar chá?",
    en: "Where can I find a good place for tea?",
  },
  {
    pt: "Você sabe onde posso comprar uma câmera de filme?",
    en: "Do you know where I can buy a film camera?",
  },
  {
    pt: "O aeroporto fica a 30 minutos de carro daqui.",
    en: "The airport is a 30-minute drive from here.",
  },
  {
    pt: "Temos vários livros de ficção científica na prateleira ao fundo.",
    en: "We have several science fiction books on the back shelf.",
  },
  {
    pt: "Esta situação parece complicada, mas temos algumas opções.",
    en: "This situation seems complicated, but we have some options.",
  },
  {
    pt: "Podemos nos encontrar na praça às três da tarde.",
    en: "We can meet at the square at three in the afternoon.",
  },
  {
    pt: "A apresentação começa às 19h00 na sala de conferências.",
    en: "The presentation starts at 7:00 PM in the conference room.",
  },
  {
    pt: "Vou ajudá-lo a encontrar sua carteira. Onde você a viu pela última vez?",
    en: "I will help you find your wallet. Where did you see it last?",
  },
  {
    pt: "Esse prato leva cerca de 45 minutos para ser preparado.",
    en: "This dish takes about 45 minutes to prepare.",
  },
  {
    pt: "Você pode comprar selos na loja de conveniência na esquina.",
    en: "You can buy stamps at the convenience store on the corner.",
  },
  {
    pt: "A livraria fica a duas quadras daqui, na Rua Principal.",
    en: "The bookstore is two blocks from here, on Main Street.",
  },
  {
    pt: "O banco abre às 9h00 durante a semana.",
    en: "The bank opens at 9:00 AM on weekdays.",
  },
  {
    pt: "Sua reserva foi cancelada com sucesso.",
    en: "Your reservation has been successfully canceled.",
  },
  {
    pt: "Para chegar ao museu, continue reto por dois quarteirões e vire à direita.",
    en: "To get to the museum, continue straight for two blocks and turn right.",
  },
  {
    pt: "A melhor maneira de aprender português é praticar todos os dias e conversar com falantes nativos.",
    en: "The best way to learn Portuguese is to practice every day and converse with native speakers.",
  },
  {
    pt: "Nossa reunião foi remarcada para quarta-feira às 14h00.",
    en: "Our meeting has been rescheduled for Wednesday at 2:00 PM.",
  },
  {
    pt: "O código de área desta cidade é 21.",
    en: "The area code for this city is 21.",
  },
  {
    pt: "Posso oferecer um desconto de 10% no total da sua compra.",
    en: "I can offer a 10% discount on your total purchase.",
  },
  {
    pt: "As principais atrações turísticas são o museu de arte, o parque central e o antigo teatro.",
    en: "The main tourist attractions are the art museum, the central park, and the old theater.",
  },
  {
    pt: "A previsão do tempo para amanhã é de sol pela manhã com possibilidade de chuva à tarde.",
    en: "The weather forecast for tomorrow is sunny in the morning with a chance of rain in the afternoon.",
  },
  {
    pt: "Posso ajudá-lo com a tradução deste documento para o inglês.",
    en: "I can help you translate this document into English.",
  },
  {
    pt: "A taxa de câmbio hoje é de 1 dólar para 5,20 reais.",
    en: "The exchange rate today is 1 dollar to 5.20 reais.",
  },
  {
    pt: "O consulado fica no centro da cidade, próximo ao monumento histórico.",
    en: "The consulate is in the city center, near the historical monument.",
  },
  {
    pt: "Recomendo o restaurante 'Sabor Local', que serve pratos típicos da região.",
    en: "I recommend the 'Local Flavor' restaurant, which serves typical dishes of the region.",
  },
  {
    pt: "O número de emergência é 190 para polícia, 192 para ambulância e 193 para bombeiros.",
    en: "The emergency number is 190 for police, 192 for ambulance, and 193 for firefighters.",
  },
  {
    pt: "Você pode alugar um carrona agência localizada no aeroporto.",
    en: "You can rent a car at the agency located at the airport.",
  },
  {
    pt: "Sim, podemos pedir uma pizza. Temos um menu com várias opções aqui.",
    en: "Yes, we can order a pizza. We have a menu with various options here.",
  },
  {
    pt: "Temos um kit de primeiros socorros com remédio para dor de cabeça na recepção.",
    en: "We have a first aid kit with headache medicine at the reception.",
  },
  {
    pt: "Uma passagem de ônibus custa R$ 4,50.",
    en: "A bus ticket costs BRL 4.50.",
  },
  {
    pt: "O próximo jogo de futebol será neste sábado às 16h00 no estádio municipal.",
    en: "The next football game will be this Saturday at 4:00 PM at the municipal stadium.",
  },
  {
    pt: "Aqui está seu recibo, deseja mais alguma coisa?",
    en: "Here is your receipt, would you like anything else?",
  },
  {
    pt: "Existem várias trilhas para caminhada no parque nacional, que fica a 30 km daqui.",
    en: "There are several hiking trails in the national park, which is 30 km from here.",
  },
  {
    pt: "Este aparelho é muito simples de usar, deixe-me mostrar-lhe como funciona.",
    en: "This device is very simple to use, let me show you how it works.",
  },
  {
    pt: "Sim, temos um mapa da cidade disponível na recepção.",
    en: "Yes, we have a city map available at the reception.",
  },
  {
    pt: "O filme começa às 20h00 no cinema central.",
    en: "The movie starts at 8:00 PM at the central cinema.",
  },
  {
    pt: "Claro, posso ajudar a carregar isso até seu carro.",
    en: "Sure, I can help carry this to your car.",
  },
  {
    pt: "Conheço um excelente professor de português que oferece aulas online e presenciais.",
    en: "I know an excellent Portuguese teacher who offers both online and face-to-face classes.",
  },
  {
    pt: "A senha do Wi-Fi é 'convidado123'.",
    en: "The Wi-Fi password is 'guest123'.",
  },
  {
    pt: "A saída de emergência está ao lado do elevador no final do corredor.",
    en: "The emergency exit is next to the elevator at the end of the hallway.",
  },
  {
    pt: "Sua reserva para sexta-feira foi confirmada. Você gostaria de adicionar algum pedido especial?",
    en: "Your reservation for Friday has been confirmed. Would you like to add any special requests?",
  },
  {
    pt: "Você pode fazer uma cópia das chaves na loja de ferragens na Rua 25 de Março.",
    en: "You can make a copy of the keys at the hardware store on 25 de Março Street.",
  },
  {
    pt: "O melhor horário para visitar o museu é durante a semana pela manhã, quando é menos movimentado.",
    en: "The best time to visit the museum is during weekday mornings when it's less crowded.",
  },
  {
    pt: "Sim, temos um carregador de telefone universal que você pode usar enquanto estiver aqui.",
    en: "Yes, we have a universal phone charger that you can use while you are here.",
  },
  {
    pt: "A farmácia aberta mais próxima fica a 24 horas, e está localizada a apenas 5 minutos daqui de carro.",
    en: "The nearest 24-hour open pharmacy is located just 5 minutes away by car.",
  },
  {
    pt: "Você pode comprar um cartão SIM local em qualquer loja de telecomunicações no centro da cidade.",
    en: "You can buy a local SIM card at any telecommunications store in the city center.",
  },
  {
    pt: "O melhor local para assistir ao pôr do sol é no parque da colina, que oferece uma vista panorâmica da cidade.",
    en: "The best place to watch the sunset is at the hill park, which offers a panoramic view of the city.",
  },
  {
    pt: "Para chegar ao zoológico, pegue o ônibus número 15 que sai do terminal central a cada 20 minutos.",
    en: "To get to the zoo, take bus number 15 that leaves from the central terminal every 20 minutes.",
  },
  {
    pt: "Chegar ao centro da cidade leva aproximadamente 20 minutos de metrô a partir daqui.",
    en: "It takes approximately 20 minutes to get to the city center by subway from here.",
  },
  {
    pt: "Você pode comprar lembranças na loja de presentes ao lado do museu da cidade.",
    en: "You can buy souvenirs at the gift shop next to the city museum.",
  },
  {
    pt: "O posto de turismo fica no prédio da prefeitura, que é o grande edifício verde no centro da praça.",
    en: "The tourist office is located in the town hall, which is the large green building in the center of the square.",
  },
  {
    pt: "Um excelente local para tomar café é o 'Café com Arte', que também expõe obras de artistas locais.",
    en: "A great place to have coffee is 'Coffee with Art', which also displays works by local artists.",
  },
  {
    pt: "Para um serviço de táxi confiável, recomendo a 'Rádio Táxi', que você pode chamar pelo aplicativo ou telefone.",
    en: "For reliable taxi service, I recommend 'Radio Taxi', which you can call via app or phone.",
  },
  {
    pt: "Você pode trocar dinheiro no banco, ou em qualquer casa de câmbio que fica no centro comercial da cidade.",
    en: "You can exchange money at the bank, or at any currency exchange located in the city's shopping center.",
  },
  {
    pt: "Sim, está tudo correto. Seu nome e a data estão corretos no formulário.",
    en: "Yes, everything is correct. Your name and the date are correct on the form.",
  },
  {
    pt: "Você pode deixar sua bagagem aqui no guarda-volumes enquanto visita a cidade.",
    en: "You can leave your luggage here in the luggage storage while you visit the city.",
  },
  {
    pt: "A praia fica a cerca de 15 km daqui, e você pode chegar lá de ônibus ou táxi.",
    en: "The beach is about 15 km from here, and you can get there by bus or taxi.",
  },
  {
    pt: "Você pode alugar uma bicicleta na loja 'Pedal Leve', que fica na rua ao lado do parque.",
    en: "You can rent a bike at 'Light Pedal' shop, which is on the street next to the park.",
  },
  {
    pt: "Os ingressos para o concerto estão disponíveis no site oficial do evento ou na bilheteria do teatro.",
    en: "Tickets for the concert are available on the official event website or at the theater box office.",
  },
  {
    pt: "Posso ajudá-lo a encontrar um hotel dentro do seu orçamento e preferências. Que tipo de acomodação você está procurando?",
    en: "I can help you find a hotel within your budget and preferences. What kind of accommodation are you looking for?",
  },
  {
    pt: "O mercado fecha às 18h00, mas aos sábados fecha mais tarde, às 20h00.",
    en: "The market closes at 6:00 PM, but on Saturdays, it closes later at 8:00 PM.",
  },
  {
    pt: "Há um cinema que exibe filmes em inglês no shopping center, a 10 minutos de carro daqui.",
    en: "There is a cinema that shows movies in English at the shopping center, a 10-minute drive from here.",
  },
  {
    pt: "Claro, posso ajudá-lo a configurar seu telefone. Qual é o modelo e o que você precisa configurar?",
    en: "Sure, I can help you set up your phone. What is the model and what do you need to configure?",
  },
  {
    pt: "A lavanderia mais próxima fica a três quarteirões daqui, na mesma rua do supermercado.",
    en: "The nearest laundromat is three blocks from here, on the same street as the supermarket.",
  },
  {
    pt: "Há várias atividades para crianças no centro cultural, incluindo oficinas de arte e sessões de cinema infantil.",
    en: "There are various activities for children at the cultural center, including art workshops and children's cinema sessions.",
  },
  {
    pt: "Um ótimo lugar para nadar é o clube aquático, que tem piscinas abertas ao público durante o verão.",
    en: "A great place to swim is the aquatic club, which has pools open to the public during the summer.",
  },
  {
    pt: "Produtos locais podem ser comprados no mercado de agricultores que acontece todos os sábados na praça central.",
    en: "Local products can be purchased at the farmers' market that takes place every Saturday in the central square.",
  },
  {
    pt: "Para fazer um seguro de viagem, você pode visitar qualquer agência de viagens ou fazer online através de vários provedores de serviços.",
    en: "To get travel insurance, you can visit any travel agency or do it online through various service providers.",
  },
  {
    pt: "O aluguel de um carro custa aproximadamente R$ 100 por dia, incluindo seguro básico.",
    en: "Renting a car costs approximately BRL 100 per day, including basic insurance.",
  },
  {
    pt: "Informações sobre excursões locais estão disponíveis no centro de informações turísticas, que fica na entrada do parque nacional.",
    en: "Information about local tours is available at the tourist information center, located at the entrance to the national park.",
  },
  {
    pt: "Um lugar tranquilo para estudar é a biblioteca municipal, que tem várias salas de estudo silenciosas.",
    en: "A quiet place to study is the municipal library, which has several quiet study rooms.",
  },
  {
    pt: "Você pode comprar um cartão de transporte público em qualquer estação de metrô, ou em pontos de venda autorizados.",
    en: "You can buy a public transport card at any subway station or at authorized sales points.",
  },
  {
    pt: "O teste de COVID-19 pode ser feito no hospital central ou em clínicas privadas, que oferecem o serviço por uma taxa.",
    en: "COVID-19 testing can be done at the central hospital or at private clinics that offer the service for a fee.",
  },
  {
    pt: "Há um médico que fala inglês no hospital internacional, que está equipado para atender turistas e expatriados.",
    en: "There is an English-speaking doctor at the international hospital, which is equipped to serve tourists and expatriates.",
  },
  {
    pt: "Aulas de surf podem ser agendadas na escola de surf local, que fica na praia principal.",
    en: "Surf lessons can be scheduled at the local surf school, which is located on the main beach.",
  },
  {
    pt: "O melhor restaurante de frutos do mar da região é o 'Maré Alta', que serve peixes e mariscos frescos todos os dias.",
    en: "The best seafood restaurant in the area is 'High Tide', which serves fresh fish and shellfish every day.",
  },
  {
    pt: "Equipamento de mergulho pode ser comprado ou alugado na loja 'Submarino', que também oferece cursos de mergulho certificados.",
    en: "Diving equipment can be purchased or rented at 'Submarine' store, which also offers certified diving courses.",
  },
  {
    pt: "Apresentações de música ao vivo acontecem no 'Jazz Club', localizado no centro histórico, todas as sextas e sábados à noite.",
    en: "Live music performances take place at the 'Jazz Club', located in the historic center, every Friday and Saturday night.",
  },
  {
    pt: "Um excelente bar para visitar é o 'Bar do Céu', que oferece uma vista incrível da cidade e uma seleção de bebidas premium.",
    en: "An excellent bar to visit is 'Sky Bar', which offers an incredible view of the city and a selection of premium drinks.",
  },
  {
    pt: "Equipamento de esqui pode ser alugado na loja 'Neve Total', que fica na entrada da estação de esqui.",
    en: "Ski equipment can be rented at 'Total Snow' shop, located at the entrance to the ski resort.",
  },
  {
    pt: "A pizzaria 'Bella Napoli' oferece autênticas pizzas italianas assadas em forno a lenha.",
    en: "The 'Bella Napoli' pizzeria offers authentic Italian pizzas baked in a wood-fired oven.",
  },
  {
    pt: "Você pode tirar fotos incríveis no mirante da montanha, que oferece uma vista panorâmica da região.",
    en: "You can take amazing photos at the mountain viewpoint, which offers a panoramic view of the area.",
  },
  {
    pt: "Lugares para fazer escalada podem ser encontrados no parque de aventuras, que tem paredes de escalada naturais e artificiais.",
    en: "Places to go climbing can be found at the adventure park, which has both natural and artificial climbing walls.",
  },
  {
    pt: "Você pode comprar um presente na loja 'Presentes Criativos', que tem uma variedade de opções únicas e artesanais.",
    en: "You can buy a gift at 'Creative Gifts' shop, which has a variety of unique and handmade options.",
  },
  {
    pt: "A melhor padaria da cidade é a 'Pão & Companhia', conhecida por seus pães artesanais e doces deliciosos.",
    en: "The best bakery in town is 'Bread & Company', known for its artisan breads and delicious pastries.",
  },
  {
    pt: "Você pode alugar um apartamento através de agências imobiliárias locais ou plataformas online como o Airbnb.",
    en: "You can rent an apartment through local real estate agencies or online platforms like Airbnb.",
  },
  {
    pt: "Aulas de dança estão disponíveis no 'Studio Dança e Arte', que oferece classes de salsa, tango e ballet.",
    en: "Dance classes are available at 'Dance and Art Studio', which offers salsa, tango, and ballet classes.",
  },
  {
    pt: "Roupas de banho podem ser compradas na loja 'Sol & Mar', que especializa em moda praia e acessórios.",
    en: "Swimwear can be purchased at 'Sun & Sea' store, which specializes in beach fashion and accessories.",
  },
  {
    pt: "Guias turísticos estão disponíveis na livraria local, que tem uma seção dedicada a viagens e turismo.",
    en: "Travel guides are available at the local bookstore, which has a section dedicated to travel and tourism.",
  },
  {
    pt: "O café 'Café das Artes' é um ótimo lugar para desfrutar de um bom café e apreciar arte local.",
    en: "The 'Art Coffee' is a great place to enjoy a good coffee and appreciate local art.",
  },
  {
    pt: "O parque da cidade é um excelente lugar para passear e relaxar, com áreas verdes e um lago.",
    en: "The city park is an excellent place to stroll and relax, with green areas and a lake.",
  },
  {
    pt: "Você pode comprar um carregador para seu telefone em qualquer loja de eletrônicos ou em quiosques em shoppings.",
    en: "You can buy a charger for your phone at any electronics store or at kiosks in shopping malls.",
  },
  {
    pt: "Você pode alugar uma motocicleta na loja 'Moto Aventura', que oferece diferentes modelos para aluguel diário.",
    en: "You can rent a motorcycle at 'Moto Adventure' store, which offers different models for daily rental.",
  },
  {
    pt: "A sorveteria 'Gelato Dreams' oferece uma variedade de sabores feitos com ingredientes naturais.",
    en: "The 'Gelato Dreams' ice cream shop offers a variety of flavors made with natural ingredients.",
  },
  {
    pt: "Você pode comprar um novo laptop em qualquer loja de eletrônicos na cidade ou online.",
    en: "You can buy a new laptop at any electronics store in the city or online.",
  },
  {
    pt: "O parque local é um ótimo lugar para fazer um piquenique, com muitas áreas sombreadas e mesas de piquenique.",
    en: "The local park is a great place for a picnic, with many shaded areas and picnic tables.",
  },
  {
    pt: "Você pode comprar um guarda-chuva na loja 'Clima', que vende uma variedade de guarda-chuvas e capas de chuva.",
    en: "You can buy an umbrella at 'Weather' store, which sells a variety of umbrellas and raincoats.",
  },
  {
    pt: "A loja de chocolates 'Doce Sabor' oferece uma ampla seleção de chocolates artesanais e importados.",
    en: "The 'Sweet Taste' chocolate shop offers a wide selection of handmade and imported chocolates.",
  },
  {
    pt: "Você pode alugar um barco no clube náutico, que oferece aluguéis por hora ou dia.",
    en: "You can rent a boat at the yacht club, which offers rentals by the hour or day.",
  },
  {
    pt: "A loja de artesanato 'Mãos Criativas' tem uma grande variedade de produtos feitos por artesãos locais.",
    en: "The 'Creative Hands' craft store has a wide range of products made by local artisans.",
  },
  {
    pt: "Você pode comprar uma bicicleta nova na loja 'Pedal Seguro', que oferece uma variedade de modelos e acessórios.",
    en: "You can buy a new bike at 'Safe Pedal' store, which offers a variety of models and accessories.",
  },
  {
    pt: "A churrascaria 'Fogo de Chão' é conhecida por seus cortes de carne de alta qualidade e ambiente acolhedor.",
    en: "The 'Ground Fire' steakhouse is known for its high-quality cuts of meat and welcoming atmosphere.",
  },
  {
    pt: "Passeios de balão estão disponíveis através da empresa 'Céu Aventuras', que oferece voos panorâmicos sobre a região.",
    en: "Balloon rides are available through 'Sky Adventures' company, which offers scenic flights over the area.",
  },
  {
    pt: "Você pode comprar flores na floricultura 'Jardim das Flores', que tem uma grande variedade de flores e arranjos.",
    en: "You can buy flowers at 'Garden of Flowers' florist, which has a wide variety of flowers and arrangements.",
  },
  {
    pt: "A loja de vinhos 'Vinhos & Vinhedos' oferece uma seleção de vinhos nacionais e importados, além de degustações regulares.",
    en: "The 'Wines & Vineyards' wine shop offers a selection of domestic and imported wines, plus regular tastings.",
  },
  {
    pt: "Você pode assistir a uma peça de teatro no 'Teatro da Cidade', que apresenta espetáculos variados ao longo do ano.",
    en: "You can watch a play at the 'City Theater', which features various shows throughout the year.",
  },
  {
    pt: "Você pode comprar um novo relógio na joalheria 'Tempo Precioso', que tem uma coleção exclusiva de relógios de luxo.",
    en: "You can buy a new watch at 'Precious Time' jewelry store, which has an exclusive collection of luxury watches.",
  },
  {
    pt: "O restaurante italiano 'Cantina Bella Italia' serve pratos clássicos italianos em um ambiente autêntico e acolhedor.",
    en: "The 'Bella Italia Cantina' Italian restaurant serves classic Italian dishes in an authentic and welcoming environment.",
  },
  {
    pt: "Você pode comprar uma nova câmera na loja 'Foto & Imagem', que oferece uma ampla seleção de câmeras e acessórios.",
    en: "You can buy a new camera at 'Photo & Image' store, which offers a wide selection of cameras and accessories.",
  },
  {
    pt: "A galeria de arte 'Arte Moderna' apresenta obras de artistas contemporâneos e clássicos, com exposições que mudam regularmente.",
    en: "The 'Modern Art' gallery features works by contemporary and classic artists, with regularly changing exhibitions.",
  },
  {
    pt: "Especiarias locais podem ser encontradas no mercado central, que tem uma seção dedicada a produtos regionais.",
    en: "Local spices can be found at the central market, which has a section dedicated to regional products.",
  },
  {
    pt: "A livraria 'Ler e Saber' tem uma excelente seleção de livros, incluindo best-sellers, clássicos e novidades.",
    en: "The 'Read and Know' bookstore has an excellent selection of books, including best-sellers, classics, and new releases.",
  },
  {
    pt: "Massagens estão disponíveis no spa 'Relax Total', que oferece uma variedade de tratamentos de bem-estar e relaxamento.",
    en: "Massages are available at the 'Total Relax' spa, which offers a variety of wellness and relaxation treatments.",
  },
  {
    pt: "Você pode comprar um novo par de sapatos na loja 'Calçados Conforto', que se especializa em calçados ergonômicos e de moda.",
    en: "You can buy a new pair of shoes at 'Comfort Footwear' store, which specializes in ergonomic and fashionable footwear.",
  },
  {
    pt: "Corridas de cavalos acontecem no hipódromo da cidade, geralmente aos fins de semana.",
    en: "Horse races take place at the city racetrack, usually on weekends.",
  },
  {
    pt: "Eu preciso de ajuda com meu trabalho de casa.",
    en: "I need help with my homework.",
  },
  {
    pt: "Vamos ao mercado comprar ingredientes para o jantar.",
    en: "Let's go to the market to buy ingredients for dinner.",
  },
  {
    pt: "Estou aprendendo português para poder me comunicar melhor.",
    en: "I am learning Portuguese to communicate better.",
  },
  {
    pt: "A festa foi um grande sucesso, todos se divertiram.",
    en: "The party was a great success, everyone had fun.",
  },
  {
    pt: "O filme que assistimos ontem foi muito emocionante.",
    en: "The movie we watched yesterday was very exciting.",
  },
  {
    pt: "Preciso revisar meus estudos antes da prova.",
    en: "I need to review my studies before the exam.",
  },
  {
    pt: "Eu gostaria de aprender a tocar violão.",
    en: "I would like to learn to play the guitar.",
  },
  {
    pt: "Estamos planejando uma viagem para a praia no próximo mês.",
    en: "We are planning a trip to the beach next month.",
  },
  {
    pt: "A comida no restaurante era deliciosa e bem apresentada.",
    en: "The food at the restaurant was delicious and well presented.",
  },
  {
    pt: "Vou tirar um dia de folga para descansar.",
    en: "I will take a day off to rest.",
  },
  {
    pt: "O trânsito na cidade está cada vez pior.",
    en: "Traffic in the city is getting worse.",
  },
  {
    pt: "Ela sempre me apoia nos momentos difíceis.",
    en: "She always supports me in difficult times.",
  },
  {
    pt: "Vamos assistir ao jogo de futebol juntos.",
    en: "Let's watch the soccer game together.",
  },
  {
    pt: "O livro que estou lendo é muito interessante.",
    en: "The book I am reading is very interesting.",
  },
  {
    pt: "Meu cachorro adora passear no parque.",
    en: "My dog loves to walk in the park.",
  },
  {
    pt: "Preciso comprar novos móveis para minha casa.",
    en: "I need to buy new furniture for my house.",
  },
  {
    pt: "Vamos ao cinema assistir a um filme novo.",
    en: "Let's go to the cinema to watch a new movie.",
  },
  {
    pt: "Ela gosta de cozinhar receitas diferentes todos os dias.",
    en: "She likes to cook different recipes every day.",
  },
  {
    pt: "Estou me preparando para uma apresentação importante.",
    en: "I am preparing for an important presentation.",
  },
  {
    pt: "Ele me ajudou a resolver um problema complicado.",
    en: "He helped me solve a complicated problem.",
  },
  {
    pt: "Nós passamos o dia todo limpando a casa.",
    en: "We spent the whole day cleaning the house.",
  },
  {
    pt: "Estou economizando dinheiro para comprar um carro novo.",
    en: "I am saving money to buy a new car.",
  },
  {
    pt: "Ela está estudando para se tornar uma médica.",
    en: "She is studying to become a doctor.",
  },
  {
    pt: "Vou fazer uma viagem internacional nas férias.",
    en: "I will take an international trip on vacation.",
  },
  {
    pt: "Meu irmão começou um novo emprego na semana passada.",
    en: "My brother started a new job last week.",
  },
  {
    pt: "Eu gosto de passar meu tempo livre lendo livros.",
    en: "I like to spend my free time reading books.",
  },
  {
    pt: "A reunião foi adiada para a próxima semana.",
    en: "The meeting was postponed to next week.",
  },
  {
    pt: "Nós precisamos discutir os detalhes do projeto.",
    en: "We need to discuss the project details.",
  },
  {
    pt: "Ele comprou um presente para sua mãe.",
    en: "He bought a gift for his mother.",
  },
  {
    pt: "Vamos fazer um piquenique no parque amanhã.",
    en: "Let's have a picnic in the park tomorrow.",
  },
  {
    pt: "Estou aprendendo a falar espanhol também.",
    en: "I am learning to speak Spanish too.",
  },
  {
    pt: "Ela sempre me faz rir com suas piadas.",
    en: "She always makes me laugh with her jokes.",
  },
  {
    pt: "Vou ao médico para um check-up anual.",
    en: "I am going to the doctor for an annual check-up.",
  },
  {
    pt: "Meu computador está com problemas, preciso consertá-lo.",
    en: "My computer is having issues, I need to fix it.",
  },
  {
    pt: "Nós vamos sair para jantar hoje à noite.",
    en: "We are going out for dinner tonight.",
  },
  {
    pt: "Ele está treinando para uma maratona.",
    en: "He is training for a marathon.",
  },
  {
    pt: "A praia estava lotada no fim de semana passado.",
    en: "The beach was crowded last weekend.",
  },
  {
    pt: "Eu prefiro chá ao invés de café.",
    en: "I prefer tea instead of coffee.",
  },
  {
    pt: "Ela gosta de pintar quadros nas horas vagas.",
    en: "She likes to paint pictures in her spare time.",
  },
  {
    pt: "Estamos organizando uma festa de aniversário surpresa.",
    en: "We are organizing a surprise birthday party.",
  },
  {
    pt: "O jardim está cheio de flores coloridas.",
    en: "The garden is full of colorful flowers.",
  },
  {
    pt: "Preciso comprar um presente de aniversário para meu amigo.",
    en: "I need to buy a birthday present for my friend.",
  },
  {
    pt: "Nós assistimos a um filme emocionante na TV.",
    en: "We watched an exciting movie on TV.",
  },
  {
    pt: "Ele está sempre disposto a ajudar os outros.",
    en: "He is always willing to help others.",
  },
  {
    pt: "Vamos viajar de carro até a praia.",
    en: "We are going to drive to the beach.",
  },
  {
    pt: "Ela tem um talento especial para a música.",
    en: "She has a special talent for music.",
  },
  {
    pt: "Estou procurando um novo apartamento para alugar.",
    en: "I am looking for a new apartment to rent.",
  },
  {
    pt: "Nós vamos fazer uma caminhada na montanha amanhã.",
    en: "We are going hiking in the mountains tomorrow.",
  },
  {
    pt: "Ele está estudando para um exame importante.",
    en: "He is studying for an important exam.",
  },
  {
    pt: "Preciso terminar meu projeto antes do prazo.",
    en: "I need to finish my project before the deadline.",
  },
  {
    pt: "Ela adora fotografar paisagens naturais.",
    en: "She loves photographing natural landscapes.",
  },
  {
    pt: "Nós estamos planejando uma festa de Natal.",
    en: "We are planning a Christmas party.",
  },
  {
    pt: "Vou ao shopping comprar roupas novas.",
    en: "I am going to the mall to buy new clothes.",
  },
  {
    pt: "Ele está interessado em aprender a cozinhar.",
    en: "He is interested in learning to cook.",
  },
  {
    pt: "Estamos organizando uma viagem de família.",
    en: "We are organizing a family trip.",
  },
  {
    pt: "Ela está trabalhando em um novo projeto de arte.",
    en: "She is working on a new art project.",
  },
  {
    pt: "Eu gosto de correr no parque pela manhã.",
    en: "I like to run in the park in the morning.",
  },
  {
    pt: "Nós vamos visitar um museu neste fim de semana.",
    en: "We are going to visit a museum this weekend.",
  },
  {
    pt: "Ele está aprendendo a tocar piano.",
    en: "He is learning to play the piano.",
  },
  {
    pt: "Ela gosta de assistir documentários sobre a natureza.",
    en: "She likes to watch documentaries about nature.",
  },
  {
    pt: "Nós vamos ao parque de diversões amanhã.",
    en: "We are going to the amusement park tomorrow.",
  },
  {
    pt: "Eu prefiro ler livros de ficção científica.",
    en: "I prefer to read science fiction books.",
  },
  {
    pt: "Ela está estudando para se tornar uma engenheira.",
    en: "She is studying to become an engineer.",
  },
  {
    pt: "Nós vamos celebrar nosso aniversário de casamento.",
    en: "We are going to celebrate our wedding anniversary.",
  },
  {
    pt: "Ele está treinando para um torneio de tênis.",
    en: "He is training for a tennis tournament.",
  },
  {
    pt: "Ela gosta de passar o tempo livre fazendo tricô.",
    en: "She likes to spend her free time knitting.",
  },
  {
    pt: "Nós vamos ao zoológico ver os animais.",
    en: "We are going to the zoo to see the animals.",
  },
  {
    pt: "Eu gosto de cozinhar receitas saudáveis.",
    en: "I like to cook healthy recipes.",
  },
  {
    pt: "Ela está lendo um livro sobre história antiga.",
    en: "She is reading a book about ancient history.",
  },
  {
    pt: "Nós vamos fazer uma viagem de trem pela Europa.",
    en: "We are going on a train trip through Europe.",
  },
  {
    pt: "Ele está aprendendo a falar japonês.",
    en: "He is learning to speak Japanese.",
  },
  {
    pt: "Ela gosta de fazer exercícios na academia.",
    en: "She likes to exercise at the gym.",
  },
  {
    pt: "Nós vamos ao teatro assistir a uma peça.",
    en: "We are going to the theater to watch a play.",
  },
  {
    pt: "Eu prefiro tomar chá verde ao invés de café.",
    en: "I prefer to drink green tea instead of coffee.",
  },
  {
    pt: "Ela está aprendendo a pintar com aquarelas.",
    en: "She is learning to paint with watercolors.",
  },
  {
    pt: "Nós vamos ao parque para um piquenique.",
    en: "We are going to the park for a picnic.",
  },
  {
    pt: "Ele está estudando para um concurso público.",
    en: "He is studying for a public examination.",
  },
  {
    pt: "Ela gosta de assistir a programas de culinária.",
    en: "She likes to watch cooking shows.",
  },
  {
    pt: "Nós vamos ao festival de música neste fim de semana.",
    en: "We are going to the music festival this weekend.",
  },
  {
    pt: "Eu gosto de jogar xadrez com meus amigos.",
    en: "I like to play chess with my friends.",
  },
  {
    pt: "Ela está aprendendo a costurar roupas.",
    en: "She is learning to sew clothes.",
  },
  {
    pt: "Nós vamos ao parque aquático amanhã.",
    en: "We are going to the water park tomorrow.",
  },
  {
    pt: "Ele está interessado em fotografia.",
    en: "He is interested in photography.",
  },
  {
    pt: "Ela gosta de passear de bicicleta pela cidade.",
    en: "She likes to ride her bike around the city.",
  },
  {
    pt: "Nós vamos ao mercado de agricultores no sábado.",
    en: "We are going to the farmer's market on Saturday.",
  },
  {
    pt: "Eu gosto de aprender sobre novas culturas.",
    en: "I like to learn about new cultures.",
  },
  {
    pt: "Ela está lendo um romance de mistério.",
    en: "She is reading a mystery novel.",
  },
  {
    pt: "Nós vamos ao parque fazer um churrasco.",
    en: "We are going to the park for a barbecue.",
  },
  {
    pt: "Ele está aprendendo a tocar violino.",
    en: "He is learning to play the violin.",
  },
  {
    pt: "Ela gosta de fazer caminhadas na montanha.",
    en: "She likes to hike in the mountains.",
  },
  {
    pt: "Nós vamos ao festival de cinema na próxima semana.",
    en: "We are going to the film festival next week.",
  },
  {
    pt: "Eu gosto de assistir a documentários científicos.",
    en: "I like to watch science documentaries.",
  },
  {
    pt: "Ela está aprendendo a fazer cerâmica.",
    en: "She is learning to make pottery.",
  },
  {
    pt: "Pode escolher qualquer livro",
    en: "You can choose any book",
  },
  {
    pt: "Qualquer pessoa pode fazer isso",
    en: "Any person can do this",
  },
  {
    pt: "Ele é um qualquer",
    en: "He is a nobody",
  },
  {
    pt: "Eu aceito qualquer ajuda.",
    en: "I accept any help",
  },
  {
    pt: "Tenho alguma dúvida",
    en: "I have some doubt",
  },
  {
    pt: "Não tenho alguma dúvida",
    en: "I don't have any doubt",
  },
  {
    pt: "Eu preciso de alguma ajuda",
    en: "I need some help",
  },
  {
    pt: "O início das aulas será na próxima semana",
    en: "The start of classes will be next week",
  },
  {
    pt: "Desde o início do projeto, tivemos muitos desafios",
    en: "Since the beginning of the project, we have had many challenges",
  },
  {
    pt: "No começo, eu não entendia nada",
    en: "At the beginning, I didn’t understand anything",
  },
  {
    pt: "Vamos marcar o começo da reunião para as nove",
    en: "Let's schedule the start of the meeting for nine o'clock",
  },
  {
    pt: "Vamos marcar o começo da reunião para as nove",
    en: "Let's schedule the start of the meeting for nine o'clock",
  },
  {
    pt: "O início das atividades está previsto para setembro",
    en: "The beginning of activities is scheduled for September",
  },
  {
    pt: "No começo do ano, sempre faço resoluções",
    en: "At the beginning of the year, I always make resolutions",
  },
  {
    pt: "início de carreira",
    en: "career start",
  },
  {
    pt: "começo de conversa",
    en: "beginning of a conversation",
  },
  {
    pt: "Ontem foi um dia muito quente.",
    en: "Yesterday was a very hot day.",
  },
  {
    pt: "Ele era um homem muito inteligente.",
    en: "He was a very intelligent man.",
  },
  {
    pt: "Eu fui à festa, mas não me diverti muito.",
    en: "I went to the party, but I didn't have much fun.",
  },
  {
    pt: "Ela era uma professora muito dedicada.",
    en: "She was a very dedicated teacher.",
  },
  {
    pt: "Nós fomos ao parque e brincamos o dia todo.",
    en: "We went to the park and played all day.",
  },
  {
    pt: "Eles eram amigos de infância.",
    en: "They were childhood friends.",
  },
  {
    pt: "Se você estudar todos os dias, então você aprenderá português rapidamente.",
    en: "If you study every day, then you will learn Portuguese quickly.",
  },
  {
    pt: "Se chover amanhã, então nós não iremos ao parque.",
    en: "If it rains tomorrow, then we will not go to the park.",
  },
  {
    pt: "Se você economizar dinheiro, então poderá comprar um carro novo.",
    en: "If you save money, then you can buy a new car.",
  },
  {
    pt: "Se ela praticar esportes, então ela ficará mais saudável.",
    en: "If she practices sports, then she will become healthier.",
  },
  {
    pt: "Se eu cozinhar hoje, então você lava a louça.",
    en: "If I cook today, then you wash the dishes.",
  },
  {
    pt: "Se ele chegar cedo, então nós podemos sair para jantar.",
    en: "If he arrives early, then we can go out for dinner.",
  },
  {
    pt: "Se você ler este livro, então entenderá melhor a história.",
    en: "If you read this book, then you will understand the story better.",
  },
  {
    pt: "Se eles ganharem o jogo, então estarão na final.",
    en: "If they win the game, then they will be in the final.",
  },
  {
    pt: "Se nós trabalharmos juntos, então terminaremos o projeto mais rápido.",
    en: "If we work together, then we will finish the project faster.",
  },
  {
    pt: "Se você beber muita água, então você se sentirá mais hidratado.",
    en: "If you drink a lot of water, then you will feel more hydrated.",
  },
  {
    pt: "Se você for ao supermercado, então compre leite, por favor.",
    en: "If you go to the supermarket, then buy milk, please.",
  },
  {
    pt: "Se eles estudarem para o exame, então passarão com boas notas.",
    en: "If they study for the exam, then they will pass with good grades.",
  },
  {
    pt: "Se o filme for bom, então vamos recomendá-lo aos amigos.",
    en: "If the movie is good, then we will recommend it to friends.",
  },
  {
    pt: "Se eu me exercitar regularmente, então perderei peso.",
    en: "If I exercise regularly, then I will lose weight.",
  },
  {
    pt: "Se você precisar de ajuda, então me ligue a qualquer hora.",
    en: "If you need help, then call me anytime.",
  },
  {
    pt: "Se eles construírem a ponte, então a viagem será mais curta.",
    en: "If they build the bridge, then the journey will be shorter.",
  },
  {
    pt: "Se a internet estiver funcionando, então poderemos assistir ao filme online.",
    en: "If the internet is working, then we can watch the movie online.",
  },
  {
    pt: "Se eu ganhar na loteria, então viajarei pelo mundo.",
    en: "If I win the lottery, then I will travel around the world.",
  },
  {
    pt: "Se nós plantarmos mais árvores, então o ar será mais limpo.",
    en: "If we plant more trees, then the air will be cleaner.",
  },
  {
    pt: "Se você se levantar cedo, então terá mais tempo para estudar.",
    en: "If you get up early, then you will have more time to study.",
  },
  {
    pt: "noventa e oito mil, setecentos e sessenta e cinco",
    en: "98765",
  },
  {
    pt: "Eu fui ao mercado ontem.",
    en: "I went to the market yesterday.",
  },
  {
    pt: "Ela estudou a noite toda para o exame.",
    en: "She studied all night for the exam.",
  },
  {
    pt: "Nós viajamos para o Brasil no ano passado.",
    en: "We traveled to Brazil last year.",
  },
  {
    pt: "Eles jogaram futebol no parque.",
    en: "They played soccer in the park.",
  },
  {
    pt: "Ele comeu todo o bolo sozinho.",
    en: "He ate the whole cake by himself.",
  },
  {
    pt: "Ontem, eu encontrei um amigo antigo na rua.",
    en: "Yesterday, I met an old friend on the street.",
  },
  {
    pt: "Ela cantou no coral da escola.",
    en: "She sang in the school choir.",
  },
  {
    pt: "Nós assistimos a um filme no cinema.",
    en: "We watched a movie at the cinema.",
  },
  {
    pt: "Eu perdi meu celular na semana passada.",
    en: "I lost my cell phone last week.",
  },
  {
    pt: "Ele escreveu uma carta para os pais.",
    en: "He wrote a letter to his parents.",
  },
  {
    pt: "Eu estava aprendendo a tocar violão.",
    en: "I was learning to play the guitar.",
  },
  {
    pt: "Ele estava pintando um quadro na sala.",
    en: "He was painting a picture in the living room.",
  },
  {
    pt: "Nós estávamos construindo um novo site.",
    en: "We were building a new website.",
  },
  {
    pt: "Ela estava fazendo um bolo de chocolate.",
    en: "She was making a chocolate cake.",
  },
  {
    pt: "Eles estavam discutindo o projeto no escritório.",
    en: "They were discussing the project in the office.",
  },
  {
    pt: "O cachorro estava correndo no quintal.",
    en: "The dog was running in the yard.",
  },
  {
    pt: "Nós estávamos planejando nossas férias.",
    en: "We were planning our vacation.",
  },
  {
    pt: "Ela estava desenhando um retrato do irmão.",
    en: "She was drawing a portrait of her brother.",
  },
  {
    pt: "Eu estava organizando meus documentos.",
    en: "I was organizing my documents.",
  },
  {
    pt: "O gato estava dormindo no sofá.",
    en: "The cat was sleeping on the couch.",
  },
  {
    pt: "Em 1500, o navegador português Pedro Álvares Cabral chegou ao que hoje conhecemos como o Brasil, marcando o início da colonização portuguesa.",
    en: "In 1500, the Portuguese navigator Pedro Álvares Cabral arrived at what we now know as Brazil, marking the beginning of Portuguese colonization.",
  },
  {
    pt: "A cidade de Salvador foi fundada em 1549 e tornou-se a primeira capital do Brasil, servindo como o centro administrativo da colônia por muitos anos.",
    en: "The city of Salvador was founded in 1549 and became the first capital of Brazil, serving as the administrative center of the colony for many years.",
  },
  {
    pt: "Durante o século XVII, a descoberta de ouro em Minas Gerais atraiu muitos colonos e levou ao desenvolvimento econômico significativo da região.",
    en: "During the 17th century, the discovery of gold in Minas Gerais attracted many settlers and led to significant economic development in the region.",
  },
  {
    pt: "Em 1822, Dom Pedro I proclamou a independência do Brasil em relação a Portugal, tornando-se o primeiro imperador do país.",
    en: "In 1822, Dom Pedro I proclaimed Brazil's independence from Portugal, becoming the country's first emperor.",
  },
  {
    pt: "A abolição da escravatura no Brasil foi oficialmente decretada pela Lei Áurea em 1888, assinada pela Princesa Isabel, encerrando séculos de exploração escravista.",
    en: "The abolition of slavery in Brazil was officially decreed by the Lei Áurea in 1888, signed by Princess Isabel, ending centuries of enslavement.",
  },
  {
    pt: "O Brasil se tornou uma república em 1889, quando um golpe militar destituiu o imperador Dom Pedro II e estabeleceu um governo provisório.",
    en: "Brazil became a republic in 1889 when a military coup deposed Emperor Dom Pedro II and established a provisional government.",
  },
  {
    pt: "Durante a década de 1930, Getúlio Vargas assumiu a presidência e instituiu o Estado Novo, um regime autoritário que durou até 1945.",
    en: "During the 1930s, Getúlio Vargas took the presidency and instituted the Estado Novo, an authoritarian regime that lasted until 1945.",
  },
  {
    pt: "Em 1964, um golpe militar levou à instalação de um regime ditatorial que governou o Brasil até 1985, período marcado por repressão política e censura.",
    en: "In 1964, a military coup led to the installation of a dictatorial regime that governed Brazil until 1985, a period marked by political repression and censorship.",
  },
  {
    pt: "A Constituição de 1988, conhecida como a Constituição Cidadã, marcou o retorno à democracia e estabeleceu uma série de direitos civis e sociais para os brasileiros.",
    en: "The 1988 Constitution, known as the Citizen Constitution, marked the return to democracy and established a series of civil and social rights for Brazilians.",
  },
  {
    pt: "Em 2016, a presidente Dilma Rousseff foi afastada do cargo após um processo de impeachment, resultando em uma mudança significativa no cenário político do país.",
    en: "In 2016, President Dilma Rousseff was removed from office after an impeachment process, resulting in a significant change in the country's political landscape.",
  },
  {
    pt: "No verão passado, nós passamos uma semana inteira na praia de Copacabana, aproveitando o sol e o mar.",
    en: "Last summer, we spent an entire week at Copacabana Beach, enjoying the sun and the sea.",
  },
  {
    pt: "Ontem, nós levamos um piquenique para a praia e passamos o dia inteiro relaxando na areia.",
    en: "Yesterday, we took a picnic to the beach and spent the whole day relaxing on the sand.",
  },
  {
    pt: "As crianças estavam construindo castelos de areia enquanto os adultos jogavam vôlei de praia.",
    en: "The children were building sandcastles while the adults played beach volleyball.",
  },
  {
    pt: "Nós chegamos cedo na praia para conseguir um bom lugar perto da água e montamos nossas cadeiras e guarda-sóis.",
    en: "We arrived early at the beach to get a good spot near the water and set up our chairs and umbrellas.",
  },
  {
    pt: "Enquanto nadávamos no mar, vimos golfinhos nadando não muito longe da costa.",
    en: "While we were swimming in the sea, we saw dolphins swimming not far from the shore.",
  },
  {
    pt: "Eu estava lendo um livro debaixo do guarda-sol quando um vendedor ambulante passou vendendo água de coco.",
    en: "I was reading a book under the umbrella when a street vendor passed by selling coconut water.",
  },
  {
    pt: "Nós caminhamos pela orla da praia ao entardecer, aproveitando a brisa fresca e o som das ondas.",
    en: "We walked along the beach promenade at dusk, enjoying the cool breeze and the sound of the waves.",
  },
  {
    pt: "Depois de passar o dia na praia, fomos a um restaurante à beira-mar para jantar frutos do mar frescos.",
    en: "After spending the day at the beach, we went to a seaside restaurant to have fresh seafood for dinner.",
  },
  {
    pt: "Ela estava recolhendo conchas na beira da água quando encontrou uma estrela-do-mar.",
    en: "She was collecting shells at the water's edge when she found a starfish.",
  },
  {
    pt: "Nós estávamos jogando frisbee na areia quando o sol começou a se pôr, criando um belo pôr do sol.",
    en: "We were playing frisbee on the sand when the sun began to set, creating a beautiful sunset.",
  },
  {
    pt: "Amanhã, nós vamos visitar o novo museu que abriu na cidade.",
    en: "Tomorrow, we will visit the new museum that opened in the city.",
  },
  {
    pt: "Na próxima semana, ela vai começar um curso de culinária italiana.",
    en: "Next week, she will start an Italian cooking course.",
  },
  {
    pt: "Na segunda-feira, eu vou me encontrar com meu chefe para discutir o novo projeto.",
    en: "On Monday, I will meet with my boss to discuss the new project.",
  },
  {
    pt: "No fim de semana, nós vamos fazer uma viagem para a serra para aproveitar a natureza.",
    en: "This weekend, we will take a trip to the mountains to enjoy nature.",
  },
  {
    pt: "Eles vão lançar um novo filme no cinema na próxima sexta-feira.",
    en: "They will release a new movie in the cinema next Friday.",
  },
  {
    pt: "Eu vou participar de uma conferência sobre tecnologia na próxima quarta-feira.",
    en: "I will attend a technology conference next Wednesday.",
  },
  {
    pt: "Nós vamos organizar uma festa surpresa para o aniversário do nosso amigo.",
    en: "We will organize a surprise party for our friend's birthday.",
  },
  {
    pt: "Ela vai visitar os avós no próximo fim de semana.",
    en: "She will visit her grandparents next weekend.",
  },
  {
    pt: "Eles vão iniciar a construção da nova casa no mês que vem.",
    en: "They will start building the new house next month.",
  },
  {
    pt: "Na próxima terça-feira, eu vou ao médico para um check-up.",
    en: "Next Tuesday, I will go to the doctor for a check-up.",
  },
  {
    pt: "Em dez anos, nós vamos nos mudar para uma casa maior no campo.",
    en: "In ten years, we will move to a bigger house in the countryside.",
  },
  {
    pt: "Ela vai se aposentar após trinta anos de serviço na mesma empresa.",
    en: "She will retire after thirty years of service at the same company.",
  },
  {
    pt: "Daqui a vinte anos, eles vão celebrar seu jubileu de ouro de casamento.",
    en: "In twenty years, they will celebrate their golden wedding anniversary.",
  },
  {
    pt: "Eu vou escrever um livro sobre minhas experiências de vida quando tiver sessenta anos.",
    en: "I will write a book about my life experiences when I am sixty years old.",
  },
  {
    pt: "No futuro, a tecnologia vai avançar a um ponto em que os carros voadores serão comuns.",
    en: "In the future, technology will advance to a point where flying cars will be common.",
  },
  {
    pt: "Quando ele se aposentar, vai viajar pelo mundo para conhecer novas culturas.",
    en: "When he retires, he will travel around the world to experience new cultures.",
  },
  {
    pt: "Nós vamos plantar uma floresta no terreno da nossa família para as gerações futuras.",
    en: "We will plant a forest on our family land for future generations.",
  },
  {
    pt: "Em cinquenta anos, as cidades vão ser mais sustentáveis e ecologicamente corretas.",
    en: "In fifty years, cities will be more sustainable and environmentally friendly.",
  },
  {
    pt: "Ela vai receber um prêmio pelo seu trabalho inovador na ciência daqui a décadas.",
    en: "She will receive an award for her innovative work in science decades from now.",
  },
  {
    pt: "No futuro, nossos netos vão viver em um mundo muito diferente do que conhecemos hoje.",
    en: "In the future, our grandchildren will live in a very different world from the one we know today.",
  },
  {
    pt: "Um dia, os peixes vão aprender a falar e contar suas histórias.",
    en: "One day, fish will learn to talk and tell their stories.",
  },
  {
    pt: "No futuro, os humanos vão ser capazes de respirar debaixo d'água sem qualquer equipamento.",
    en: "In the future, humans will be able to breathe underwater without any equipment.",
  },
  {
    pt: "Eventualmente, nós vamos descobrir uma maneira de viajar no tempo e mudar o passado.",
    en: "Eventually, we will discover a way to travel through time and change the past.",
  },
  {
    pt: "Um dia, todas as pessoas no mundo vão concordar em tudo e não haverá mais conflitos.",
    en: "One day, all people in the world will agree on everything and there will be no more conflicts.",
  },
  {
    pt: "Os carros vão voar como aviões e não precisarão de estradas para se mover.",
    en: "Cars will fly like airplanes and won't need roads to move.",
  },
  {
    pt: "Em algum momento, os animais selvagens vão começar a viver em casas com humanos como animais de estimação.",
    en: "At some point, wild animals will start living in houses with humans as pets.",
  },
  {
    pt: "No futuro, todos os alimentos serão comprimidos que fornecem toda a nutrição necessária.",
    en: "In the future, all food will be pills that provide all necessary nutrition.",
  },
  {
    pt: "Um dia, as pessoas vão desenvolver a habilidade de se teletransportar instantaneamente para qualquer lugar do mundo.",
    en: "One day, people will develop the ability to teleport instantly to any place in the world.",
  },
  {
    pt: "No futuro, as máquinas vão fazer todo o trabalho humano, e ninguém mais precisará trabalhar.",
    en: "In the future, machines will do all human work, and no one will need to work anymore.",
  },
  {
    pt: "Um dia, todos os humanos vão viver em paz eterna sem qualquer doença ou sofrimento.",
    en: "One day, all humans will live in eternal peace without any disease or suffering.",
  },
  {
    pt: "Ele provavelmente nunca vai terminar aquele romance que começou há anos.",
    en: "He will probably never finish that novel he started years ago.",
  },
  {
    pt: "Ela disse que um dia vai escalar o Monte Everest, mas isso provavelmente nunca vai acontecer.",
    en: "She said she would climb Mount Everest one day, but that will probably never happen.",
  },
  {
    pt: "Nós sempre falamos sobre fazer uma viagem ao redor do mundo, mas nunca conseguimos planejar.",
    en: "We always talk about taking a trip around the world, but we never manage to plan it.",
  },
  {
    pt: "Ele prometeu que iria aprender a tocar piano, mas parece que isso nunca vai acontecer.",
    en: "He promised he would learn to play the piano, but it seems that will never happen.",
  },
  {
    pt: "Ela sempre sonhou em abrir seu próprio restaurante, mas talvez isso nunca se torne realidade.",
    en: "She always dreamed of opening her own restaurant, but maybe that will never come true.",
  },
  {
    pt: "Eles falaram que vão se mudar para o campo, mas é improvável que deixem a cidade.",
    en: "They said they would move to the countryside, but it's unlikely they will leave the city.",
  },
  {
    pt: "Eu sempre quis aprender a falar japonês, mas nunca encontrei tempo para isso.",
    en: "I always wanted to learn to speak Japanese, but I never found time for it.",
  },
  {
    pt: "Ela disse que vai viajar para a lua quando a tecnologia permitir, mas isso provavelmente nunca vai acontecer.",
    en: "She said she would travel to the moon when technology allows, but that will probably never happen.",
  },
  {
    pt: "Ele quer escrever uma autobiografia, mas duvido que ele realmente comece.",
    en: "He wants to write an autobiography, but I doubt he will actually start.",
  },
  {
    pt: "Nós sempre falamos sobre reformar a casa, mas parece que nunca vamos começar.",
    en: "We always talk about renovating the house, but it seems we will never start.",
  },
  {
    pt: "Eu nunca vou ganhar na loteria porque nunca compro bilhetes.",
    en: "I will never win the lottery because I never buy tickets.",
  },
  {
    pt: "Ela nunca vai conseguir falar com dinossauros, pois eles estão extintos há milhões de anos.",
    en: "She will never be able to talk to dinosaurs because they have been extinct for millions of years.",
  },
  {
    pt: "Eles nunca vão morar em Marte, já que não têm interesse em exploração espacial.",
    en: "They will never live on Mars since they have no interest in space exploration.",
  },
  {
    pt: "Nós nunca vamos ver porcos voando, pois isso é biologicamente impossível.",
    en: "We will never see pigs fly because it is biologically impossible.",
  },
  {
    pt: "Ele nunca vai se tornar presidente dos Estados Unidos porque não é cidadão americano.",
    en: "He will never become President of the United States because he is not an American citizen.",
  },
  {
    pt: "Eu nunca vou crescer novamente porque sou um adulto.",
    en: "I will never grow taller again because I am an adult.",
  },
  {
    pt: "Ela nunca vai viver para sempre, pois a imortalidade não existe.",
    en: "She will never live forever because immortality does not exist.",
  },
  {
    pt: "Nós nunca vamos poder respirar no espaço sem ajuda, pois não há ar lá.",
    en: "We will never be able to breathe in space without assistance because there is no air there.",
  },
  {
    pt: "Ele nunca vai viajar no tempo, já que isso é cientificamente impossível com a tecnologia atual.",
    en: "He will never time travel because it is scientifically impossible with current technology.",
  },
  {
    pt: "Ela nunca vai se transformar em uma sereia porque sereias não existem.",
    en: "She will never transform into a mermaid because mermaids do not exist.",
  },
  {
    pt: "No passado distante, as estrelas eram as únicas testemunhas dos segredos sussurrados pelo vento nas noites solitárias.",
    en: "In the distant past, the stars were the only witnesses to the secrets whispered by the wind on lonely nights.",
  },
  {
    pt: "No futuro, quando as flores desabrocharem em campos esquecidos, os sonhos da humanidade florescerão junto com elas.",
    en: "In the future, when flowers bloom in forgotten fields, the dreams of humanity will blossom alongside them.",
  },
  {
    pt: "No presente, cada pôr do sol pinta o céu com cores de esperança, lembrando-nos de que o amanhã sempre traz novas possibilidades.",
    en: "In the present, each sunset paints the sky with colors of hope, reminding us that tomorrow always brings new possibilities.",
  },
  {
    pt: "Um dia, quando os rios pararem de fluir, as lembranças de nossos risos ecoarão nas margens silenciosas.",
    en: "One day, when rivers cease to flow, the memories of our laughter will echo on the silent banks.",
  },
  {
    pt: "Ela sempre soube que seus sonhos eram como borboletas, frágeis e coloridas, voando livremente na brisa da manhã.",
    en: "She always knew her dreams were like butterflies, fragile and colorful, flying freely in the morning breeze.",
  },
  {
    pt: "No futuro, os livros contarão histórias de um tempo em que os corações falavam a mesma língua, apesar das distâncias.",
    en: "In the future, books will tell stories of a time when hearts spoke the same language despite the distances.",
  },
  {
    pt: "Naquele dia, quando o céu desabou em lágrimas, o amor floresceu como nunca antes, enraizado na terra molhada.",
    en: "On that day, when the sky collapsed in tears, love blossomed like never before, rooted in the wet earth.",
  },
  {
    pt: "Em algum lugar, uma criança observa as estrelas e sonha com mundos além do alcance de nossa imaginação.",
    en: "Somewhere, a child watches the stars and dreams of worlds beyond the reach of our imagination.",
  },
  {
    pt: "No silêncio da madrugada, as palavras não ditas entre nós se tornaram as mais profundas poesias de nosso amor.",
    en: "In the silence of dawn, the unspoken words between us became the deepest poetry of our love.",
  },
  {
    pt: "Um dia, quando as árvores antigas contarem suas histórias ao vento, nossos nomes serão sussurrados entre as folhas.",
    en: "One day, when the ancient trees tell their stories to the wind, our names will be whispered among the leaves.",
  },
  {
    pt: "A garota de Ipanema passa, e o mundo inteiro para só para vê-la caminhar.",
    en: "The girl from Ipanema passes by, and the whole world stops just to watch her walk.",
  },
  {
    pt: "No meio do caminho havia um barquinho a vela, navegando no mar azul de Copacabana.",
    en: "In the middle of the way, there was a little sailboat, sailing in the blue sea of Copacabana.",
  },
  {
    pt: "Quando o sol se põe, o céu se pinta de rosa, e meu coração canta uma melodia de amor.",
    en: "When the sun sets, the sky is painted pink, and my heart sings a melody of love.",
  },
  {
    pt: "A chuva caía suavemente, e com ela vinha a lembrança do nosso primeiro beijo.",
    en: "The rain was falling gently, and with it came the memory of our first kiss.",
  },
  {
    pt: "No balanço da rede, eu sonho com você e a brisa do mar embala nossa canção.",
    en: "In the sway of the hammock, I dream of you and the sea breeze cradles our song.",
  },
  {
    pt: "O cheiro do jasmim no ar me faz lembrar dos seus abraços e dos dias que não vão voltar.",
    en: "The smell of jasmine in the air reminds me of your embraces and the days that won't come back.",
  },
  {
    pt: "Caminhando pela praia, vejo nossas pegadas lado a lado, marcas do nosso amor na areia.",
    en: "Walking along the beach, I see our footprints side by side, marks of our love in the sand.",
  },
  {
    pt: "A lua cheia no céu ilumina a nossa dança, e o mundo inteiro parece parar para nos ver.",
    en: "The full moon in the sky lights up our dance, and the whole world seems to stop to watch us.",
  },
  {
    pt: "O violão toca suavemente, e cada acorde é uma declaração de amor ao luar.",
    en: "The guitar plays softly, and each chord is a declaration of love under the moonlight.",
  },
  {
    pt: "No jardim, as flores se abrem com a sua chegada, e a natureza celebra nosso encontro.",
    en: "In the garden, the flowers bloom with your arrival, and nature celebrates our meeting.",
  },
  {
    pt: "Quando ele chegar, avise-me.",
    en: "When he arrives, let me know.",
  },
  {
    pt: "Assim que terminarmos o trabalho, podemos sair.",
    en: "As soon as we finish the work, we can leave.",
  },
  {
    pt: "Se eu encontrar a chave, te aviso.",
    en: "If I find the key, I'll let you know.",
  },
  {
    pt: "Quando vocês estiverem prontos, podemos começar.",
    en: "When you all are ready, we can start.",
  },
  {
    pt: "Se eles vierem amanhã, faremos uma festa.",
    en: "If they come tomorrow, we'll have a party.",
  },
  {
    pt: "Quando você tiver tempo, me ligue.",
    en: "When you have time, call me.",
  },
  {
    pt: "Se você fizer isso, ficará feliz.",
    en: "If you do this, you will be happy.",
  },
  {
    pt: "Assim que ele vir a notícia, ele entenderá.",
    en: "As soon as he sees the news, he will understand.",
  },
  {
    pt: "Se nós pudermos ajudar, nos avise.",
    en: "If we can help, let us know.",
  },
  {
    pt: "Quando ela disser a verdade, tudo ficará claro.",
    en: "When she tells the truth, everything will be clear.",
  },
  {
    pt: "Se eu souber a resposta, te conto.",
    en: "If I know the answer, I'll tell you.",
  },
  {
    pt: "Quando você encontrar o livro, me empreste.",
    en: "When you find the book, lend it to me.",
  },
  {
    pt: "Assim que ele entender a lição, poderá explicar aos outros.",
    en: "As soon as he understands the lesson, he can explain it to others.",
  },
  {
    pt: "Se nós tivermos tempo, faremos um piquenique.",
    en: "If we have time, we'll have a picnic.",
  },
];

export default phrases;
