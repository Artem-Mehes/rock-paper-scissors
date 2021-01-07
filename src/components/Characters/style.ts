import styled from 'styled-components';
import pentagon from '../../images/bg-pentagon.svg';

export const StyledCharacters = styled.div`
	position: relative;
	min-height: 500px;
	width: 500px;
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

	@media (max-width: 710px) {
		background-size: 237px;
        width: 280px;

		div:nth-child(1) {
            left: 92px;
            top: 79px;
		}

		div:nth-child(2) {
            right: -8px;
            top: 169px;
		}

		div:nth-child(3) {
			bottom: 92px;
            right: 9px;
		}

		div:nth-child(4) {
			bottom: 92px;
			left: 9px;
		}

		div:nth-child(5) {
			top: 169px;
			left: -8px;
		}
	}
`;
