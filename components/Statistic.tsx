import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../styles/Statistic.module.css';

interface StatisticProps {
  value: any;
  text: string;
  backgroundColor?: string;
  fontColor?: string;
}

export default function Statistic(props: StatisticProps) {
  return (
    <div className={styles.statistic}>
      <div
        className={styles.value}
        style={{
          backgroundColor: props.backgroundColor ?? '#FDD60F',
          color: props.fontColor ?? '#333',
        }}
      >
        {props.value}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
