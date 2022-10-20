import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Profile from '../../components/Profile';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import { Container, Main, Section, SectionTitle } from './styles';

export default function Home() {
	return (
		<Container>
			<Header />
			<Main>
				<Profile />
				<Section id="projects">
					<SectionTitle>
						<span className="tags">
							&lt;
						</span>

						<span className="text">Projects</span>

						<span className="tags">
							/&gt;
						</span>
					</SectionTitle>

					<Projects />
				</Section>

				<Section id="skills">
					<SectionTitle>
						<span className="tags">
							&lt;
						</span>

						<span className="text">My Skills</span>

						<span className="tags">
							/&gt;
						</span>
					</SectionTitle>

					<Skills />
				</Section>

				<Section id="social-medias">
					<SectionTitle>
						<span className="tags">
							&lt;
						</span>

						<span className="text">Social Medias</span>

						<span className="tags">
							/&gt;
						</span>
					</SectionTitle>

					<Footer />
				</Section>

			</Main>
		</Container>
	);
}
