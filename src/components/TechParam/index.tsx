import { TechParamProps } from '../../@types/techParam';
import { Container, Dot, ParamName } from './styles';

export default function TechParam(props: TechParamProps) {
	const { name, score } = props;

	return (
		<Container>
			<ParamName>{name}</ParamName>
			{
				Array(score).fill('').map((item, index) => <Dot key={`dot-${index + 1}`} />)
			}

			{
				Array(5 - score).fill('').map((item, index) => <Dot key={`empty-${index + 1}`} className="empty" />)
			}
		</Container>
	);
}
