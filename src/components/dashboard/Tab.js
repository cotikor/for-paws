import React from "react";
import { TabDiv, TabPar } from "../../styles/tabs";

const Tab = ({ selectedTab, id, setSelected, setActiveImage }) => {
	return (
		<TabDiv
			selectedTab={selectedTab}
			onClick={(e) => {
				e.preventDefault();
				setSelected(id);
				setActiveImage(0);
			}}
		>
			<TabPar>{id}</TabPar>
		</TabDiv>
	);
};

export default Tab;
