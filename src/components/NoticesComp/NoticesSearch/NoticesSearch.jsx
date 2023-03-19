import React from "react";
import { Formik } from "formik";
import {Title, ErrorMessage, ButtonStyled, FormStyled, FieldStyled} from './NoticesSearch.styled';

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
         <FormStyled>
           <FieldStyled type="search" name="search"/>
           <ErrorMessage name="search" component="div" />
           <ButtonStyled type="submit" disabled={isSubmitting}>
             Submit
           </ButtonStyled>
         </FormStyled>
       )}
     </Formik>
   </div>
    );
}