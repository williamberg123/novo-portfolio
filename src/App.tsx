import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './routes';
import { client } from './services/apollo';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

export default function App() {
	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<ThemeProvider theme={theme}>
					<AppRoutes />
					<GlobalStyles />
				</ThemeProvider>
			</ApolloProvider>
		</BrowserRouter>
	);
}
