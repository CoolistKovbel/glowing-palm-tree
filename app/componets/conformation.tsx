"use client"

import Link from 'next/link'
import {useSearchParams } from 'next/navigation'
import { Transaction } from '../models/Transaction'
import { getTransactionDetails } from '../lib/action'
import { useEffect, useState } from 'react'


const ConformationPage = () => {

    const searchParams = useSearchParams()
    const conformationId = searchParams.get("id")
    const [currentTransaction, setCurrentTransaction] = useState("")

    useEffect(() => {
        const gg = async () => {
            const transacation:any =  await getTransactionDetails(conformationId)
            if(transacation.status === "success"){
                setCurrentTransaction(transacation.payload)
            }
        }
        gg()
    },[])
    

  return (
    <div className='w-[80%] mx-auto  bg-[#222] drop-shadow-lg rounded'>
    
        <header className='p-10'>
            <h1 className='text-4xl font-bold'>Confirmation Page</h1>
            <p>{conformationId}</p>
        </header>


        <div className='bg-[#444] p-4 drop-shadow-lg'>

            


        </div>
        

        <footer className='p-10 text-center'>
            <h2 className='mb-10'>We hope you enjoy your shopping experience please share with friend and family</h2>
            <ul className='flex items-center justify-around'>
                <li className='p-2 bg-[#111] rounded drop-shadow-lg hover:bg-[#444]'>
                    <Link href="/">twitter</Link>
                </li>
                <li className='p-2 bg-[#111] rounded drop-shadow-lg hover:bg-[#444]'>
                    <Link href="/">ticktock</Link>
                </li>
                <li className='p-2 bg-[#111] rounded drop-shadow-lg hover:bg-[#444]'>
                    <Link href="/">youtube</Link>
                </li>
            </ul>
        </footer>
    </div>
  )
}

export default ConformationPage