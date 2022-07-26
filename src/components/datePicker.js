import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Field, ErrorMessage} from "formik";
import TextError from "./textError";

const DatePicker =(props)=>{
const{label,name,...rest}=props;
return(
    <div className="form-control">
        <Field name={name}>
            {
            ({field,form})=>{
              const{setFieldValue} =form
              const{value}=field
              return(
                <DateView
                id={name}
                selected={value}
                {...field}
                {...rest}
                onChange={(value)=>setFieldValue(name,value)}
                >

                </DateView>
              )
            }
            }
        </Field>
        <ErrorMessage name={name} component={TextError}/>  
    </div>
)
}
export default DatePicker