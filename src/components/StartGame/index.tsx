import React, { useState } from 'react';
import { Main, Characters } from './style';
import Game from '../Game';
import Character from '../Character';
import { characters } from '../../data';
import { ICharacter } from '../../interfaces';

const StartGame = () => {
	const [isGameStarted, setGameStarted] = useState<boolean>(false);
	const [playerPick, setPlayerPick] = useState<ICharacter>(characters[0]);
	const [enemyPick, setEnemyPick] = useState<ICharacter>(characters[1]);

	const startGame = (playerPick: ICharacter): void => {
		setGameStarted(true);
		setPlayerPick(playerPick);
		getEnemyPick();
	};

	const getEnemyPick = (): void => {
		const randomNum: number = Math.floor(Math.random() * characters.length);

		setEnemyPick(characters[randomNum]);
	};

	const finishRound = (): void => setGameStarted(false);

	return (
		<Main>
			{isGameStarted ? (
				<Game
					playerPick={playerPick}
					enemyPick={enemyPick}
					finishRound={finishRound}
				/>
			) : (
				<Characters>
					{characters.map((item: ICharacter) => {
						return (
							<Character
								position="absolute"
								info={item}
								key={item.name}
								onClick={(): void => startGame(item)}
							></Character>
						);
					})}
				</Characters>
			)}
		</Main>
	);
};

export default StartGame;
