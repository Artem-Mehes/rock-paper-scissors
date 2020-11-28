import React, { useContext } from 'react';
import { ScoreStyle, ScoreHeading, Number } from './style';
import { ScoreContext } from '../../context/Score';

const Score = () => {
    const { score } = useContext(ScoreContext);

    return (
        <ScoreStyle>
            <ScoreHeading>score</ScoreHeading>
            <Number>{score}</Number>
        </ScoreStyle>
    )
}

export default Score;
