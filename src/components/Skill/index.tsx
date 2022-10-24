import { useEffect, useRef } from 'react';
import { SkillProps } from '../../@types/skill';
import { TechParamProps } from '../../@types/techParam';
import TechParam from '../TechParam';
import { Container, SkillName, TechnologyParemetersContainer } from './styles';

export default function Skill({ name, technologyParemeters }: SkillProps) {
	const skillRef = useRef<HTMLDivElement | null>(null);

	const onScroll = () => {
		const elementPosition = skillRef.current?.getBoundingClientRect().top;
		let isOnScreen;

		if (elementPosition) isOnScreen = elementPosition <= (window.innerHeight / 2);

		if (isOnScreen && skillRef.current) {
			skillRef.current.style.animation = 'toemergeskill 1.5s ease';

			setTimeout(() => {
				if (skillRef.current) {
					skillRef.current.style.opacity = '100%';
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
		<Container ref={skillRef}>
			<SkillName>{name}</SkillName>
			<TechnologyParemetersContainer>
				{
					technologyParemeters.map((item: TechParamProps, index: number) => <TechParam key={`tech-${index + 1}`} {...item} />)
				}
			</TechnologyParemetersContainer>
		</Container>
	);
}
