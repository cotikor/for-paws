import React, { useState } from "react";
import { HomeContainer } from "../styles";
import { Tabs } from "../components/dashboard/Tabs";
import { Content } from "../components/dashboard/Content";

export const Home = (props) => {
	const [activeImage, setActiveImage] = useState(0);
	const tabLabels = ["Mercury", "Venus", "Mars", "Jupiter"];
	const [selectedTab, setSelected] = useState("Mercury");

	return (
		<>
			<HomeContainer>
				<Tabs
					tabLabels={tabLabels}
					selectedTab={selectedTab}
					setSelected={setSelected}
					setActiveImage={setActiveImage}
				/>
				<Content
					selectedTab={selectedTab}
					activeImage={activeImage}
					setActiveImage={setActiveImage}
				/>
			</HomeContainer>
		</>
	);
};
