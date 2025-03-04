import { Button, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { app } from '../firebase'

const DashProfile = () => {
      const {currentUser}=useSelector((state)=>state.user)
      const [imageFile, setImageFile]=useState(null)
      const [imageFileUrl, setImageFileUrl]=useState(null)
      console.log("currentUser", currentUser)
      const handleImageChange=(e)=>{
            const file=e.target.files[0];
            if(file){
                  setImageFile(file)  
                  setImageFileUrl(URL.createObjectURL(file))

            }
      }

      useEffect(()=>{
        if(imageFile){
            uploadImage()
        }
      },[imageFile])

      const uploadImage=async()=>{
            console.log("uploading...")
      }
      console.log("imageFile", imageFile)
      console.log("imageFileUrl", imageFileUrl)
  return (
    <div>
      <div className='max-w-lg mx-auto w-72 md:w-80'>
            <form className='flex flex-col gap-2'>
                  <h1 className='text-xl text-center'>profile</h1>
                  <input type='file' accept='image/*' onChange={handleImageChange} className=''/>
                  <div className='w-24 h-24 self-center rounded-full'><img src={imageFileUrl ||currentUser.profilePicture} alt='profile pic' className='rounded-full w-full h-full border-8 border-[lightgray] object-cover'/></div>
                  <div className='flex flex-col gap-3 mt-2'>
                      <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username} />
                      <TextInput type='text' id='email' placeholder='email' defaultValue={currentUser.email} />
                      <TextInput type='text' id='password' placeholder='chang your password'  />
                      <Button type='sumit'>submit</Button>
                  </div>
            </form>
            <div className='text-red-500 flex justify-between mt-3'>
                  <span>Edit</span>
                  <span>Dellet</span>
            </div>
      </div>
    </div>
  )
}

export default DashProfile