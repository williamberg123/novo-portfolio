import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Jura', sans-serif;
		background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.darkGray};
	}
`;
