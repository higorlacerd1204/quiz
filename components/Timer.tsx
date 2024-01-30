import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../styles/Timer.module.css';

interface TimerProps {
  key: any;
  duration: number;
  emptyTime: () => void;
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        colors={['#BCE596', '#F7B801', '#ED827A', '#ED827A']}
        colorsTime={[10, 6, 3, 0]}
        duration={props.duration}
        isPlaying
        onComplete={props.emptyTime}
        size={120}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
