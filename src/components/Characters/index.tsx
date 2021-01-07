import React from 'react';
import Character from '../Character';
import { ICharacter, ICharactersProps } from '../../interfaces';
import { characters } from '../../data';
import { StyledCharacters } from './style';

const Characters = ({ startGame }: ICharactersProps) => {
	return (
		<StyledCharacters>
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
		</StyledCharacters>
	);
};

export default Characters;
