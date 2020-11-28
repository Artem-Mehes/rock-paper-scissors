import styled from 'styled-components';

export const StyledGame = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 0 auto;
    min-width: 500px;
    align-items: center;
    height: 100%;
`;

export const GameInner = styled.div`
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width: 250px;
`;

export const Heading = styled.h3`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 1.6rem;
`;

export const EmptyEnemy = styled.div`
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.emptyEnemy};
    width: 300px;
    height: 300px;
    opacity: 0.2;
`;

export const RoundResult = styled.h4`
    text-transform: uppercase;
    font-size: 4rem;
    margin-bottom: 1rem;
`;

export const PlayAgain = styled.button`
    background-color: ${({ theme }) => theme.colors.playAgainBg};
    border: none;
    color: ${({ theme }) => theme.colors.darkText};
    padding: 1rem;
    border-radius: 9px;
    min-width: 100%;
    text-transform: uppercase;
    cursor: pointer;
`;