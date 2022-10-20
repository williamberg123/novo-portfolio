import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	padding: 20px;
	align-items: center;
	justify-content: space-between;
	position: relative;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

	& .menu-svg {
		color: ${({ theme }) => theme.colors.lightGreen};
		width: 30px;
		height: 30px;
	}
`;
