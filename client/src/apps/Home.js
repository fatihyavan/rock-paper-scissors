import React from 'react'
import {Newspaper} from 'phosphor-react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='text-3xl font-bold  bg-red-900'>
      <Navbar />
      Home
      <div className='flex bg-blue-200'>
        <Newspaper size={32} />
      </div>
    </div>
  )
}
