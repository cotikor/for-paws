import React from "react";

import { NavBar, StyledNavLink } from "../../styles/nav";

export const MainNav = (props) => {
	return (
		<NavBar>
				<StyledNavLink to="/">
					Rocky Mountain Humane Society
				</StyledNavLink>
		</NavBar>
	);
};
