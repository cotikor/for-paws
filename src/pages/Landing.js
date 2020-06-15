import React from "react";
import {LandingContainer} from '../styles/landing'
import {Jumbotron} from '../components/home/Jumbotron'

export const Landing = (props) => {
	return (
		<LandingContainer>
			<Jumbotron history={props.history}/>

		</LandingContainer>
	);
};
