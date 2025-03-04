import { Button, Select } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {app} from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'


const OAuth = () => {

const auth=getAuth(app); //getAuth function comes from the Firebase Authentication module and getAuth(app) retrieves the Firebase Authentication instance linked to the specified Firebase app (app).
// You use this auth instance used to perform various and manage or allow all user authentication tasks such as signing up, logging in, signing out, and getting the current user.
const dispatch=useDispatch()
const navigate=useNavigate()

      const handleGoogleClick=async()=>{
            const provider=new GoogleAuthProvider(); // for third partiy provider like google.com there are also for facebbok and othr his object provid google authentication
            provider.setCustomParameters({ prompt: "select_account" });

            try{
      const resultsFromGoogle=await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle)
      const res=await fetch("/api/authRoute/google", {
            method:"POST",
            headers:{"Content-Type":"application/json",},
            body:JSON.stringify({
                  name:resultsFromGoogle.user.displayName,
                  email:resultsFromGoogle.user.email,
                  googlePhotoUrl:resultsFromGoogle.user.photoURL

            })
      })

      const data= await res.json();
      if(res.ok){
dispatch(signInSuccess(data));
navigate("/")
      }


            }catch(error){

      console.log(error)
            }
      }
  return (
    <Button type="button" gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}><AiFillGoogleCircle className='w-6 h-6 mr-2'/> Continue with Google</Button>
  )
}

export default OAuth