import styled from 'styled-components';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.darkGray};
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	padding: 0 50px;
	margin: auto;

	& section:last-child {
		border-bottom: none;
	}

	@media (max-width: 800px) {
		padding: 0 20px;
	}
`;

export const Section = styled.section`
	width: 100%;
	min-height: 100vh;
	padding: 50px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

	@media (max-width: 800px) {
		padding: 20px;
	}

	@media (max-width: 600px) {
		padding: 20px 0;
	}
`;

export const SectionTitle = styled.span`
	display: flex;
	align-items: center;
	font-weight: bold;
	color: white;
	font-size: 1.5rem;
	margin-top: 20px;

	& .tags {
		color: ${({ theme }) => theme.colors.lightGreen};
		font-size: 2rem;
	}

	& .text {
		margin-right: 10px;
	}
`;
