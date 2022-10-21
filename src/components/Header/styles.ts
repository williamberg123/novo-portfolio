import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	padding: 20px;
	align-items: center;
	justify-content: space-between;
	position: relative;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
	background-color: ${({ theme }) => theme.colors.darkGray};
	z-index: 5;

	& .menu-svg {
		color: ${({ theme }) => theme.colors.lightGreen};
		width: 30px;
		height: 30px;
	}

	/* @media (max-width: 600px) {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
	} */
`;
