import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import {Carousel} from "./components/dashboard/carousel/Carousel"
import { MainNav } from "./components/navigation/MainNav";
import { GlobalStyle, AppContainer } from "./styles";


const App = (props) => {
	return (
		<>
			<GlobalStyle />
			<MainNav />
			<AppContainer>
				<Switch>
					<Route exact path="/adopt" component={Home} />
				</Switch>
			</AppContainer>
		</>
	);
};

export default withRouter(App);

