import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
  return (
    <div className='w-full md:w-auto flex items-center gap-2 rounded-full text-xs border ring-[1.5px] ring-gray-300 px-2'>
      <Image src='/search.png' alt='search' width={15} height={15} />
      <input type="text" placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none' />
    </div>
  )
}

export default TableSearch
