import { useEffect, useRef, useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';

import useMediaQuery from '../../hooks/useMediaQuery';
import Logo from '../Logo';
import MobileNavBar from '../MobileNavBar';
import NavBar from '../NavBar';
import { HeaderContainer } from './styles';

export default function Header() {
	const isMobile = useMediaQuery('(max-width: 600px)');
	const [ isOpen, setIsOpen ] = useState(false);
	const [ isFirstRender, setIsFirstRender ] = useState(true);

	const mobileNavBarRef = useRef<any | null>(null);

	const toggleMenu = () => {
		setIsFirstRender(false);

		if (isOpen) {
			setTimeout(() => {
				mobileNavBarRef.current.style.display = 'none';
			}, 300);
		} else {
			mobileNavBarRef.current.style.display = 'block';
		}

		setIsOpen((s) => !s);
	};

	useEffect(() => {
		if (!isMobile) {
			setIsFirstRender(true);
			setIsOpen(false);
			mobileNavBarRef.current.style.display = 'none';
		}
	}, [isMobile]);

	return (
		<HeaderContainer>
			<Logo />

			{
				isMobile
				? (
					isOpen
					? <CgClose onClick={toggleMenu} className="menu-svg" />
					: <CgMenuRight onClick={toggleMenu} className="menu-svg" />
				)
				: <NavBar />
			}

			<MobileNavBar toggleMenu={toggleMenu} mustBeOpen={isMobile && isOpen} isFirstRender={isFirstRender} mobileNavBarRef={mobileNavBarRef} />
		</HeaderContainer>
	);
}
