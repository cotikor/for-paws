import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavUl, NavLi } from "../../styles/nav";

export const NavList = ({ open }) => {
	return (
		<NavUl open={open}>
			<NavLink to="/adopt" style={{ textDecoration: "none" }}>
				<NavLi>Adopt</NavLi>
			</NavLink>
			<NavLink to="/foster" style={{ textDecoration: "none" }}>
				<NavLi>Foster</NavLi>
			</NavLink>
			<NavLink to="donate" style={{ textDecoration: "none" }}>
				<NavLi>Donate</NavLi>
			</NavLink>
		</NavUl>
	);
};
