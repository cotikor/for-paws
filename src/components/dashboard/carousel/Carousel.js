import React from "react";
import { CarouselContainer, CarouselButton } from "../../../styles/carousel";
import PaginationDisplay from "./PaginationDisplay";
import Image from "./Image";

export const Carousel = ({ images, activeImage, setActiveImage }) => {
	return (
		<CarouselContainer>
			{images.map((image, i) => (
				<Image key={i} image={image} id={i} activeImage={activeImage} />
			))}

			<CarouselButton
				direction="left"
				onClick={() => {
					activeImage === 0
						? setActiveImage(images.length - 1)
						: setActiveImage(activeImage - 1);
				}}
			/>
			<CarouselButton
				direction="right"
				onClick={() => {
					activeImage === images.length - 1
						? setActiveImage(0)
						: setActiveImage(activeImage + 1);
				}}
			/>

			<PaginationDisplay
				active={activeImage}
				images={images}
				setActiveImage={setActiveImage}
			/>
		</CarouselContainer>
	);
};
