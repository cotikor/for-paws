import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContentContainer = styled.section`
	display: flex;
	box-shadow: 0px 0px 50px 5px;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: flex-end;
	max-width: 600px;
	max-height:85vh;
	background: rgba(18, 28, 50, 0.8);
	@media only screen and (orientation: landscape) and (max-height: 760px){
		flex-flow: row nowrap;
		height: 70vh;
	}


	
`;

export const BottomContent = styled.div`
	display: flex;
	background: white;
	flex-flow: column nowrap;
	align-items: center;
	padding: 2.5%;
	justify-content: flex-start;
	width: 100%;
	height: 30%;
	overflow: scroll;
	@media only screen and (orientation: landscape) and (max-height: 760px){
		width: 70%;
		height: 100%;
	}
`;

export const DescriptionP = styled.p`
	font-family: 'Montserrat', sans-serif;
	color: rbg(18, 28, 50);
	font-size: 1.8rem;
	padding: 2.5%;
	text-align: center;
`;

export const AdoptButton = styled(NavLink)`
	color: rgb(18, 28, 50);
	text-decoration: none;
	font-size: 3rem;
`;
