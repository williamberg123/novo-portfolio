import styled from 'styled-components';

export const Container = styled.div`
	width: 350px;
	aspect-ratio: 16/9;
	border-radius: 10px;
	margin: 20px;
	color: white;
	position: relative;

	& > img {
		width: 100%;
		border-radius: 5px;
	}

	& > span {
		display: flex;
		text-transform: uppercase;
		font-weight: bold;
		margin-bottom: 10px;
		color: ${({ theme }) => theme.colors.lightGreen};
	}

	& .hidden-content {
		display: none;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);

		& > a {
			height: fit-content;
			z-index: 5;
			color: white;
			padding: 5px 10px;
			border: 2px solid white;
			border-radius: 3px;
			text-decoration: none;
			margin: 0 10px;
			font-weight: bold;

			&:hover {
				background-color: white;
				color: black;
			}
		}
	}

	&:hover {
		& .hidden-content {
			display: flex;
		}
	}

	@media (max-width: 600px) {
		margin: 20px 0;
	}
`;
