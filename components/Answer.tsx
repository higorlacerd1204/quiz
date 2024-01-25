import AnswerModel from '../model/answer';
import styles from '../styles/Answer.module.css';

interface AnswerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  backgroundLetterColor: string;
  onClickResponse: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
  const answer = props.value;

  return (
    <div className={styles.answer} onClick={() => props.onClickResponse(props.index)}>
      <div className={styles.content}>
        {answer.revealed ? (
          <div className={styles.verse}>
            {answer.correctAnswer ? (
              <div className={styles.correctAnswer}>
                <div>A resposta certa é...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            ) : (
              <div className={styles.wrongAnswer}>
                <div>A resposta informada está errada...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.front}>
            <div className={styles.letter} style={{ backgroundColor: props.backgroundLetterColor }}>
              {props.letter}
            </div>
            <div className={styles.value}>{answer.value}</div>
          </div>
        )}
      </div>
    </div>
  );
}
