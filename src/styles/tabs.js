import styled from "styled-components";

export const TabsSection = styled.section`
	min-height: 30px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	background: none;
	max-width: 500px;
	width: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	@media only screen and (orientation: landscape) and (max-height: 760px) {
		height: 10%;
	}
`;

export const TabDiv = styled.div`
	display: flex;
	justify-content: center;
	border-radius: inherit;
	align-items: center;
	width: calc(100% / 5);
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
