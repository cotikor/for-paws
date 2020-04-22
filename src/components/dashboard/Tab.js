import React, { useState } from "react";
import { TabDiv, TabPar } from "../../styles/tabs";

const Tab = (props) => {
	//STATE
	return (
		<TabDiv
			selectedTab={props.selectedTab}
			onClick={(e) => {
				e.preventDefault();
				props.setSelected(props.id);
			}}
		>
			<TabPar>{props.id}</TabPar>
		</TabDiv>
	);
};

export default Tab;
