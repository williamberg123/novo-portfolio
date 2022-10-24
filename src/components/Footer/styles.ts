import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1000px;
	margin: auto;
	padding: 50px 20px 0;

	& div.footer-main-content {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 20px;
	}

	@media (max-width: 600px) {
		& div.footer-main-content {
			flex-direction: column;
		}
	}
`;

export const Author = styled.span`
	padding: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.3rem;
	color: white;

	& > a {
		text-decoration: none;
		margin-left: 10px;
		color: ${({ theme }) => theme.colors.darkGreen};
		font-weight: bold;

		&:hover {
			text-decoration: underline;
		}
	}

	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;
