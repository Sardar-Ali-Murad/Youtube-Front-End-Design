import React from 'react'
import "./Register.css"
import {useAppContext} from "../context/appContext"
import Alert from './Alert'
// import "./Landing.css"
import {useNavigate} from "react-router-dom"
import { TextField } from '@mui/material'
import FormRow from './FormRow'

const Register = () => {
    let {showAlert,isLoading,setupUser,user,uploadImage,uploadImageForRegister,registerImage, changeFunction}=useAppContext()
    let [register,setRegister]=React.useState(true)
    let [initialObject,setInitialObject]=React.useState({
        name:"",
        password:"",
        email:''
    })
   

    function handleChange(e){
        setInitialObject((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }

    function handlelogin(){
        setRegister(false)
    }


    function handleregister(){
        setRegister(true)
    }

    function registerfun(){
      setupUser({endPoint:"register",alertText:"Register Success",currentUser:{...initialObject,image: registerImage}})
   }
   
   
   function login(){
      setupUser({endPoint:"login",alertText:"Login Success",currentUser:initialObject})
    }

    function handleimage(event){
      uploadImageForRegister(event)
    }

    let navigate=useNavigate()

   



  return (
    <div className='RegisterMain'>
      <section>
          <div className='box'>
          {
           register?
        
      <div className='landing__Page__Box'>
         <h1 className='dark' style={{color:"white",fontSize:"37px"}}>Register</h1>

         { showAlert && <Alert/>  }
  
      <div className='box__Layout'>

         <div className='box__divs p__Sans'>
            <FormRow labelText="Name" value={initialObject.name} name="name" handleChange={handleChange}/>
         </div>


         <div className='box__divs p__Sans'>
            <FormRow labelText="Email" value={initialObject.email} name="email" handleChange={handleChange}/>
         </div>


         <div className='box__divs p__Sans'>
            <FormRow labelText="password" value={initialObject.password} name="password" handleChange={handleChange}/>
         </div>

         <TextField id="standard-basic"   variant="filled"    type="file"   onChange={handleimage}  style={{marginTop:"40px",marginBottom:"30px"}} /> 

         <button className='btn dark' onClick={registerfun} style={{marginRight:"100%",marginBottom:"20px"}} disabled={isLoading}>
            {isLoading?"LOADING":"Submit"}
         </button>

         <p className='dark ' style={{color:"white",textAlign:"center"}}>Already A Member? <span className='light' onClick={handlelogin} style={{color:'lightblue',cursor:"pointer"}}>Login</span></p>

      </div>

      </div>
      :
      
      <div className='landing__Page__Box'>
         <h1 className='h__Cormorant' style={{color:"white"}}>Login</h1>

         {showAlert && <Alert/>}
  
      <div className='box__Layout'>

         <div className='box__divs p__Sans'>
         <FormRow labelText="Email" value={initialObject.email} name="email" handleChange={handleChange}/>
         </div>


         <div className='box__divs p__Sans'>
         <FormRow labelText="password" value={initialObject.password} name="password" handleChange={handleChange}/>
         </div>

         <button className='btn dark' style={{marginBottom:"30px"}} onClick={login} disabled={isLoading}>
            {isLoading?"Loading":'Submit'}
         </button>

         <p className='dark' style={{color:"white",textAlign:"center"}}> Not A Member Yet? <span className='dark' onClick={handleregister} style={{color:'lightblue',cursor:"pointer"}}>Register</span></p>

      </div>

      </div>
      }
          </div>
      </section>
    </div>
  )
}

export default Register
