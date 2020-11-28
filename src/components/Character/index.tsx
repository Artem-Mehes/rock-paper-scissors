import React from 'react';
import { StyledCharacter } from './style';
import { ICharacterProps } from '../../interfaces';

const Character = ({ info, onClick, position, size }: ICharacterProps) => {
	return (
		<StyledCharacter
            size={size}
			position={position}
			characterName={info.name}
			imgSrc={info.imgSrc}
			onClick={onClick}
		/>
	);
};

export default Character;
