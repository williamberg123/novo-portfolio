import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 20px;
	background-color: ${({ theme }) => theme.colors.lightGray};
	color: white;
	border-radius: 10px;
	border: 1px solid white;
	font-weight: bold;
	margin: 20px;
	text-transform: uppercase;
`;

export const SkillName = styled.span`
	margin-bottom: 20px;
	font-size: 1.3rem;
`;

export const TechnologyParemetersContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
