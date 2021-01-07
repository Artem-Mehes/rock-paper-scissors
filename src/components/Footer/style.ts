import styled from 'styled-components';

export const FooterStyle = styled.footer`
    text-align: right;

    @media (max-width: 710px) {
        text-align: center;
	}
`;

export const Button = styled.button`
    background-color: inherit;
    color: ${({ theme }) => theme.colors.regularText};
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 0.5rem 1rem;
    min-width: 130px;
    text-transform: uppercase;
    font-size: 1.1rem;
    cursor: pointer;
    outline: none;

    &:hover {
        border-color: ${({ theme }) => theme.colors.hoverBtnBorder};
        background-color: ${({ theme }) => theme.colors.hoverBtnBg};
    }
`;