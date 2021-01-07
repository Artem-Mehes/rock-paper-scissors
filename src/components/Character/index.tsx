import React from 'react';
import { StyledCharacter } from './style';
import { ICharacterProps } from '../../interfaces';

const Character = ({
  info: { name, imgSrc },
  onClick,
  position,
  size,
}: ICharacterProps) => {
  return (
    <StyledCharacter
      size={size}
      position={position}
      characterName={name}
      imgSrc={imgSrc}
      onClick={onClick}
    />
  );
};

export default Character;
