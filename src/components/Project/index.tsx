import { useEffect, useRef } from 'react';
import { ProjectProps } from '../../@types/project';
import { Container } from './styles';

export default function Project({ name, image, githubLink, projectLink, animationDelay }: ProjectProps) {
	const projectRef = useRef<HTMLDivElement | null>(null);

	const onScroll = () => {
		if (window.scrollY >= Number(projectRef.current?.scrollHeight) + 200 && projectRef.current) {
			projectRef.current.style.animation = `toemergeproject 1.5s ease ${animationDelay}s`;
			setTimeout(() => {
				if (projectRef.current) {
					projectRef.current.style.opacity = '100%';
				}
			}, 1500 + animationDelay * 1000);
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
