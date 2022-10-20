import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { TbBrandGmail } from 'react-icons/tb';

import { Container, SocialMedia, SocialMediasContainer } from './styles';

export default function Footer() {
	return (
		<Container>
			<SocialMediasContainer>
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

				<SocialMedia target="_blank" href="mailto:williamberg567@gmail.com">
					<TbBrandGmail />
					<span>williamberg567@gmail.com</span>
				</SocialMedia>
			</SocialMediasContainer>
		</Container>
	);
}
