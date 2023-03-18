import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaUnlockAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { authSignUpUser } from 'redux/auth/operations';
import css from "./Register.module.css";

function Register() {
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handlePasswordChange =(evnt)=>{
    setPasswordInput(evnt.target.value);
}
  const handleNameChange =(evnt)=>{
    setNameInput(evnt.target.value);
  }
  const handleEmailChange =(evnt)=>{
    setEmailInput(evnt.target.value);
  }

  const togglePassword =(e)=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authSignUpUser({
        nickName: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.signIn__Container} onSubmit={handleSubmit}>
          <div className={css.form__container}>
              <p className={css.formTitle}>Sign up</p>
              <div className={css.flexrow}>
                <label className={css.title__label}>
                    <div>Your Name
                         <div className={css.item__container}>
                            <FaUser size="25"/>
                            <input className={css.input_active} name='name' type='text' onChange={handleNameChange} value={nameInput}/> 
                        </div>
                    </div>
                </label>
              </div>
              <div className={css.flexrow}>
                <label className={css.title__label}>
                    <div>Your Email
                        <div className={css.item__container}>
                            <FaEnvelope size="25"/>
                            <input className={css.input_active} name='email' type='email' onChange={handleEmailChange} value={emailInput}/>
                        </div>
                    </div>
                </label>
              </div>
              <div className={css.flexrow}>
                <label className={css.title__label}>
                    <div>Password
                        <div className={css.item__container}>
                            {passwordType==="password"? <FaLock size="25" onClick={togglePassword}/>:<FaUnlockAlt size="25" onClick={togglePassword}/> }
                            <input className={css.input_active} name='password' type={passwordType} onChange= {handlePasswordChange} value={passwordInput}/>
                        </div>
                    </div>
                </label>
               </div>              
              <button type="submit" className={css.form_submit}>Sign up</button>
          </div>
      </form>
  );
}

export default Register;