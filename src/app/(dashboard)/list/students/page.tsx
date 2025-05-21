import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, studentsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
}

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
    header: 'Student ID',
    accessor: 'studentId',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Grade',
    accessor: 'grade',
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

const renderRow = (student: Student) => (
  <tr key={student.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-customPurpleLight'>
    <td className='flex items-center gap-4 p-4'>
      <Image src={student.photo} alt={student.name} width={40} height={40} className='md:hidden xl:block w-10 h-10 rounded-full object-cover' />
      <div className='flex flex-col items-center gap-2'>
        <h3 className='font-semibold'>{student.name}</h3>
        <p className='text-sm text-gray-500'>{student?.class}</p>
      </div>
    </td>
    <td className='hidden md:table-cell'>{student.studentId}</td>
    <td className='hidden md:table-cell'>{student.class}</td>
    <td className='hidden md:table-cell'>{student.phone}</td>
    <td className='hidden md:table-cell'>{student.address}</td>
    <td>
      <div className='flex items-center gap-2'>
        <Link href={`/list/teachers/${student.id}`}>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-sky cursor-pointer'>
            <Image src='/view.png' alt='Edit' width={16} height={16} />
          </button>
        </Link>
        {role === 'admin' && (
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-customPurple cursor-pointer'>
          <Image src='/delete.png' alt='Edit' width={16} height={16} />
        </button>
        )}
      </div>
    </td>
  </tr>
)

const StudentsList = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/*  TOP */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Students</h1>
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
      <Table columns={teachersColumns} renderRow={renderRow} data={studentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default StudentsList
