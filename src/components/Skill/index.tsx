import { SkillProps } from '../../@types/skill';
import { TechParamProps } from '../../@types/techParam';
import TechParam from '../TechParam';
import { Container, SkillName, TechnologyParemetersContainer } from './styles';

export default function Skill({ name, technologyParemeters }: SkillProps) {
	return (
		<Container>
			<SkillName>{name}</SkillName>
			<TechnologyParemetersContainer>
				{
					technologyParemeters.map((item: TechParamProps, index: number) => <TechParam key={`tech-${index + 1}`} {...item} />)
				}
			</TechnologyParemetersContainer>
		</Container>
	);
}
