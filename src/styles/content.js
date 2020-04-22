import styled from "styled-components";

export const ContentContainer = styled.section`
	display: flex;
	box-shadow: 0px 0px 50px 5px;
	flex-flow: row wrap;
	height: 100%;
	width: 100%;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	background: rgba(0, 0, 0, 0.8);
`;

export const DetailsContainer = styled.section`
display:flex;
flex-flow: column nowrap;
height: 70%;
border: 1px solid white;
width: 100%;
`

export const DescriptionP = styled.p`
color: white;
height: 50%;
border: 1px solid red;
display: flex;
align-items: center;
`

export const WeatherContainer = styled.div`
border: 1px solid red;
height: 50%;

`