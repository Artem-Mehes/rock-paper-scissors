import styled from 'styled-components';

export const ScoreStyle = styled.div`
    background-color: ${({ theme }) => theme.colors.scoreBg};
    border-radius: 10px;
    width: 150px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ScoreHeading = styled.h1`
    color: ${({ theme }) => theme.colors.scoreColor};
    text-transform: uppercase;
    font-size: 1.1rem;
`;

export const Number = styled.span`
    color: ${({ theme }) => theme.colors.darkText};
    font-size: 4rem;
    font-weight: 700;
    opacity: .9;
`;