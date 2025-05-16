import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3'>
        {/* USER CARDS */}
        <div className='flex flex-wrap gap-4 justify-between'>
          <UserCard type='student' />
          <UserCard type='teacher' />
          <UserCard type='parent' />
          <UserCard type='staff' />
        </div>
        {/* CENTER CHARTS */}
        <div>
          {/* COUNT CHART */}
          <div></div>
          {/* ATTENDANCE CHART */}
          <div></div>
        </div>
        {/* BOTTOM CHARTS */}
        <div></div>
      </div>

      {/* RIGHT */}
      <div className='w-full lg:w-1/3'>
        r
      </div>
    </div>
  )
}

export default AdminPage
