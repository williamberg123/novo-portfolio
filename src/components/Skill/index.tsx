import { SkillProps } from '../../@types/skill';
import { Container } from './styles';

export default function Skill({ name }: SkillProps) {
	return (
		<Container>
			<span>{name}</span>
		</Container>
	);
}
