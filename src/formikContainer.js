import React from "react";
import * as Yup from "yup";
import {Formik, Form}from "formik";
import FormikControl from "./formikControl";


const FormikContainer =()=>{
    const dropdownoptions=[
       {key:"Select an option",value:""},
       {key:"Option1",value:"option1"},
       {key:"Option2",value:"option2"},
       {key:"Option3",value:"option3"},
       {key:"Option4",value:"option4"}
    ];
    const radiobtnoptions=[
        {key:"Option1",value:"roption1"},
        {key:"Option2",value:"roption2"},
        {key:"Option3",value:"roption3"},
        {key:"Option4",value:"roption4"}
     ]
     const checkboxoptions=[
        {key:"Option1",value:"coption0"},
        {key:"Option2",value:"coption1"},
        {key:"Option3",value:"coption2"},
        {key:"Option4",value:"coption3"}
     ]
    const initialValues={
        email:"",
        textarea:"",
        select:"",
        radiooption:"",
        check:[],
        birthDate:null

    };
    const validationSchema = Yup.object({
        email:Yup.string().email("Please enter the valid email").required("required"),
        textarea: Yup.string().required("required"),
        select:Yup.string().required("Please select the options"),
        radiooption:Yup.string().required("Required"),
        check:Yup.array().required("Required"),
        birthDate:Yup.date().required("Required").nullable()
    });
    const onSubmit=(values)=>{
      console.log(values);
    }
return(
    <div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik=>
                <Form>
                    <FormikControl control="input" type="email" name="email" label="Email"/>
                    <FormikControl control="textarea" name="textarea" label="TextArea"/>
                    <FormikControl control="select" name="select" label="Select" options={dropdownoptions}/>
                    <FormikControl control="radio" name="radiooption" label="radio button options"options={radiobtnoptions}></FormikControl>
                    <FormikControl control="checkbox" name="check" label="checkbox options" options={checkboxoptions}></FormikControl>
                    <FormikControl control="date" name="birthDate" label="pick a date" ></FormikControl>
                    <button type="submit">Submit</button>
                </Form>
            }
        </Formik>

    </div>
)
}
export default FormikContainer;