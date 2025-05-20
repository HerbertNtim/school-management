import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import React from 'react'

const buttonList = [
  {
    name: 'Add Teacher',
    icon: '/plus.png'
  },
  {
    name: 'Filter',
    icon: '/filter.png'
  },
  {
    name: "sort",
    icon: '/sort.png'
  }
]

const teachersColumns = [
  {
    header: 'Info',
    accessor: 'info',
  },
  {
    header: 'Teacher ID',
    accessor: 'teacherId',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Subjects',
    accessor: 'subjects',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Classes',
    accessor: 'classes',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Actions',
    accessor: 'actions',
  }
]

const TeachersList = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/*  TOP */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>
        <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
          <TableSearch />
          <div className='flex items-center gap-4 self-end'>
            {buttonList.map((button) => (
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-customYellow cursor-pointer' key={button.name}>
              <Image src={button.icon} alt={button.name} width={14} height={14} />
            </button>
            ))}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={teachersColumns} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default TeachersList
