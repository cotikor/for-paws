import React from "react";

import { NavBar, StyledNavLink } from "../../styles/nav";

export const MainNav = (props) => {
	return (
		<NavBar>
				<StyledNavLink to="/" logo>
					Space-cation
				</StyledNavLink>
		</NavBar>
	);
};
