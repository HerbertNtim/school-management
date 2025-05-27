import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { eventsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
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

const eventsColumns = [
  {
    header: 'Title',
    accessor: 'titles',
  },
  {
    header: 'Class',
    accessor: 'classes',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Date',
    accessor: 'dates',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Start Time',
    accessor: 'start',
    className: 'hidden md:table-cell'
  },
  {
    header: 'End Time',
    accessor: 'end',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Actions',
    accessor: 'actions',
  }
]

const renderRow = (event: Event) => (
  <tr key={event.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-customPurpleLight'>
    <td className='flex items-center gap-4 p-4'>
      <div className='flex flex-col items-center gap-2'>
        <h3 className='font-semibold'>{event.title}</h3>
      </div>
    </td>
    <td className='hidden md:table-cell'>{event.class}</td>
    <td className='hidden md:table-cell'>{event.date}</td>
    <td className='hidden md:table-cell'>{event.startTime}</td>
    <td className='hidden md:table-cell'>{event.endTime}</td>
    <td>
      <div className='flex items-center gap-2'>
        <Link href={`/list/teachers/${event.id}`}>
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

const EventsList = () => {
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
      <Table columns={eventsColumns} renderRow={renderRow} data={eventsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default EventsList
