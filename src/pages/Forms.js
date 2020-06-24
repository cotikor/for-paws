import React from "react";
import {
    FormComponent
} from '../components/forms/FormComponent'
import { FormModal } from "../components/forms/FormModal";

export const Forms = ({view, name, mode, setMode}) => {

if(mode === 'application'){
    return(
        <FormModal mode={mode} setMode={setMode}/>
    );
} else {
    return (
        <FormComponent setMode={setMode} view={view} name={name}/>
    	);
}
};
