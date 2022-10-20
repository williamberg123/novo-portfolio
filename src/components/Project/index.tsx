import { ProjectProps } from '../../@types/project';
import { Container } from './styles';

export default function Project({ name, image, githubLink, projectLink }: ProjectProps) {
	return (
		<Container>
			<img src={image.url} alt={name} />
			<div className="hidden-content">
				<a target="_blank" rel="noreferrer" href={githubLink}>code</a>
				<a target="_blank" rel="noreferrer" href={projectLink}>live</a>
			</div>
		</Container>
	);
}
