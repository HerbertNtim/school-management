import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 rounded-full text-xs border ring-[1.5px] ring-gray-300 px-2'>
        <Image src='/search.png' alt='search' width={15} height={15} />
        <input type="text" placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none'/>
      </div>
      {/* ICONS AND USER */}
      <div className='w-full flex items-center justify-end gap-6'>
        <div className='bg-transparent rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt="message" width={20} height={20} />
        </div>
        <div className='bg-transparent rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src="/announcement.png" alt="announcement" width={20} height={20} />
          <div className='absolute bg-purple-500 text-xs text-white rounded-full w-5 h-5 flex justify-center items-center -top-3 -right-3'>1</div>
        </div>
        <div className='bg-transparent flex flex-col items-center'>
          <span className='font-medium text-xs leading-3'>Herbert Ntim</span>
          <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        <Image src="/avatar.png" alt='avatar' width={36} height={36} className='rounded-full' />
      </div>
    </div>
  )
}

export default Navbar
