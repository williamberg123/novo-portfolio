import { gql, useQuery } from '@apollo/client';
import Skill from '../Skill';
import { Container } from './styles';

const GET_TECHNOLOGIES_QUERY = gql`
	query MyQuery {
		technologies {
			name
			technologyParemeters {
				name
				score
			}
  		}
	}
`;

export default function Skills() {
	const { data } = useQuery(GET_TECHNOLOGIES_QUERY);

	return (
		<Container>
			{
				data?.technologies.map((tech: any, index: number) => <Skill {...tech} key={`skill-${index + 1}`} />)
			}
		</Container>
	);
}
