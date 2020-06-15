import React from "react";
import {JumbotronContainer, BackgroundImg, LandingH1, TextContainer, ActionButton} from '../../styles/landing'
import background from '../../styles/assets/jumbo.jpg'


export const Jumbotron = (props) => {
	return (
		<JumbotronContainer>
			<BackgroundImg src={background}/>
			<TextContainer>
			<LandingH1>Save a Pet</LandingH1>
			<ActionButton to='/donate'>Donate Now!</ActionButton>
			</TextContainer>

		</JumbotronContainer>
	);
};
