import React, { useState } from "react";
import Tab from "./Tab";
import { TabsSection } from "../../styles/tabs";

export const Tabs = (props) => {
	const tabLabels = ["Mercury","Venus", "Mars", "Jupiter"];

	return (
		<TabsSection>
			{tabLabels.map((tab, index) => {
				return (
					<Tab
						key={index}
						id={tab}
						selectedTab={props.selectedTab === tab ? true : false}
						setSelected={props.setSelected}
					/>
				);
			})}
		</TabsSection>
	);
};
