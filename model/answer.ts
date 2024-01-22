export default class AnswerModel {
  #value: string;
  #correctAnswer: boolean;
  #revealed: boolean;

  constructor(value: string, correctAnswer: boolean, revealed: boolean) {
    this.#value = value;
    this.#correctAnswer = correctAnswer;
    this.#revealed = revealed;
  }

  static correctAnswer(value: string) {
    return new AnswerModel(value, true, false);
  }

  static wrongAnswer(value: string) {
    return new AnswerModel(value, false, false);
  }

  get value() {
    return this.#value;
  }

  get correctAnswer() {
    return this.#correctAnswer;
  }

  get revealed() {
    return this.#revealed;
  }

  toObject() {
    return {
      value: this.#value,
      correctAnswer: this.#correctAnswer,
      revealed: this.#revealed,
    };
  }
}
