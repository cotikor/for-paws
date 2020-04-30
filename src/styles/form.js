import styled from "styled-components";

export const FormContainer = styled.form`
	position: fixed;
	top: 10%;
	left: 5%;
	right: 5%;
	bottom: 5%;
	border: 1px solid white;
	overflow: scroll;
	background: rgba(18, 28, 50, 0.8);
`;

export const FormHeading = styled.h1`
	color: #121c32;
	width: 100%;
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
	align-items: flex-end;
	color: white;
`;

export const FormRadioInput = styled.input``;

export const FormSubLabel = styled.label`
	color: white;
	font-size: 1rem;
	margin: 1% 0 2.5%;
`;

export const FormSubmitButton = styled.button`
	width: 100%;
	cursor: pointer;
	margin: 1% 0 0;
	background-color: #121c32;
	border: none;
	padding: 1%;
	color: white;
	&:hover {
		opacity: 0.5;
		font-weight: bold;
	}
`;
