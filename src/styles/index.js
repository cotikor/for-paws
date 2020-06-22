import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import background from "./assets/app-background.jpg";

//font-family: 'Bangers', cursive;
//Colors: #4F5D75, #121C32, #646464, #FFFFFF

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
	font-family: 'Montserrat',sans-serif;
	flex-flow: column nowrap;
	justify-content: center;
	overflow-y: hidden;
	align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
}

h1, a {
	font-family: 'Bangers', cursive;
}

p, li, input, textarea, label, h2, button {
	font-family: 'Montserrat', sans-serif;
}
`;

export const AppContainer = styled.main`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	margin: 0;
	height: 100vh;
`;

export const HomeContainer = styled.section`
	position: fixed;
	top: 10%;
	bottom: 5%;
	left: 5%;
	right: 5%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
`;
