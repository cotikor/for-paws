import React from "react";
import {LandingContainer} from '../styles/landing'
import {Jumbotron} from '../components/home/Jumbotron'
import {LandingBottom} from '../components/home/LandingBottom'

export const Landing = (props) => {
	return (
		<LandingContainer>
			<Jumbotron history={props.history}/>
			<LandingBottom setView={props.setView}/>
		</LandingContainer>
	);
};
