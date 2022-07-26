import React from "react";
import FormikControl from "./formikControl";
import {Formik,Form} from "formik";
import *as Yup from "yup";
const LoginForm=()=>{
    const initialValues={
        email:"",
        password:""
    }
    const validationSchema= Yup.object().shape({
        email:Yup.string().email().required("Required"),
        password:Yup.string().required("Required")
    })
    const onSubmit =(values)=>{
       console.log(values)
    }
return(
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
        formik=>{
            return <Form>
                <FormikControl name="email" type="email" control="input" label="Email">
                </FormikControl>
                <FormikControl name="password" type="password" control="input" label="Password">
                </FormikControl>
                <button type="submit" disabled={!formik.isValid}>Submit</button>
            </Form>
        }
        }
    </Formik>
)
}
export default LoginForm