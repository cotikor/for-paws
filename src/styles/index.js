import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import background from "./assets/app-background.jpg";

//font-family: 'Bangers', cursive;

export const GlobalStyle = createGlobalStyle`
${reset}

*{
  box-sizing: border-box;
}

html, body{
  height:100%;
    box-sizing: border-box;


}
html{
	font-size: 62.5%;
}
body {

	margin: 0;
	padding: 0;
     min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

a {
	font-family: 'Bangers', cursive;
}

p {
	font-family: 'Montserrat', sans-serif;
}
`;

export const AppContainer = styled.main`
	position: fixed;
	top: 10%;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
`;

export const HomeContainer = styled.section`
	position: fixed;
	top: 15%;
	bottom: 5%;
	left: 5%;
	right: 5%;
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	border-radius: 10px;
`;
