import error404Image from '../../assets/404-error.png';
import { Container } from './styles';

export default function PageNotFound() {
	return (
		<Container>
			<div className="texts">
				<h1>Error: Page not found</h1>
				<p>Please return to back</p>
			</div>
			<img src={error404Image} alt="error-404" />
		</Container>
	);
}
