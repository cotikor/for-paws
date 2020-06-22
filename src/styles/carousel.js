import styled from "styled-components";
import buttonLogo from "./assets/logo.png";

export const CarouselContainer = styled.section`
	position: relative;
	max-width: 100%;
	height: auto;
	background: rgba(100,100,100,.25);
	margin: 0 auto;
	overflow: hidden;
	display: flex;
	@media only screen and (orientation: landscape) and (max-height: 760px){
		height: 100%;
		max-width: 40%;
	}
`;

export const ImageContainer = styled.img`
    display: ${(props) => (props.active ? "block" : "none")};
	max-width: 100%;
	height: auto;
`;

export const CarouselButton = styled.button`
	display: flex;
	position: absolute;
	bottom: 10px;
	right: ${(props) => (props.direction === "right" ? "1px" : "null")};
	left: ${(props) => (props.direction === "left" ? "1px" : "null")};
	height: 32px;
	width: 32px;
	transform: ${(props) =>
		props.direction === "left" ? "rotate(-90deg)" : "rotate(90deg)"};
	justify-content: center;
	cursor: pointer;
	background-color: rgb(18, 28, 50);
	border: 1px solid white;
	border-radius: 50%;
	background-image: url(${buttonLogo});
	background-position: center;
	background-repeat: no-repeat;
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
	background: ${(props) =>
		props.active ? "rgb(18, 28, 50)" : "white"};
`;
