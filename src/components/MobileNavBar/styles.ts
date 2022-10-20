import styled, { css } from 'styled-components';

export const Container = styled.nav<{ mustBeOpen: boolean, isFirstRender: boolean }>`
	display: none;
	width: 100%;
	position: absolute;
	top: calc(100% + 1px);
	z-index: 5;

	${({ mustBeOpen, isFirstRender }) => {
		return mustBeOpen
		? css`
			animation: toemerge 0.3s ease;
			left: 0;
		`
		: (
			!isFirstRender && css`
			animation: toexit 0.3s ease;
			left: 100%;
		`);
	}}
	@keyframes toemerge {
		0% {
			left: 100%;
		}
		100% {
			left: 0;
		}
	}
	@keyframes toexit {
		0% {
			left: 0;
		}
		100% {
			left: 100%;
		}
	}
`;

export const Navigation = styled.ul`
	width: 100%;
	height: 100vh;
	list-style: none;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.darkGray};

	& li {
		display: flex;
		margin: 20px 0;
	}

	& a {
		display: flex;
		text-decoration: none;
		padding: 10px 20px;
		color: white;
		font-weight: bold;
		border: 2px solid ${({ theme }) => theme.colors.lightGreen};
		border-radius: 20px;
		transition: 0.3s;
		margin: auto;

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
