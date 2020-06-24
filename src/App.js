import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Adopt } from "./pages/Adopt";
import { Forms } from "./pages/Forms";
import { Landing } from "./pages/Landing";
import { Donate } from "./pages/Donate";
import { MainNav } from "./components/navigation/MainNav";
import { GlobalStyle, AppContainer } from "./styles";

const App = (props) => {
	const [view, setView] = useState("foster");
	const [mode, setMode] = useState('');
	const [activeImage, setActiveImage] = useState(0);
	const tabLabels = ["Diamond", "Onyx", "Sapphire", "Sarina", "Sarabi"];
	const [selectedTab, setSelected] = useState("Diamond");

	return (
		<>
			<GlobalStyle />
			<MainNav setView={setView} />
			<AppContainer>
				<Switch>
					<Route exact path={"/"} render={(props) => <Landing {...props} setView={setView} />} />
					<Route
						exact
						path="/adopt"
						render={(props) => (
							<Adopt
								setView={setView}
								activeImage={activeImage}
								setActiveImage={setActiveImage}
								tabLabels={tabLabels}
								setSelected={setSelected}
								selectedTab={selectedTab}
							/>
						)}
					/>
					<Route exact path={"/foster"} render={(props) => <Forms view={view} setMode={setMode} mode={mode}/>} />
					<Route exact path={"/donate"} render={(props) => <Donate setMode={setMode} mode={mode}/>}/>
					<Route
						exact
						path={"/adopt/application"}
						render={(props) => <Forms view={view} name={selectedTab} setMode={setMode} mode={mode}/>}
					/>
				</Switch>
			</AppContainer>
		</>
	);
};

export default withRouter(App);
