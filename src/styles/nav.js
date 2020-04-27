import styled from "styled-components";
import { NavLink } from "react-router-dom";
import buttonLogo from "./assets/logo.png";
import menuOpen from "./assets/menu-open.png";
import menuClose from "./assets/menu-close.png";

export const NavBar = styled.nav`
	display: flex;
	flex-flow: row nowrap;
	padding: 1%;
	height: 40px;
	z-index: 100;
	background-color: rgba(18, 28, 50, 0.9);
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 0px 50px 5px;
`;

export const StyledNavLink = styled(NavLink)`
	width: 24px;
	height: 24px;
	background-image: url(${buttonLogo});
	background-position: center;
	background-repeat: no-repeat;
`;

export const NavH1 = styled.h1`
	font-size: 2rem;
	margin: 2.5%;
	color: #ffffff;
	font-size: 2rem;
`;

export const NavMenuIcon = styled.span`
	width: 24px;
	height: 24px;
	background-image: url(${(props) => (props.open ? menuClose : menuOpen)});
	background-position: center;
	background-repeat: no-repeat;
`;

export const NavUl = styled.ul`
	border-bottom: 1px solid white;
	height: 20px;
	display: ${(props) => (props.open ? "flex" : "none")};
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
	background-color: rgba(100, 100, 100, 0.7);
`;

export const NavLi = styled.li`
	font-size: 1.4rem;
	color: white;
	&:hover {
		scale: 1.1;
		font-weight: bold;
	}
`;
