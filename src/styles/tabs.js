import styled from "styled-components";

export const TabsSection = styled.section`
	height: 60px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	background: none;
	max-width: 400px;
	width: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

export const TabDiv = styled.div`
	display: flex;
	justify-content: center;
	border-radius: inherit;
	align-items: center;
	width: calc(100% / 4);
	cursor: pointer;
	font-weight: bold;
	text-align: center;
	background: ${(props) =>
		props.selectedTab ? "rgba(100,100,100,.9)" : "rgba(18, 28, 50, 0.9)"};
	z-index: ${(props) => (props.selectedTab ? 20 : "inherit")};
	font-weight: ${(props) => (props.selectedTab ? "bold" : "300")};
`;

export const TabPar = styled.p`
	font-size: 1rem;
	color: #ffffff;
	font-style: italic;
`;
