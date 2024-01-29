import styles from '../styles/Question.module.css';
import QuestionModel from '../model/question';
import Answer from './Answer';
import QuestionStatement from './QuestionStatement';
import Timer from './Timer';

const letters = [
  { value: 'A', color: '#f2c866' },
  { value: 'B', color: '#f266ba' },
  { value: 'C', color: '#85d4f2' },
  { value: 'D', color: '#bce596' },
];

interface QuestionProps {
  value: QuestionModel;
  onClickResponse: (index: number) => void;
  emptyTime: () => void;
  timeAnswer?: number;
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  function renderAnswered() {
    return question.answers.map((answer, index) => (
      <Answer
        backgroundLetterColor={letters[index].color}
        index={index}
        key={index}
        letter={letters[index].value}
        onClickResponse={props.onClickResponse}
        value={answer}
      />
    ));
  }

  return (
    <div className={styles.question}>
      <QuestionStatement text={question.question} />
      <Timer duration={props.timeAnswer ?? 10} emptyTime={props.emptyTime} />
      {renderAnswered()}
    </div>
  );
}
