import React from "react";
import { useDispatch } from 'react-redux';
import { fetchNoticesByCategory } from 'redux/notices/operations';
import { Formik } from "formik";
import {Title, ButtonStyled, FormStyled, FieldStyled, LabelStyled, IconSearch} from './NoticesSearch.styled';
// import { toast } from "toast";

export const NoticesSearch = ({search}) => {

    return(
   <div>
     <Title>Find your favorite pet</Title>

     <Formik
       initialValues = {{ search: '' }}
// toast.alert('Fill the field!');
          //  Notiflix.Notify.warning('Fill the field!');

  // onSubmit={({ setSubmitting }) => { 
  //   alert("Form is validated! Submitting the form"); 
  //   setSubmitting(false); 
  // }} 
       onSubmit={(values, {setSubmitting }) => {
console.log(values)
         if (values.search === '') {
console.log('if')
// toast.alert('Fill the field!');
           Notiflix.Notify.warning('Fill the field!');
         } else {
console.log('else')

           setSubmitting(false);


         }
       }}
     >
       {({ isSubmitting, values, handleSubmit, handleChange }) => (
         <FormStyled  onSubmit={handleSubmit}>
<LabelStyled>
           <FieldStyled id="search" type="search" name="search" placeholder="Search" onChange={handleChange} value={values.search}/>
           <ButtonStyled type="submit" disabled={isSubmitting} onSubmit={handleSubmit}><IconSearch/>
           </ButtonStyled>

</LabelStyled>
         </FormStyled>
       )}
     </Formik>
   </div>
    );
}