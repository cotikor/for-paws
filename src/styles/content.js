import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContentContainer = styled.section`
	display: flex;
	box-shadow: 0px 0px 50px 5px;
	flex-flow: column nowrap;
	align-items: center;
	height: 100%;
	max-width: 400px;
	width: 100%;
	background: rgba(18, 28, 50, 0.8);
	position: relative;
`;

export const BottomContent = styled.div`
	position: absolute;
	bottom: 0;
	height: 30%;
	border: 1px solid white;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	padding: 1%;
	width: 100%;
`;

export const DescriptionP = styled.p`
	color: white;
	font-size: 1.1rem;
	padding: 2.5%;
	text-align: center;
`;

export const AdoptButton = styled(NavLink)`
	color: white;
	text-decoration: none;
	font-size: 1.6rem;
`;
