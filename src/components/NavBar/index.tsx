import { Container, Navigation } from './styles';

export default function NavBar() {
	const onClick = (e: any, id: string) => {
		e.preventDefault();

		document.getElementById(id)?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<Container>
			<Navigation>
				<li>
					<a onClick={(e) => onClick(e, 'projects')} href="">
						Projects
					</a>
				</li>
				<li>
					<a onClick={(e) => onClick(e, 'skills')} href="">
						My Skills
					</a>
				</li>
				<li>
					<a onClick={(e) => onClick(e, 'social-medias')} href="">
						Social Medias
					</a>
				</li>
			</Navigation>
		</Container>
	);
}
