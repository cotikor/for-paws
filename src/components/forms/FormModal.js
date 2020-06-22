import React from "react";
import {ModalContainer, ModalH1, ModalButton} from '../../styles/form'


export const FormModal = ({setView}) => {
	return (
		<ModalContainer>
			<ModalH1>
                Thank you for submitting an application! 
                We will contact you within 72 hours with next steps.
            </ModalH1>
            <ModalButton to='/'>
                Home
            </ModalButton>
		</ModalContainer>
	);
};
