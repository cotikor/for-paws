import React from "react";
import {
	CarouselPaginationContainer,
	CarouselPaginationDots,
} from "../../../styles/carousel";

const PaginationDisplay = ({ images, active, setActiveImage }) => {
	return (
		<CarouselPaginationContainer>
			{images.map((image, i) => (
				<CarouselPaginationDots
					key={i}
					active={active === i}
					onClick={() => {
						setActiveImage(i);
					}}
				/>
			))}
		</CarouselPaginationContainer>
	);
};

export default PaginationDisplay;
