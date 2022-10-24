import styled from 'styled-components';

export const Container = styled.div`
	max-width: 400px;
	display: flex;
	flex-direction: column;
`;

export const FooterFigure = styled.figure`
	display: flex;
	flex-direction: column;
	align-items: center;

	& img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}
`;

export const ToContactByGmail = styled.a`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 10px;
	border: 3px solid ${({ theme }) => theme.colors.lightGreen};
	color: ${({ theme }) => theme.colors.lightGreen};
	font-weight: bold;
	text-decoration: none;
	text-transform: uppercase;
	margin: 20px 0;

	& > svg {
		margin-left: 10px;
		color: white;
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.lightGreen};
		color: white;
	}
`;

export const DownloadCV = styled.a`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
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
`;
