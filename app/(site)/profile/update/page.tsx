import ContactUpdateForm from '@/app/componets/contact-update-form'
import React from 'react'

const page = () => {
  return (
    <main className='w-full min-h-screen'>

        <header className='p-3 bg-[#444]'>
            <h2 className='font-bold  text-2xl' >Update Profile</h2>
            <p className='text-sm'>IF youre account doesnt update automaitcally please refresh or relogin. Please contact me if you recieve this issue</p>
        </header>



        <ContactUpdateForm />



    </main>
  )
}

export default page