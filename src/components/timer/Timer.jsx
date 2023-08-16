import { useCallback, useEffect } from 'react';
import * as S from 'components/timer/Timer.style';
import { GiTimeBomb } from 'react-icons/gi';
import { useRecoilState } from 'recoil';
import { currentTimeState } from 'recoil/atoms/gameState';

function Timer() {
  const [currentTime, setCurrentTime] = useRecoilState(currentTimeState);

  useEffect(() => {
    if (currentTime === 0) {
      return;
    }

    const calculate = setInterval(() => {
      setCurrentTime((currentTime) => currentTime - 1);
    }, 1000);

    return () => clearInterval(calculate);
  }, [currentTime]);

  const convertTime = useCallback((seconds) => {
    const addZero = (num) => (num < 10 ? '0' : '') + num;

    if (seconds < 61) return '00:' + addZero(seconds);

    const mins = Math.floor(seconds / 60);
    const secs = seconds - mins * 60;

    return addZero(mins) + ':' + addZero(secs);
  }, []);

  return (
    <S.TimerWrapper>
      <S.IconBox $sec={currentTime}>
        <GiTimeBomb size={'100%'} />
      </S.IconBox>
      <S.TimeSpan $sec={currentTime}>{convertTime(currentTime)}</S.TimeSpan>
    </S.TimerWrapper>
  );
}

export default Timer;
