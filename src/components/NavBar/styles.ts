import styled from 'styled-components';

export const Container = styled.nav`

`;

export const Navigation = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;

	& a {
		display: flex;
		text-decoration: none;
		padding: 10px 20px;
		color: white;
		font-weight: bold;
		border: 2px solid ${({ theme }) => theme.colors.lightGreen};
		border-radius: 20px;
		margin-right: 20px;
		transition: 0.3s;

		&:hover {
			background-color: ${({ theme }) => theme.colors.lightGreen};
		}
	}

	@media (max-width: 800px) {
		& a {
			padding: 7px 15px;
			font-size: 0.8rem;
		}
	}
`;
