import styled from 'styled-components';

export const StyledGame = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  min-width: 1000px;
  align-items: center;
  height: 100%;
  position: relative;

  @media (max-width: 1070px) {
    min-width: 100%;
    align-items: initial;
    padding-top: 4rem;
  }

  @media (max-width: 710px) {
    justify-content: space-around;
  }
`;

export const GameInner = styled.div`
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 150px;

  @media (max-width: 1070px) {
    margin-top: 56px;
  }

  @media (max-width: 710px) {
    flex-direction: column-reverse;
    max-height: 233px;
    text-align: center;
    margin-top: 100px;
  }
`;

export const Heading = styled.h3`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 1.6rem;

  @media (max-width: 710px) {
    width: 142px;
  }
`;

export const EmptyEnemy = styled.div`
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.emptyEnemy};
  width: 300px;
  height: 300px;
  opacity: 0.2;

  @media (max-width: 710px) {
    width: 140px;
    height: 140px;
  }
`;

export const Title = styled.h4`
  text-transform: uppercase;
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 710px) {
    font-size: 2rem;
  }
`;

export const PlayAgain = styled.button`
  background-color: ${({ theme }) => theme.colors.playAgainBg};
  border: none;
  color: ${({ theme }) => theme.colors.darkText};
  padding: 0 1rem;
  height: 48px;
  border-radius: 9px;
  min-width: 100%;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBtnBg};
    color: #fff;
    border: 2px solid ${({ theme }) => theme.colors.hoverBtnBorder};
  }
`;

export const RoundResult = styled.div`
  @media (max-width: 1070px) {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 710px) {
    width: 280px;
    text-align: center;
  }
`;
