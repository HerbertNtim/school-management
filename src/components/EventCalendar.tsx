import { title } from 'process';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

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

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'><Calendar onChange={onChange} value={value} /></div>
  )
}

export default EventCalendar
