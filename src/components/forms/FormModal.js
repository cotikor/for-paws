import React from "react";
import { ModalContainer, ModalH1, ModalButton } from '../../styles/form'


export const FormModal = ({ mode, setMode }) => {
    return (
        <ModalContainer mode={mode}>
            <ModalH1>
                {mode === "donation" ? "Thank you for your donation. Every bit helps use find a place for homeless pets!" 
                : "Thank you for submitting an application! We will contact you within 72 hours with next steps."}
            </ModalH1>
            <ModalButton to='/' onClick={e => setMode('')}>
                Home
            </ModalButton>
        </ModalContainer>
    );
};
