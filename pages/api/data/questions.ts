import QuestionModel from '../../../model/question';
import AnswerModel from '../../../model/answer';

const allQuestions: QuestionModel[] = [
  new QuestionModel(
    1,
    'Qual bicho transmite a Doença de Chagas?',
    [
      AnswerModel.wrongAnswer('Abelha'),
      AnswerModel.wrongAnswer('Barata'),
      AnswerModel.wrongAnswer('Pulga'),
      AnswerModel.correctAnswer('Barbeiro'),
    ],
    false,
  ),
  new QuestionModel(
    2,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      AnswerModel.wrongAnswer('Caju'),
      AnswerModel.wrongAnswer('Côco'),
      AnswerModel.wrongAnswer('Chuchu'),
      AnswerModel.correctAnswer('Abóbora'),
    ],
    false,
  ),
  new QuestionModel(
    3,
    'Qual é o coletivo de cães?',
    [
      AnswerModel.wrongAnswer('Manada'),
      AnswerModel.wrongAnswer('Alcateia'),
      AnswerModel.wrongAnswer('Rebanho'),
      AnswerModel.correctAnswer('Matilha'),
    ],
    false,
  ),
  new QuestionModel(
    4,
    'Qual é o triângulo que tem todos os lados diferentes?',
    [
      AnswerModel.wrongAnswer('Equilátero'),
      AnswerModel.wrongAnswer('Isóceles'),
      AnswerModel.wrongAnswer('Trapézio'),
      AnswerModel.correctAnswer('Escaleno'),
    ],
    false,
  ),
  new QuestionModel(
    5,
    'Quem compôs o Hino da Independência?',
    [
      AnswerModel.wrongAnswer('Castro Alves'),
      AnswerModel.wrongAnswer('Manuel Bandeira'),
      AnswerModel.wrongAnswer('Carlos Gomes'),
      AnswerModel.correctAnswer('Dom Pedro I'),
    ],
    false,
  ),
  new QuestionModel(
    6,
    'Qual é o antônimo de "malograr"?',
    [
      AnswerModel.wrongAnswer('Perder'),
      AnswerModel.wrongAnswer('Fracassar'),
      AnswerModel.wrongAnswer('Desprezar'),
      AnswerModel.correctAnswer('Conseguir'),
    ],
    false,
  ),
  new QuestionModel(
    7,
    'Em que país nasceu Carmen Miranda?',
    [
      AnswerModel.wrongAnswer('Argentina'),
      AnswerModel.wrongAnswer('Espanha'),
      AnswerModel.wrongAnswer('Brasil'),
      AnswerModel.correctAnswer('Portugal'),
    ],
    false,
  ),
  new QuestionModel(
    8,
    'Qual foi o último Presidente do período da ditadura militar no Brasil?',
    [
      AnswerModel.wrongAnswer('Costa e Silva'),
      AnswerModel.wrongAnswer('Emílio Médici'),
      AnswerModel.wrongAnswer('Ernesto Geisel'),
      AnswerModel.correctAnswer('João Figueiredo'),
    ],
    false,
  ),
  new QuestionModel(
    9,
    'Seguindo a sequência do baralho, qual carta vem depois do dez?',
    [
      AnswerModel.wrongAnswer('Ás'),
      AnswerModel.wrongAnswer('Nove'),
      AnswerModel.wrongAnswer('Rei'),
      AnswerModel.correctAnswer('Valete'),
    ],
    false,
  ),
  new QuestionModel(
    10,
    'O adjetivo "venoso" está relacionado a:',
    [
      AnswerModel.wrongAnswer('Vela'),
      AnswerModel.wrongAnswer('Vento'),
      AnswerModel.wrongAnswer('Vênia'),
      AnswerModel.correctAnswer('Veia'),
    ],
    false,
  ),
  new QuestionModel(
    11,
    'Que nome se dá à purificação por meio da água?',
    [
      AnswerModel.wrongAnswer('Abrupção'),
      AnswerModel.wrongAnswer('Abolição'),
      AnswerModel.wrongAnswer('Abnegação'),
      AnswerModel.correctAnswer('Ablução'),
    ],
    false,
  ),
  new QuestionModel(
    12,
    'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?',
    [
      AnswerModel.wrongAnswer('Monte Branco'),
      AnswerModel.wrongAnswer('Monte Fuji'),
      AnswerModel.wrongAnswer('Monte Carlo'),
      AnswerModel.correctAnswer('Monte Everest'),
    ],
    false,
  ),
  new QuestionModel(
    13,
    'Em que parte do corpo se encontra a epiglote?',
    [
      AnswerModel.wrongAnswer('Estômago'),
      AnswerModel.wrongAnswer('Pâncreas'),
      AnswerModel.wrongAnswer('Rim'),
      AnswerModel.correctAnswer('Pescoço'),
    ],
    false,
  ),
  new QuestionModel(
    14,
    'A compensação por perda é chamada de...',
    [
      AnswerModel.wrongAnswer('Déficit'),
      AnswerModel.wrongAnswer('Indexação'),
      AnswerModel.wrongAnswer('Indébito'),
      AnswerModel.correctAnswer('Indenização'),
    ],
    false,
  ),
  new QuestionModel(
    15,
    'Que personagem do folclore brasileiro tem uma perna só?',
    [
      AnswerModel.wrongAnswer('Cuca'),
      AnswerModel.wrongAnswer('Curupira'),
      AnswerModel.wrongAnswer('Boitatá'),
      AnswerModel.correctAnswer('Saci-pererê'),
    ],
    false,
  ),
  new QuestionModel(
    16,
    'Quem é o "patrono" do Exército Brasileiro?',
    [
      AnswerModel.wrongAnswer('Marechal Deodoro'),
      AnswerModel.wrongAnswer('Barão de Mauá'),
      AnswerModel.wrongAnswer('Marquês de Pombal'),
      AnswerModel.correctAnswer('Duque de Caxias'),
    ],
    false,
  ),
];

export default allQuestions;
