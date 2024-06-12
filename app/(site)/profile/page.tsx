import { getSession } from '@/app/lib/action'
import { getCurrenbyUserId } from '@/app/lib/getUserLib'
import React from 'react'

const Page = async () => {

  const user = await getSession()

  const serverUser = await getCurrenbyUserId(user.userId as string)

  console.log(serverUser)


  return (
   <main className='min-h-screen flex-col items-center gap-4 p-5'>

    <header className='p-10 bg-[#222]'>
        <h2 className='text-2xl'>PRofile</h2>
    </header>

    <section>
        

      <div>
        
      </div>


      <div>

      </div>



    </section>



   </main>
    
  )
}

export default Page