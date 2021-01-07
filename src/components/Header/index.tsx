import React from 'react';
import Score from '../Score';
import { HeaderStyle, Logo } from './style';
import logo from '../../images/logo.svg';

const Header = () => {
	return (
		<HeaderStyle>
			<Logo src={logo} alt="logo" />

			<Score />
		</HeaderStyle>
	);
};

export default Header;
