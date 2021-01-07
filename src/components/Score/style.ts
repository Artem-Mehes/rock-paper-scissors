import styled from 'styled-components';

export const ScoreStyle = styled.div`
    background-color: ${({ theme }) => theme.colors.scoreBg};
    border-radius: 10px;
    width: 150px;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 710px) {
        width: 110px;
        padding: 0.4rem;
	}
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

export const ResetBtn = styled.button`
    cursor: pointer;
    background-color: inherit;
    border: none;

    &:hover {
        text-decoration: underline;
    }
`;