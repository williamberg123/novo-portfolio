import styled from 'styled-components';

export const Container = styled.span`
	display: flex;
	align-items: center;
	font-weight: bold;
	color: white;
	font-size: 1.25rem;
	user-select: none;

	& .tags {
		color: ${({ theme }) => theme.colors.lightGreen};
		font-size: 1.5rem;
	}

	& .text {
		margin-right: 10px;
	}

	@media (max-width: 800px) {
		font-size: 1rem;

		& .tags {
			font-size: 1.25rem;
		}
	}
`;
