import { Ref } from 'react';

export interface MobileNavBarProps {
	mobileNavBarRef: Ref<HTMLElement>;
	mustBeOpen: boolean;
	isFirstRender: boolean;
	toggleMenu: () => void;
}
