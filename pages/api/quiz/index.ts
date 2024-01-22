import { randomArray } from '../../../functions/array';
import questions from '../data/questions';

export default function getQuiz(req, res) {
  const idsQuestions = questions.map((question) => question.id);

  res.status(200).json(randomArray(idsQuestions));
}
