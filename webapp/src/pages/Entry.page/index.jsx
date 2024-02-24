import React,{useState} from 'react'
import "../Entry.page/index.style.css"
import Login from '../../components/loginForm.jsx'
import ResetPassword from '../../components/password-reset.jsx'



const Entry = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  const handleOnChange= event =>{
    const {id,value}=event.target;
    switch (id) {
      case 'email':
        setEmail(value);
        break;
        case 'password':
          setPassword(value);
          break;
      default:
        break;
    }
  }

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
      handleOnChange={handleOnChange}
      email={email}
      password={password}
      handleOnSubmit={handleOnSubmit}
      />
      <ResetPassword
      handleOnChange={handleOnChange}
      email={email}
      handleOnResetPasswordSubmit={handleOnResetPasswordSubmit}
      />
    </div>
  )
}

export default Entry