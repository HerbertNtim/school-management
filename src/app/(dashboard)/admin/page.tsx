import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-wrap gap-8'>
        <UserCard type='student' />
        <UserCard type='teacher' />
        <UserCard type='parent' />
        <UserCard type='staff' />
      </div>
      {/* RIGHT */}
      <div className='w-full lg:w-1/3'>
        r
      </div>
    </div>
  )
}

export default AdminPage
