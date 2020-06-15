import React from "react";
import cat from '../../styles/assets/cat.jpg' 
import dog from '../../styles/assets/dog.jpg' 
import spotlight from '../../styles/assets/spotlight.jpg' 
import { BottomContainer, ButtonContainer, BottomButton, LandingH2, SpotlightContainer, DetailsContainer, SpotlightImg, SpotlightP } from '../../styles/landing'


export const LandingBottom = (props) => {
	return (
		<BottomContainer>
			<DetailsContainer direction='left'>
			<LandingH2>Room For One More?</LandingH2>
			<ButtonContainer>
				<BottomButton to='/adopt' image={cat}>Adopt</BottomButton>
				<BottomButton to='/foster' image={dog}>Foster</BottomButton>
			</ButtonContainer>
			</DetailsContainer>
			<DetailsContainer direction='right'>
			<LandingH2>This Month's Spotlight</LandingH2>
			<SpotlightContainer>
				<SpotlightP>Blue is a family-friendly pup that absolutely loves his people He has a phenomenal temperament and a playful demeanor. This pup has completed basic obedience training and knows commands such as "sit," "stop," and "no," but does have a hard time controlling his excitement when he meets new people so "down" is one that will need to be worked on a bit. Blue has shown only kindness and friendliness to all people he meets and this stunning Staffy mix is ready to show the world the amazing incredible breed traits he possesses. </SpotlightP>
				<SpotlightImg src={spotlight}/>
			</SpotlightContainer>
			</DetailsContainer>
		</BottomContainer>
	);
};
