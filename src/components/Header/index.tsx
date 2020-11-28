import React from 'react';
import Score from '../Score';
import { HeaderStyle } from './style';
import logo from '../../images/logo.svg';

const Header = () => {
	return (
		<HeaderStyle>
			<img src={logo} alt="logo" />

			<Score />
		</HeaderStyle>
	);
};

export default Header;
