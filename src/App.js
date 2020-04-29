import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Home } from "./pages/Adopt";
import { FosterForm } from "./components/forms/FosterForm";
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
					<Route path={"/foster"} component={FosterForm} />
				</Switch>
			</AppContainer>
		</>
	);
};

export default withRouter(App);

