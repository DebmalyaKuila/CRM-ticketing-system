import React,{useState} from 'react'
import "../Entry.page/entryLogin.style.css"
import Login from '../../components/loginForm.jsx'
import ResetPassword from '../../components/password-reset.jsx'



const Entry = () => {

  const handleOnSubmit= (form) =>{
    //TODO : api call to submit this form
    console.log(form);


  }

  const handleOnResetPasswordSubmit = (form)=>{
       //TODO : api call to submit this form
    console.log(form);
  }


  return (
    <div className='bg-blue-400 entry-page'>
      <Login  
      handleOnSubmit={handleOnSubmit}
      />
      <ResetPassword
      handleOnResetPasswordSubmit={handleOnResetPasswordSubmit}
      />
    </div>
  )
}

export default Entry