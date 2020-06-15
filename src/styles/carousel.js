import styled from "styled-components";
import buttonLogo from "./assets/logo.png";

export const CarouselContainer = styled.section`
	position: relative;
	height: 70%;
	width: 100%;
	background: rgba(100,100,100,.25);
	margin: 0 auto;
	overflow: hidden;
	display: flex;
`;

export const ImageContainer = styled.div`
    display: ${(props) => (props.active ? "block" : "none")};
	width: 100%;
	height: auto;
    background-image: url('${(props) => props.image}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
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
