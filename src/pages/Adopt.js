import React, { useState } from "react";
import { HomeContainer } from "../styles";
import { Tabs } from "../components/dashboard/Tabs";
import { Content } from "../components/dashboard/Content";

export const Home = (props) => {
	const [activeImage, setActiveImage] = useState(0);
	const tabLabels = ["Diamond", "Onyx", "Sapphire", "Sarina", "Sarabi"];
	const [selectedTab, setSelected] = useState("Diamond");

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
