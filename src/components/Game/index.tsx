import React, { useState, useEffect, useContext } from 'react';
import Character from '../Character';
import {
	StyledGame,
	Heading,
	GameInner,
	EmptyEnemy,
	RoundResult,
	PlayAgain,
} from './style';
import { IGameProps } from '../../interfaces';
import { rules } from '../../data';
import { ScoreContext } from '../../context/Score';

const Game = ({ playerPick, enemyPick, finishRound }: IGameProps) => {
	const { setScore } = useContext(ScoreContext);
	const [isEnemyShown, setEnemyShown] = useState<boolean>(false);
	const [winner, setWinner] = useState<string>('');

	useEffect(() => {
		const getRoundResult = (): void => {
			setEnemyShown(true);

			const playerChar: string = playerPick.name;
			const enemyChar: string = enemyPick.name;

			if (rules[playerChar].beats.includes(enemyChar)) {
				setWinner('player');

				setScore !== undefined &&
					setScore((score) => score + 1);
			} else if (rules[playerChar].lose.includes(enemyChar)) {
				setWinner('enemy');

				setScore !== undefined &&
					setScore((score) => score - 1);
			} else {
				setWinner('draw');
			}
		};

		const timerId: number = setTimeout(getRoundResult, 2000);

		return (): void => clearTimeout(timerId);
	}, [playerPick, enemyPick, setScore]);

	let roundResultTitle: string = '';

	switch (winner) {
		case 'player': {
			roundResultTitle = 'you win';
			break;
		}
		case 'enemy': {
			roundResultTitle = 'you lose';
			break;
		}
		default: {
			roundResultTitle = 'draw';
		}
	}

	return (
		<StyledGame>
			<GameInner>
				<Heading>you picked</Heading>
				<Character info={playerPick} size="large" />
			</GameInner>

			{winner.length > 0 && (
				<div>
					<RoundResult>{roundResultTitle}</RoundResult>
					<PlayAgain onClick={finishRound}>play again</PlayAgain>
				</div>
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
