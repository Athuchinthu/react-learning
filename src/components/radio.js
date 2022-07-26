import React from "react";
import {Field, ErrorMessage} from "formik";
import TextError from "./textError";
const Radio=(props)=>{
    const{name, label, options,...rest} = props;
  return(
    <div className="form-control">
          <div> <label>{label}</label></div>
        <Field name={name} {...rest}>
            {({field})=>{
               console.log(field);
            
            return options.map((option)=>{
                return(
                    <React.Fragment key={option.key}>
                        <div>{option.value}</div>
                         <input type="radio" id={option.value}{...field} value={option.value} checked={field.value===option.value}/>
                         <label htmlFor={option.value}>{option.key}</label>
                    </React.Fragment>
                )
               })
            }}
        </Field>
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}
export default Radio