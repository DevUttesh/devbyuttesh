import Image from 'next/image'
import React from 'react'
import img from '../app/public/911985_eb0d2.gif'

export default function Loading() {
  return (
    <section className='overflow-hidden h-screen flex justify-center items-center' >
        <Image src={img} alt='loader' />
    </section>
  )
}
