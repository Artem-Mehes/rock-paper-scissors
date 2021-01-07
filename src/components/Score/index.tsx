import React, { useContext } from 'react';
import { ScoreStyle, ScoreHeading, Number, ResetBtn } from './style';
import { ScoreContext } from '../../context/score';

const Score = () => {
  const { score, setScore } = useContext(ScoreContext);

  return (
    <ScoreStyle>
      <ScoreHeading>score</ScoreHeading>
      <Number>{score}</Number>
      <ResetBtn onClick={() => setScore && setScore(0)}>reset</ResetBtn>
    </ScoreStyle>
  );
};

export default Score;
