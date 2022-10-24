import { useEffect, useRef } from 'react';
import { ProjectProps } from '../../@types/project';
import { Container } from './styles';

export default function Project({ name, image, githubLink, projectLink }: ProjectProps) {
	const projectRef = useRef<HTMLDivElement | null>(null);

	const onScroll = () => {
		const elementPosition = projectRef.current?.getBoundingClientRect().top;
		let isOnScreen;

		if (elementPosition) isOnScreen = elementPosition <= (window.innerHeight / 2);

		if (isOnScreen && projectRef.current) {
			projectRef.current.style.animation = 'toemergeproject 1.5s ease';

			setTimeout(() => {
				if (projectRef.current) {
					projectRef.current.style.opacity = '100%';
				}
			}, 1500);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<Container ref={projectRef}>
			<img src={image.url} alt={name} />
			<div className="hidden-content">
				<a target="_blank" rel="noreferrer" href={githubLink}>code</a>
				<a target="_blank" rel="noreferrer" href={projectLink}>live</a>
			</div>
		</Container>
	);
}
