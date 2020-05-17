import React from "react";
import style from "./FormsControl.module.css";
import {Field} from "redux-form";


const FormsControl =({input, type, meta: { asyncValidating, touched, error, warning }, children, ...props})=>{
    const hasError = touched && error;
    const hasWarning = warning;
    const hasAsyncValidating = asyncValidating;

    return(
        <span className={`${style.FormControl} ${hasError&&style.Error}` }>
            <span>{children}</span>
            {hasError && <span>{error}</span>}
            {hasAsyncValidating && <span>{asyncValidating}</span>}
            {hasWarning && <span>{warning}</span>}
        </span>
    )

};

const FormElement =(props)=>{
   const {input, meta, ...restProps} = props;
   const Tag = props.element==="textarea"? "textarea":"input";

    return <FormsControl {...props}><Tag ref={props.refs} {...input}{...restProps}/></FormsControl>

};
export default FormElement;

export const createField= (placeholder, name, validators, component, props = {}, text = "")=> {
    return <>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </>
};