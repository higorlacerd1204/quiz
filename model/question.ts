import { randomArray } from '../functions/array';
import AnswerModel from './answer';

export default class QuestionModel {
  #id: number;
  #question: string;
  #answers: AnswerModel[];
  #rightAnswer: boolean;

  constructor(id: number, question: string, answers: AnswerModel[], rightAnswer: boolean) {
    this.#id = id;
    this.#question = question;
    this.#answers = answers;
    this.#rightAnswer = rightAnswer;
  }

  get id() {
    return this.#id;
  }

  get question() {
    return this.#question;
  }

  get answers() {
    return this.#answers;
  }

  get rightAnswer() {
    return this.#rightAnswer;
  }

  get notAnswered() {
    return !this.answered;
  }

  get answered() {
    return this.#answers.some((item) => item.revealed);
  }

  answeredQuestion(index: number): QuestionModel {
    const rightAnswer = this.#answers[index]?.correctAnswer;
    const answers = this.#answers.map((answer, i) => {
      const answerSelected = index === i;
      const mustReveal = answerSelected || answer.correctAnswer;

      console.log(mustReveal);

      return mustReveal ? answer.reveal() : answer;
    });

    return new QuestionModel(this.#id, this.#question, answers, rightAnswer);
  }

  randomQuestions(): QuestionModel {
    let newOrderQuestions = randomArray(this.#answers);

    return new QuestionModel(this.#id, this.#question, newOrderQuestions, this.#rightAnswer);
  }

  toObject() {
    return {
      id: this.#id,
      question: this.#question,
      answers: this.#answers.map((answer) => answer.toObject()),
      answered: this.answered,
      rightAnswer: this.#rightAnswer,
    };
  }
}
