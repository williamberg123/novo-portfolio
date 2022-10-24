import { AiOutlineLink } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import profileImage from '../../assets/new-image.jpg';
import myCV from '../../assets/cv-williamberg.pdf';

import { Container, DownloadCV, LinksContainer, ProfileDescription, ProfileFigure, ProfileInfo, ProfileLink, ProfileName, ToContactByGmail } from './styles';

export default function Profile() {
	return (
		<Container>
			<ProfileFigure>
				<img src={profileImage} alt="profile" />
			</ProfileFigure>

			<ProfileInfo>
				<ProfileDescription>
					<ProfileName>
						<span className="tags">
							&lt;
						</span>

						<span className="text">William Berg</span>

						<span className="tags">
							/&gt;
						</span>
					</ProfileName>

					<LinksContainer>
						<ProfileLink
							href="https://www.linkedin.com/in/william-diogo"
							rel="noreferrer"
							target="_blank"
						>
							<FaLinkedinIn />
						</ProfileLink>

						<ProfileLink
							href="https://github.com/williamberg123/"
							rel="noreferrer"
							target="_blank"
						>
							<FaGithub />
						</ProfileLink>

						<ProfileLink
							href="https://www.instagram.com/wi_diogo/"
							rel="noreferrer"
							target="_blank"
						>
							<FaInstagram />
						</ProfileLink>
					</LinksContainer>

				</ProfileDescription>

				<span className="buttons">
					<ToContactByGmail href="mailto:williamberg567@gmail.com">
						Contact me by Email
						<AiOutlineLink />
					</ToContactByGmail>

					<DownloadCV href={myCV} download>
						Download my CV
						<FiDownload />
					</DownloadCV>
				</span>
			</ProfileInfo>
		</Container>
	);
}
