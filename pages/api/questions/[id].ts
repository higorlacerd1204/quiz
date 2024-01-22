import QuestionModel from '../../../model/question';
import questions from '../data/questions';

export default function getQuestions(req, res) {
  const idSelected = parseInt(req.query.id);
  const questionSelected = questions.filter((question) => question.id === idSelected);

  if (questionSelected.length === 1) {
    res.status(200).json(questionSelected[0].randomQuestions().toObject());
  } else {
    res.status(204).send();
  }
}
