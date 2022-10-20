import { AiOutlineLink } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';

import profileImage from '../../assets/new-image.jpg';
import myCV from '../../assets/cv-williamberg.pdf';

import { Container, DownloadCV, ProfileDescription, ProfileFigure, ProfileInfo, ToContactByGmail } from './styles';

export default function Profile() {
	return (
		<Container>
			<ProfileFigure>
				<img src={profileImage} alt="profile" />
			</ProfileFigure>

			<ProfileInfo>
				<ProfileDescription>
					<span className="tags">
						&lt;
					</span>

					<span className="text">William Berg</span>

					<span className="tags">
						/&gt;
					</span>
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
