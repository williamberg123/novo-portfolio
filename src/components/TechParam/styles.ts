import styled from 'styled-components';

export const Container = styled.span`
	display: flex;
	align-items: center;
	font-weight: 500;
	font-size: 0.8rem;
	margin-bottom: 10px;
`;

export const ParamName = styled.span`
	margin-right: 20px;
`;

export const Dot = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: white;
	margin-right: 5px;

	&.empty {
		background-color: ${({ theme }) => theme.colors.lightGray};
		border: 1px solid white;
	}
`;
