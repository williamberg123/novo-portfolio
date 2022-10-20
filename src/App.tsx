import { ApolloProvider } from '@apollo/client';

import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import { client } from './services/apollo';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

export default function App() {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<Home />
				<GlobalStyles />
			</ThemeProvider>
		</ApolloProvider>
	);
}
