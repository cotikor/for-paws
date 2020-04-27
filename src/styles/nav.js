import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = styled.nav`
	display: flex;
	flex-flow: row nowrap;
	padding: 1%;
	height: 40px;
	z-index: 100;
	margin-bottom: 20%;
	background-color: rgba(18, 28, 50, 0.9);
	justify-content: center;
	align-items: center;
	box-shadow: 0px 0px 50px 5px;
`;

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	margin: 2.5%;
	color: #ffffff;
	font-size: 2rem;
`;
