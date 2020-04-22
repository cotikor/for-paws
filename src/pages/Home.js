import React, { useState } from "react";
import { HomeDiv } from "../styles";
import { Tabs } from "../components/dashboard/Tabs";
import { Content } from "../components/dashboard/Content";

export const Home = (props) => {
	const [selectedTab, setSelected] = useState("Mercury");

	return (
		<>
			<HomeDiv>
				<Tabs selectedTab={selectedTab} setSelected={setSelected} />
				<Content />
			</HomeDiv>
		</>
	);
};
