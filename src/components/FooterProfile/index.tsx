import { AiOutlineLink } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';

import { Container, DownloadCV, FooterFigure, ToContactByGmail } from './styles';
import profileImage from '../../assets/new-image.jpg';

export default function FooterProfile() {
	return (
		<Container>
			<FooterFigure>
				<img src={profileImage} alt="profile" />
			</FooterFigure>

			<ToContactByGmail>
				Contact me by Email
				<AiOutlineLink />
			</ToContactByGmail>

			<DownloadCV>
				Download my CV
				<FiDownload />
			</DownloadCV>
		</Container>
	);
}
