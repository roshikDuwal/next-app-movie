import Link from 'next/link'
import React from 'react'

const notfound = () => {
  return (
        <>
            <div className='flex flex-col items-center justify-center w-full h-[600px] '>

            <h1 className='text-3xl font-bold mb-6'>NOT FOUND !!!</h1>
            <Link className='bg-black p-4 text-white rounded-xl font-bold ' href="/">BACK</Link>
                
            </div>
        </>
  )
}

export default notfound