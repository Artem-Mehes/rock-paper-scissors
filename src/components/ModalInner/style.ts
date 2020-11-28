import styled from 'styled-components';
import rules from '../../images/image-rules.svg';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
`;

export const Heading = styled.h2`
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkText};
    font-size: 2rem;
`;

export const RulesImage = styled.div`
    background-image: url(${rules});
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
`;

export const Close = styled.button`
    position: relative;
    height: 30px;
    width: 30px;
    background-color: inherit;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.closeModal};
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }

    &:hover {
        &::before,
        &::after {
            background-color: ${({ theme }) => theme.colors.hoverCloseModal};
        }
    }
`;