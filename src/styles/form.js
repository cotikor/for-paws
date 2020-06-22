import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FormContainer = styled.form`
	box-shadow: 0px 0px 50px 5px;
	width: 90vw;
	max-width: 800px;
	max-height: 85vh;
	position: relative;
	border: 1px solid white;
	overflow-y: scroll;
	overflow-x: hidden;
	background: rgba(18, 28, 50, 0.8);
	@media only screen and (orientation: landscape){
		max-height: 70vh;
	}
`;

export const FormHeading = styled.h1`
	color: #121c32;
	width: 90vw;
	max-width: 800px;
	position:sticky;
	top:0;
	text-align: center;
	background-color: white;
	font-size: 2.4rem;
	margin-bottom: 2.5%;
`;
export const FormSubHeading = styled.h2`
	color: white;
	font-size: 1.4rem;
	width: 100%;
	text-align: center;
`;
export const FormSection = styled.section`
	display: ${props => props.view === 'adopt' ? 'none': 'flex'};
	flex-flow: row nowrap;
	margin: 5% 1%;
	border-bottom: 1px solid white;
	padding-bottom: 5%;
`;
export const FormLabel = styled.label`
	width: 40%;
	color: white;
	font-size: 1.2rem;
	margin-right: 1%;
	text-align: left;
`;
export const FormInputContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: 60%;
`;

export const FormShortInput = styled.input`
	background: none;
	border: 1px solid white;
	border-radius: 6px;
	padding: 2.5%;
	color: white;
`;
export const FormLongInput = styled.textarea`
	background: none;
	border: 1px solid white;
	border-radius: 6px;
	padding: 2.5%;
`;
export const FormDropdownInput = styled.select`
	background: none;
	border: 1px solid white;
	border-radius: 6px;
	padding: 2.5%;
	color: white;
`;

export const FormDropdownOption = styled.option``;
export const FormRadioContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	color: white;
`;

export const FormRadioInput = styled.input`
margin: 1% 1% 2.5%;
`;

export const FormSubLabel = styled.label`
	color: white;
	font-size: 1rem;
	margin: 1% 0 2.5%;
`;

export const FormSubmitButton = styled(NavLink)`
	width: 100%;
	display: block;
	text-align: center;
	border: 1px solid red;
	cursor: pointer;
	margin: 1% 0 0;
	text-decoration: none;
	background-color: white;
	border: none;
	padding: 2.5%;
	font-size: 2rem;
	color: #121c32;
	&:hover {
		opacity: 0.5;
		font-weight: bold;
	}
`;

export const ModalContainer = styled.div`
	display: flex;
	box-shadow: 0px 0px 50px 5px;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-between;
	height: 200px;
	max-width: 400px;
	width: 100%;
	border-radius: 10px;
	padding: 2.5%;
	background: rgba(18, 28, 50, 0.8);
`

export const ModalH1 = styled.h1`
font-family: 'Montserrat',sans-serif;
color: white;
text-align: center;
font-size: 3rem;

`

export const ModalButton = styled(NavLink)`
text-decoration: none;
font-size: 4rem;
color: white;
&:hover {
	opacity: 0.5;
}
`
