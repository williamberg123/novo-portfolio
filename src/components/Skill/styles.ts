import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 10px 20px;
	background-color: white;
	color: ${({ theme }) => theme.colors.lightGreen};
	border: 2px solid ${({ theme }) => theme.colors.lightGreen};
	border-radius: 20px;
	font-weight: bold;
	margin: 20px;
	text-transform: uppercase;
`;
