import React, { useState, useEffect, useContext } from 'react';
import Character from '../Character';
import {
  StyledGame,
  Heading,
  GameInner,
  EmptyEnemy,
  Title,
  PlayAgain,
  RoundResult,
} from './style';
import { IGameProps } from '../../interfaces';
import { rules } from '../../data';
import { ScoreContext } from '../../context/score';

const Game = ({ playerPick, enemyPick, finishRound }: IGameProps) => {
  const { setScore } = useContext(ScoreContext);
  const [isEnemyShown, setEnemyShown] = useState<boolean>(false);
  const [roundResult, setRoundResult] = useState<string>('');

  useEffect(() => {
    const getRoundResult = (): void => {
      setEnemyShown(true);

      const playerChar: string = playerPick.name;
      const enemyChar: string = enemyPick.name;

      if (rules[playerChar].beats.includes(enemyChar)) {
        setRoundResult('you win');

        setScore !== undefined && setScore((score) => score + 1);
      } else if (rules[playerChar].lose.includes(enemyChar)) {
        setRoundResult('you lose');

        setScore !== undefined && setScore((score) => score - 1);
      } else {
        setRoundResult('draw');
      }
    };

    const timerId: number = setTimeout(getRoundResult, 2000);

    return (): void => clearTimeout(timerId);
  }, [playerPick, enemyPick, setScore]);

  return (
    <StyledGame>
      <GameInner>
        <Heading>you picked</Heading>
        <Character info={playerPick} size="large" />
      </GameInner>

      {roundResult !== '' && (
        <RoundResult>
          <Title>{roundResult}</Title>
          <PlayAgain onClick={finishRound}>play again</PlayAgain>
        </RoundResult>
      )}

      <GameInner>
        <Heading>the house picked</Heading>
        {isEnemyShown ? (
          <Character info={enemyPick} size="large" />
        ) : (
          <EmptyEnemy />
        )}
      </GameInner>
    </StyledGame>
  );
};

export default Game;
