import React, { useState } from "react";
import Tab from "./Tab";
import { TabsSection } from "../../styles/tabs";

export const Tabs = ({
	tabLabels,
	selectedTab,
	setSelected,
	setActiveImage,
}) => {
	return (
		<TabsSection>
			{tabLabels.map((tab, index) => {
				return (
					<Tab
						key={index}
						id={tab}
						selectedTab={selectedTab === tab ? true : false}
						setSelected={setSelected}
						setActiveImage={setActiveImage}
					/>
				);
			})}
		</TabsSection>
	);
};
