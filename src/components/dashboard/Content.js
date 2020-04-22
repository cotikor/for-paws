import React from "react";
import { Carousel } from "./carousel/Carousel";
import { ContentContainer, DetailsContainer, DescriptionP, WeatherContainer } from "../../styles/content";
import axios from "axios";

export const Content = ({ selectedTab, activeImage, setActiveImage }) => {
	const images = {
		Mercury: [
			"https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=500&q=60",
		],
		Venus: [
			"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
			"https://images.unsplash.com/photo-1529276981564-fba9e3995c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
		],
		Mars: [
			"https://images.unsplash.com/photo-1487235829740-e0ac5a286e1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80",
			"https://images.unsplash.com/photo-1500236861371-c749e9a06b46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		],
		Jupiter: [
			"https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
			"https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
		],
	};

	return (
		<ContentContainer>
			<Carousel
				images={images[selectedTab]}
				activeImage={activeImage}
				setActiveImage={setActiveImage}
			/>
			<DetailsContainer>
				<DescriptionP>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</DescriptionP>
				<WeatherContainer></WeatherContainer>
			</DetailsContainer>
		</ContentContainer>
	);
};
