'use client'

import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* USER CARDS */}
        <div className='flex flex-wrap gap-4 justify-between'>
          <UserCard type='student' />
          <UserCard type='teacher' />
          <UserCard type='parent' />
          <UserCard type='staff' />
        </div>
        {/* CENTER CHARTS */}
        <div className='flex gap-4 lg:flex-row flex-col mt-4'>
          {/* COUNT CHART */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className='w-full lg:w-2/3 h-[450px]'></div>
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
