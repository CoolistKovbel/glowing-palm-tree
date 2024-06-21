import ContactUpdateForm from '@/app/componets/contact-update-form'
import ShippingUpdateForm from '@/app/componets/shipping-update-copy'
import React from 'react'

const page = () => {
  return (
    <main className='w-full min-h-screen'>

        <header className='p-3 bg-[#444]'>
            <h2 className='font-bold  text-2xl' >Update Profile</h2>
            <p className='text-sm'>IF youre account doesnt update automaitcally please refresh or relogin. Please contact me if you recieve this issue</p>
        </header>



        <ContactUpdateForm />


        <div className='p-5  bg-[#444]'>
          <h2 className='font-bold  text-2xl mb-4'>Update shipping information</h2>


          <ShippingUpdateForm />


        </div>


    </main>
  )
}

export default page