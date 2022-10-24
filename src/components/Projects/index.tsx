import { useQuery, gql } from '@apollo/client';

import Project from '../Project';
import { Container } from './styles';

const GET_PROJECTS_QUERY = gql`
	query GetProjects {
		projects {
			name
			image {
				url
			}
			githubLink
			projectLink
		}
	}
`;

export default function Projects() {
	const { data } = useQuery(GET_PROJECTS_QUERY);

	return (
		<Container>
			{
				data?.projects.map((project: any, index: number) => <Project animationDelay={0.2 * index} {...project} key={`item-${index}`} />)
			}
		</Container>
	);
}
