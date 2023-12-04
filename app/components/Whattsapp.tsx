'use client'
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import img from '../public/whattsapp.png'

export default function App() {

  return (
      <FloatingWhatsApp avatar={img.src} phoneNumber='918128134195' className='text-black' chatMessage='Message to get your website !'  notificationSound={true} allowEsc={true} statusMessage='Dm any time'  accountName='Suthar Uttesh' />
  )
}