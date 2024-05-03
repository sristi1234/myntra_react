import { RecaptchaVerifier, signInWithPhoneNumber ,} from 'firebase/auth';
import React, { useState } from 'react'
import {auth} from '../firebase/setup'

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
 function Login() {
  
      const [phone , setPhone] = useState()
      const [user, setUser] = useState(null)
      const [opt , setOpt] = useState("")

     


      const sendOtp = async() =>{

        try{
            const recaptcha =  new RecaptchaVerifier(auth,"recaptcha", {} )
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
            console.log("auth"+ auth)
            console.log("phone" + phone)
            console.log("recaptcha" + recaptcha)
            console.log("confirmation" + confirmation)
            setUser(confirmation)    
               
        }catch(err){
            console.error(err)
        }
        
      }
      const verifyOpt = async() =>{

        try{
           await user.confirm(opt)
        }
        catch(err){
            console.error(err)

        }
       
      }
    const card =  
    <div className='bg-rose-50 h-screen flex flex-col justify-center items-center'>
   
    
        <div className='h-96 w-96  bg-white flex flex-col justify-center items-center'>
      <h1 className='font-bold  text-lg text-start'>Login <span className='font-normal text-sm'> or  </span> Sign up</h1>
      {user == null && <div  className='mt-5'>
      <PhoneInput
        
      country={'in'}
      value={phone}
      onChange={phone => setPhone(phone)}
      placeholder = 'Mobile Number'
      buttonStyle={{backgroundColor : "white"}}
      inputStyle = {{width : "320px"}}
      
      /> </div>}
      <div className='mt-3' id='recaptcha'></div>
      <h1 className='mt-4 text-xs text-gray-400'> By clicking continue,<span className='text-rose-500  font-bold'> you can login</span> </h1>
      
     
      { !opt && <button onClick={sendOtp} className='bg-rose-500 text-white w-80 fond-bold py-2 px-4 rounded'>Continue</button>}
      <div id='recaptcha'></div>

      {user && <input onChange={(e) => setOpt(e.target.value)} className=' border border-spacing-1 text-gray-900 font-normal outline-none
                  text-sm rounded-sm block w-80 p-2.5 mt-2' 
                  placeholder='Enter opt' required />}

{opt && <button onClick={verifyOpt} className='bg-rose-500 text-white w-80 fond-bold py-2 px-4 rounded'>Verify</button>}
      
      <h1 className='mt-4 text-xs text-gray-400'> Having Trouble  logining  ?<span className='text-rose-500  font-bold'> continue</span> </h1>
      
      </div>
    </div>
  return (
    <div>
      
      {card}
    </div>
  )
}

export default Login
