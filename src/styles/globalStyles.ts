import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Jura', sans-serif;
		background-color: ${({ theme }) => theme.colors.darkGray};
	}
`;
