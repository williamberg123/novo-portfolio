import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	max-width: 1200px;
	height: 100vh;

	& .texts {
		display: flex;
		flex-direction: column;
		margin-bottom: 100px;
	}

	& h1 {
		color: ${({ theme }) => theme.colors.lightGreen};
		font-size: 3rem;
		padding: 20px;
	}

	& p {
		color: ${({ theme }) => theme.colors.darkGreen};
		font-size: 2rem;
		padding: 0 20px;
	}

	& img {
		display: flex;
		max-width: 500px;
	}

	@media (max-width: 600px) {
		align-items: flex-start;

		& h1 {
			font-size: 2rem;
		}

		& p {
			font-size: 1.5rem;
		}

		& .texts {
			margin-bottom: 0;
		}
	}
`;
