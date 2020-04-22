import styled from "styled-components";
import buttonLogo from "./assets/logo.png";

export const CarouselContainer = styled.section`
	position: relative;
	height: 30%;
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	display: flex;
`;

export const ImageContainer = styled.div`
    display: ${(props) => (props.active ? "block" : "none")};
    width: 100%;
    background-image: url('${(props) => props.image}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const CarouselButton = styled.button`
	display: flex;
	position: absolute;
	top: 50%;
	right: ${(props) => (props.direction === "right" ? "25px" : "null")};
	left: ${(props) => (props.direction === "left" ? "25px" : "null")};
	height: 25px;
	width: 25px;
	transform: ${(props) =>
		props.direction === "left" ? "rotate(-90deg)" : "rotate(90deg)"};
	justify-content: center;
	background: none;
	border-radius: 50%;
	cursor: pointer;
	border: 1px solid white;
	background-image: url(${buttonLogo});
	align-items: center;
	&:hover {
		transform: ${(props) =>
			props.direction === "left"
				? "rotate(-90deg) scale(1.1)"
				: "rotate(90deg) scale(1.1)"};
	}
	&:focus {
		outline: none;
	}
	&::-moz-focus-inner {
		border: 0;
	}
`;

export const CarouselPaginationContainer = styled.div`
	position: absolute;
	bottom: 10px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CarouselPaginationDots = styled.span`
	padding: 4px;
	margin-right: 5px;
	cursor: pointer;
	border-radius: 50%;
	background: ${(props) => (props.active ? "rgb(76, 36, 59)" : "white")};
`;
