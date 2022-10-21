import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 100px 20px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

	@media (max-width: 600px) {
		// padding-top: 50px;
	}
`;

export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	animation: toemergeright 1.2s ease;
	padding-left: 20px;

	& > span.buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	@media (max-width: 811px) {
		margin-top: 20px;
		align-items: center;
	}

	@media (max-width: 600px) {
		padding-left: 0;
	}

	@keyframes toemergeright {
		0% {
			transform: translateX(50px);
			opacity: 0%;
		}

		100% {
			transform: translateX(0px);
			opacity: 100%;
		}
	}
`;

export const ProfileFigure = styled.figure`
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: toemergeleft 1.2s ease;

	& > img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
	}

	@keyframes toemergeleft {
		0% {
			transform: translateX(-50px);
			opacity: 0%;
		}

		100% {
			transform: translateX(0px);
			opacity: 100%;
		}
	}
`;

export const ProfileDescription = styled.span`
	display: flex;
	align-items: center;
	font-weight: bold;
	color: white;
	font-size: 1.7rem;
	margin-bottom: 30px;

	& .tags {
		color: ${({ theme }) => theme.colors.lightGreen};
		font-size: 2.2rem;
	}

	& .text {
		margin-right: 10px;
	}

	@media (max-width: 500px) {
		font-size: 1.5rem;

		& .tags {
			font-size: 2rem;
		}
	}
`;
export const ToContactByGmail = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	padding: 15px;
	border-radius: 10px;
	border: 3px solid ${({ theme }) => theme.colors.lightGreen};
	color: ${({ theme }) => theme.colors.lightGreen};
	font-weight: bold;
	margin-right: 20px;
	text-decoration: none;
	text-transform: uppercase;

	& > svg {
		margin-left: 10px;
		color: white;
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.lightGreen};
		color: white;
	}

	@media (max-width: 600px) {
		margin-right: 0;
		width: 100%;
		margin-bottom: 20px;
	}
`;

export const DownloadCV = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	padding: 15px;
	border-radius: 10px;
	border: 3px solid white;
	color: white;
	font-weight: bold;
	text-decoration: none;
	text-transform: uppercase;

	& > svg {
		margin-left: 10px;
		color: ${({ theme }) => theme.colors.lightGreen};
	}

	&:hover {
		background-color: white;
		color: ${({ theme }) => theme.colors.darkGreen};

		& > svg {
			color: ${({ theme }) => theme.colors.darkGreen};
		}
	}

	@media (max-width: 600px) {
		width: 100%;
	}
`;
