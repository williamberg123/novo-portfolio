import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Container, SocialMedia } from './styles';

export default function SocialMedias() {
	return (
		<Container>
			<SocialMedia target="_blank" href="https://www.linkedin.com/in/william-diogo/" rel="noreferrer">
				<FaLinkedinIn />
				<span>william-diogo</span>
			</SocialMedia>

			<SocialMedia target="_blank" href="https://github.com/williamberg123/" rel="noreferrer">
				<FaGithub />
				<span>williamberg123</span>
			</SocialMedia>

			<SocialMedia target="_blank" href="https://www.instagram.com/wi_diogo/" rel="noreferrer">
				<FaInstagram />
				<span>wi_diogo</span>
			</SocialMedia>
		</Container>
	);
}
