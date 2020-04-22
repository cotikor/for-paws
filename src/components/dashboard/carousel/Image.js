import React from "react";
import { ImageContainer } from "../../../styles/carousel";

const Image = ({ image, activeImage, id }) => (
	<ImageContainer image={image} active={id === activeImage} />
);

export default Image;
