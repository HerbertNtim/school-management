import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { resultsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Events = {
  id: number;
  subject: string;
  student: string;
  score: number;
  class: string;
  date: string;
  teacher: string;

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

const resultsColumns = [
  {
    header: 'Subject',
    accessor: 'subjects',
  },
  {
    header: 'Student',
    accessor: 'students',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Score',
    accessor: 'scores',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Class',
    accessor: 'classes',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Date',
    accessor: 'date',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  }
]

const renderRow = (result: Events) => (
  <tr key={result.subject} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-customPurpleLight'>
    <td className='flex items-center gap-4 p-4'>
      <div className='flex flex-col items-center gap-2'>
        <h3 className='font-semibold'>{result.subject}</h3>
      </div>
    </td>
    <td className='hidden md:table-cell'>{result.student}</td>
    <td className='hidden md:table-cell'>{result.score}</td>
    <td className='hidden md:table-cell'>{result.teacher}</td>
    <td className='hidden md:table-cell'>{result.class}</td>
    <td className='hidden md:table-cell'>{result.date}</td>
    <td>
      <div className='flex items-center gap-2'>
        <Link href={`/list/teachers/${result.id}`}>
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

const ResultList = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/*  TOP */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Assignments</h1>
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
      <Table columns={resultsColumns} renderRow={renderRow} data={resultsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default ResultList
