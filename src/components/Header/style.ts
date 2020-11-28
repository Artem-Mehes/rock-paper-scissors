import styled from 'styled-components';

export const HeaderStyle = styled.header`
	width: 50%;
	min-width: 300px;
	border: 3px solid ${({ theme }) => theme.colors.headerBorder};
	border-radius: 20px;
	margin: 0 auto;
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;
`;
