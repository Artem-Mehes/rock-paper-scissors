import styled from 'styled-components';
import pentagon from '../../images/bg-pentagon.svg';

export const Main = styled.main`
	flex: 1;
`;

export const Characters = styled.div`
	position: relative;
	min-height: 500px;
	max-width: 500px;
	position: relative;
	margin: auto;
	background-image: url(${pentagon});
	background-repeat: no-repeat;
	background-position: center;

    div:nth-child(1) {
		left: 178px;
		top: 20px;
	}

	div:nth-child(2) {
		right: 16px;
		top: 137px;
	}

	div:nth-child(3) {
		bottom: 8px;
		right: 59px;
	}

	div:nth-child(4) {
		bottom: 8px;
		left: 59px;
	}

	div:nth-child(5) {
		top: 137px;
		left: 16px;
	}
`;
