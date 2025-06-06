'use client'

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK)
  const handleViewChange = (selectedView: View) => {
    setView(selectedView)
  }

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: '98%' }}
      onView={handleViewChange}
      min={new Date(0, 0, 0, 8, 0, 0)}
      max={new Date(0, 0, 0, 17, 0, 0)}
    />
  )
}

export default BigCalendar
