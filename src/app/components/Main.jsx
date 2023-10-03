import Link from 'next/link'
import React from 'react'

const Main = ({title,buttontitle}) => {
  return (
    <>
        <main className='bg-black text-white p-10 pt-20 pb-20'>
            <div>
                <h1 className='text-5xl p-3 font-bold uppercase'>{title}</h1>
                <p className='w-2/3 text-xl font-semibold p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloremque quidem nesciunt nobis reprehenderit culpa eveniet dolores et iste, consequuntur debitis expedita accusamus vitae laboriosam!</p>

                <button className='p-3 bg-white text-black text-l font-bold uppercase  border-2 rounded-lg hover:bg-black hover:text-white hover:border-white'><Link href="/movie">{buttontitle}</Link></button>
            </div>

        </main>
    </>
  )
}

export default Main