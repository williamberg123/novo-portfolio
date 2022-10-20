import { MobileNavBarProps } from '../../@types/mobileNavBar';
import { Container, Navigation } from './styles';

export default function MobileNavBar({ toggleMenu, mobileNavBarRef, ...rest }: MobileNavBarProps) {
	const func = (id: string) => {
		toggleMenu();

		document.getElementById(id)?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const onClick = (e: any, id: string) => {
		e.preventDefault();
		func(id);
	};

	return (
		<Container {...rest} ref={mobileNavBarRef}>
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
