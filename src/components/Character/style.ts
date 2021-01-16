import styled, { css } from 'styled-components';
import { ICharacterStyleProps } from '../../interfaces';

export const StyledCharacter = styled.div`
  width: ${({ size }) => (size === 'large' ? '300px' : '150px')};
  height: ${({ size }) => (size === 'large' ? '300px' : '150px')};
  background-repeat: no-repeat;
  position: ${({ position }: ICharacterStyleProps) => position || 'relative'};
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s;
  background: ${({ theme, characterName }) =>
    theme.colors[`${characterName}Gradient`]};
  box-shadow: ${({ theme, characterName, size }) =>
    `inset 0px ${size === 'large' ? '-15px' : '-6px'} 0px 0px ${
      theme.colors[`${characterName}Shadow`]
    }`};

  &:hover {
    transform: scale(1.1);
  }

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.charactersBg};
    border-radius: 50%;
    width: ${({ size }) => (size === 'large' ? '220px' : '115px')};
    height: ${({ size }) => (size === 'large' ? '220px' : '115px')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: ${({ theme, size }) =>
      `inset 0px ${size === 'large' ? '15px' : '5px'} 0px 0px ${
        theme.colors.charactersShadow
      }`};
  }

  &::after {
    background-image: url(${({ imgSrc }: ICharacterStyleProps) => imgSrc});
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: ${({ size }) => (size === 'large' ? '120px' : '70px')};
    height: ${({ size }) => (size === 'large' ? '120px' : '70px')};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  @media (max-width: 710px) {
    width: ${({ size }) => (size === 'large' ? '140px' : '100px')};
    height: ${({ size }) => (size === 'large' ? '140px' : '100px')};
    ${({ size, theme, characterName }) =>
      size === 'large' &&
      css`
        box-shadow: inset 0px -8px 0px 0px ${theme.colors[`${characterName}Shadow`]};
      `}

    &::before {
      width: ${({ size }) => (size === 'large' ? '100px' : '80px')};
      height: ${({ size }) => (size === 'large' ? '100px' : '80px')};
      box-shadow: ${({ theme, size }) =>
        `inset 0px ${size === 'large' && '8px'} 0px 0px ${
          theme.colors.charactersShadow
        }`};
    }

    &::after {
      background-size: ${({ size }) => (size === 'large' ? '50px' : '39px')};
    }
  }
`;
