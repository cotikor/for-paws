import React from "react";
import {
    FormComponent
} from '../components/forms/FormComponent'

export const Forms = ({view, name}) => {
    return (
        (<FormComponent view={view} name={name}/>)
		);
};
