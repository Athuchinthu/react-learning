import React from "react";
import {Formik,Form} from "formik";
import *as Yup from "yup";
import FormikControl from "./formikControl";
const RegistrationForm=()=>{
    const options=[
        {key:"Email", value:"emailmoc"},
        {key:"Telephone", value:"telephonemoc"}
    ]
    const initialValues={
        email:"",
        password:"",
        confirmPassword:"",
        modeOfContact:"",
        phone:"",
    }
    const validationSchema= Yup.object().shape({
        email:Yup.string().email().required("Required"),
        password:Yup.string().required("Reequired"),
        confirmPassword:Yup.string().oneOf([Yup.ref("password"),""],"password is must").required("Required"),
        modeOfContact:Yup.string().required("Required"),
        phone:Yup.string().when('modeOfContact',{
            is:'telephonemoc',
            then:Yup.string().required("Required")
        })
    })
    const onSubmit =(values)=>{
       console.log(values)
    }

   return(
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
       { (formik)=>{
          return(
            <Form>
              <FormikControl type="email" control="input" label="Email" name="email"></FormikControl>
                <FormikControl type="password" control="input" label="Password" name="password"></FormikControl>
                <FormikControl type="password" control="input" label="Confirm Password" name="confirmPassword"></FormikControl>
                <FormikControl  control="radio" label="Mode of Contact" name="modeOfContact" options={options}/>
                <FormikControl type="text" control="input" label="Phone" name="phone"></FormikControl>
                <button type="submit" disabled={!formik.isValid}>Submit</button>
            </Form>
          )
        }
    }
    </Formik>
   )
}
export default RegistrationForm;