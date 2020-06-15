import React from "react";
import { NavLink } from "react-router-dom";
import { NavUl, NavLi } from "../../styles/nav";

export const NavList = ({ open, setView }) => {
	return (
		<NavUl open={open}>
			<NavLink to="/adopt" style={{ textDecoration: "none" }}>
				<NavLi>Adopt</NavLi>
			</NavLink>
			<NavLink
				to="/foster"
				style={{ textDecoration: "none" }}
				onClick={(e) => {
					setView("foster");
				}}
			>
				<NavLi>Foster</NavLi>
			</NavLink>
			<NavLink to="donate" style={{ textDecoration: "none" }}>
				<NavLi>Donate</NavLi>
			</NavLink>
		</NavUl>
	);
};
