import React from "react";
import {Field, ErrorMessage} from "formik";
import TextError from "./textError";
const Checkbox =(props)=>{
    const{name,label,options,...rest}=props;
return(
    <div className="form-control">
        <label>{label}</label>
    <Field name={name} {...rest}>
      {
        ({field})=>{
           return options.map((option)=>{
             console.log(field.value);
             console.log(option.value)
             return(
                <React.Fragment key={option.value}>
                 <input type="checkbox" id={option.value}{...field} value={option.value}checked={field.value.includes(option.value)}/>
                 <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
             )
           })
        }
      }
    </Field>
    <ErrorMessage name={name} component={TextError}/>
    </div>
)
}
export default Checkbox