import React, { useState } from "react";
import {NavList} from './NavList';
import { NavBar, StyledNavLink, NavMenuIcon, NavH1 } from "../../styles/nav";


export const MainNav = ({setView}) => {
	const [open, setMenuOpen] = useState(false);
	return (
		<>
		<NavBar>
			<StyledNavLink to="/"></StyledNavLink>
			<NavH1>For Paws Humane Society</NavH1>
			<NavMenuIcon
				open={open}
				onClick={(e) => {
					e.preventDefault();
					setMenuOpen(!open);
				}}
			></NavMenuIcon>
			</NavBar>
			<NavList open={open} setView={setView}/>
			</>
	);
};
