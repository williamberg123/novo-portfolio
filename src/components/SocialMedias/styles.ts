import styled from 'styled-components';

export const Container = styled.div`
	width: auto;
	display: flex;
	flex-direction: column;

	@media (max-width: 600px) {
		width: 100%;
		flex-direction: row;
		justify-content: center;
	}
`;

export const SocialMedia = styled.a`
	position: relative;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 1px solid white;
	background-color: ${({ theme }) => theme.colors.darkGray};
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
		color: ${({ theme }) => theme.colors.lightGray};
		border: 1px solid ${({ theme }) => theme.colors.lightGray};
		background-color: transparent;
	}

	@media (max-width: 600px) {
		margin: 0 20px 40px;

		& > span {
			display: none;
		}
	}
`;
