import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import {Title} from './NoticesSearch.styled';

export const NoticesSearch = () => {
    return(
   <div>
     <Title>Find your favorite pet</Title>
     <Formik
       initialValues={{ search: '' }}
       validate={value => {
         const error = {};
         if (!value.search) {
           error.search = 'Required';
         } 
         return error;
       }}
       onSubmit={(value, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(value, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="search" name="search"/>
           <ErrorMessage name="search" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
    );
}