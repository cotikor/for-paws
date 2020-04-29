import styled from "styled-components";

export const FormContainer = styled.form`
display flex
flex flow: column nowrap;
border: 1px solid white;
width: 100%;
height: 100vh;
margin-top: 10%;
overflow: scroll;
background: rgba(18, 28, 50, 0.8);

`;
export const FormHeading = styled.h1`
	color: white;
`;
export const FormSubHeading = styled.h2`
	color: white;
`;
export const FormSection = styled.section`
	border: 1px solid red;
	display: flex;
	flex-flow: row nowrap;
`;
export const FormLabel = styled.label`
	width: 30%;
	color: white;
`;
export const FormInputContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: 70%;
`;

export const FormShortInput = styled.input``;
export const FormLongInput = styled.textarea``;
export const FormDropdownInput = styled.select``;
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
`;

export const FormSubmitButton = styled.button``;
