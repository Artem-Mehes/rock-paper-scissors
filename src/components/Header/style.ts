import styled from 'styled-components';

export const HeaderStyle = styled.header`
	width: 50%;
	min-width: 600px;
	border: 3px solid ${({ theme }) => theme.colors.headerBorder};
	border-radius: 20px;
	margin: 0 auto;
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;
    align-items: center;

	@media (max-width: 710px) {
		width: 100%;
		min-width: auto;
        padding: 1rem;
	}
`;

export const Logo = styled.img`
	@media (max-width: 710px) {
		width: 75px;
		height: 75px;
	}
`;
