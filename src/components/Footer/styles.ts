import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const SocialMediasContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 50px;
	margin-left: 30px;
`;

export const SocialMedia = styled.a`
	position: relative;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.darkGreen};
	color: white;
	margin-bottom: 40px;
	cursor: pointer;
	transition: 0.2s;

	& > svg {
		width: 20px;
		height: 20px;
	}

	& > span {
		width: 200px;
		display: flex;
		position: absolute;
		left: 70px;
		font-size: 1.5rem;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.darkGreen};
		border: 1px solid ${({ theme }) => theme.colors.darkGreen};
		background-color: transparent;
	}

	@media (max-width: 600px) {
		& > span {
			font-size: 1rem;
		}
	}
`;
