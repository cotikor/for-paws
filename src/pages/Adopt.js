import React, { useState } from "react";
import { HomeContainer } from "../styles";
import { Tabs } from "../components/dashboard/Tabs";
import { Content } from "../components/dashboard/Content";

export const Adopt = ({
	setView,
	activeImage,
	setActiveImage,
	tabLabels,
	setSelected,
	selectedTab
}) => {


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
					setView={setView}
					selectedTab={selectedTab}
					activeImage={activeImage}
					setActiveImage={setActiveImage}
				/>
			</HomeContainer>
		</>
	);
};
