
// Temporary
const events = [
  {
    id: 1,
    title: 'Event 1',
    time: "12:00 PM -  2:00 PM",
    description: "This is a description of event 1",
  },
  {
    id: 2,
    title: 'Event 2',
    time: "3:00 PM - 4:00 PM",
    description: "This is a description of event 2",
  },
  {
    id: 3,
    title: 'Event 3',
    time: "5:00 PM - 6:00 PM",
    description: "This is a description of event 3",
  },
]

const Announcement = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
      <div className='flex flex-col gap-4 w-full mt-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg font-semibold'>Announcement</h1>
          <p className="text-sm text-gray-400">View All</p>
        </div>
        <div className='flex flex-col gap-4'>
          {events.map((event) => (
            <div key={event.id} className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:bg-skyLight even:bg-customPurpleLight'>
              <div className='flex items-center justify-between'>
                <h1 className='text-md font-semibold text-gray-600'>{event.title}</h1>
                <p className='text-sm text-gray-300'>{event.time}</p>
              </div>
              <p className='text-sm text-gray-300 my-2'>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Announcement
