import React from 'react'
import { FooterStyle, Button } from './style';
import { IFooterProps } from '../../interfaces';

const Footer = ({ openModal }: IFooterProps) => {
    return (
        <FooterStyle>
            <Button onClick={openModal}>Rules</Button>
        </FooterStyle>
    )
}

export default Footer;
