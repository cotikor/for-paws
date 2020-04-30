import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Adopt } from "./pages/Adopt";
import { Forms } from "./pages/Forms";
import { MainNav } from "./components/navigation/MainNav";
import { GlobalStyle, AppContainer } from "./styles";


const App = (props) => {
	const [view, setView] = useState('adopt');

	return (
		(
			<>
				<GlobalStyle />
				<MainNav setView={setView} />
				<AppContainer>
					<Switch>
						<Route exact path="/adopt" render={props => (<Adopt setView={setView} />)} />
						<Route
							path={"/foster"}
							render={(props) => <Forms  view={view} />}
						/>
						<Route
							exact path={"/adopt/application"}
							render={(props) => <Forms  view={view} />}
						/>
					</Switch>
				</AppContainer>
			</>
		)
	);
};

export default withRouter(App);

