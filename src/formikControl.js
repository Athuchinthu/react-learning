import React from "react";
import Input from "../src/components/input";
import TextArea from "./components/textArea";
import Select from "./components/select";
import Radio from "./components/radio";
import Checkbox from "./components/checkbox";
import DatePicker from "./components/datePicker";
const FormikControl =(props)=>{
    const{control, ...rest}=props;
    switch(control){
        case 'input': return <Input {...rest}/>
        case 'textarea': return <TextArea {...rest}/>
        case 'select': return <Select {...rest}/>
        case 'radio':return <Radio {...rest}/>
        case 'checkbox': return <Checkbox {...rest}/>
        case 'date': return <DatePicker {...rest}/>
        default: return null
    }
}
export default FormikControl;