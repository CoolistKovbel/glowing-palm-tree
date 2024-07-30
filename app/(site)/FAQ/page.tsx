import React from 'react'

const Page = () => {
  return (
    <section className='w-full min-h-screen flex items-center justify-center flex-col'>
        <header>
            <h2 className='flex items-center justify-center text-[3rem]'>F.A.Q - <span className=' ml-4  capitalize text-sm text-gray-500'>questions and answers</span></h2>
        </header>


        <ul className='p-4 bg-[#222] w-[80%] mx-auto flex flex-col gap-5'>
           <li className='flex flex-col gap-4 bg-[#444] p-2'>
                <p><span>Question:</span> When do you update your packs?</p>
                <p><span>Answer:</span> Every 2-3 weeks depending on shipping.</p>
            </li> 
           <li className='flex flex-col gap-4 bg-[#444] p-2'>
                <p><span>Question:</span> How do you make a Ezuaid request? </p>
                <p><span>Answer:</span> Send a message or make an account</p>
            </li> 
            <li className='flex flex-col gap-4 bg-[#444] p-2'>
                <p><span>Question:</span> How long is delievery time?</p>
                <p><span>Answer:</span> 2-4 days, depending on the shipping</p>
            </li> 
        </ul>


    </section>
  )
}

export default Page