import QuestionModel from '../model/question';
import styles from '../styles/Quiz.module.css';
import Button from './Button';
import Question from './Question';

interface QuizProps {
  question: QuestionModel;
  lastQuestion: boolean;
  questionAnswered: (questao: QuestionModel) => void;
  goNextStep: () => void;
}

export default function Quiz(props: QuizProps) {
  function onClickResponse(index: number) {
    if (props.question.notAnswered) {
      props.questionAnswered(props.question.answeredQuestion(index));
    }
  }

  return (
    <div className={styles.quiz}>
      {props.question ? (
        <Question
          emptyTime={props.goNextStep}
          onClickResponse={onClickResponse}
          timeAnswer={10}
          value={props.question}
        />
      ) : (
        false
      )}
      <Button onClick={props.goNextStep} text={props.lastQuestion ? 'Finalizar' : 'Próxima'} />
    </div>
  );
}
