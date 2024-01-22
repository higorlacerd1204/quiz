import AnswerModel from './answer';

export default class QuestionModel {
  #id: number;
  #question: string;
  #answers: AnswerModel[];
  #correctAnswer: boolean;

  constructor(id: number, question: string, answers: AnswerModel[], correctAnswer: false) {
    this.#id = id;
    this.#question = question;
    this.#answers = answers;
    this.#correctAnswer = correctAnswer;
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

  get correctAnswer() {
    return this.#correctAnswer;
  }

  get answered() {
    return this.#answers.some((item) => item.revealed);
  }
}
