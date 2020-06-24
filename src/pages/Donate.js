import React from "react";
import {DonateComponent} from '../components/donate/DonateComponent'
import { FormModal } from "../components/forms/FormModal";

export const Donate = ({view, name, mode, setMode}) => {

if(mode === 'donation'){
    return(
        <FormModal mode={mode} setMode={setMode}/>
    );
} else {
    return (
        <DonateComponent setMode={setMode} view={view} name={name}/>
    	);
}
};
