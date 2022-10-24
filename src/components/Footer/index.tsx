import FooterProfile from '../FooterProfile';
import SocialMedias from '../SocialMedias';

import { Author, Container } from './styles';

export default function Footer() {
	return (
		<Container id="more-info">
			<div className="footer-main-content">
				<SocialMedias />
				<FooterProfile />
			</div>

			<Author>
				by
				<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/william-diogo/">
					William Berg
				</a>
			</Author>
		</Container>
	);
}
