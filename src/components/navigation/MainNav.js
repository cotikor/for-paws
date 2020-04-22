import React from "react";

import { NavBar, StyledNavLink } from "../../styles/nav";

export const MainNav = (props) => {
	return (
		<NavBar>
				<StyledNavLink to="/">
					Space-cation
				</StyledNavLink>
		</NavBar>
	);
};
