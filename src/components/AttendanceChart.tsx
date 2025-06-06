import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 4000,
    absent: 2400,
  },
  {
    name: 'Tue',
    present: 3000,
    absent: 1398,
  },
  {
    name: 'Wed',
    uv: 2000,
    absent: 9800,
  },
  {
    name: 'Thu',
    present: 2780,
    absent: 3908,
  },
  {
    name: 'Fri',
    present: 1890,
    absent: 4800,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-xl p-4 h-full'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src="/moreDark.png" alt='more attendance' width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={30}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#d1d5db' }} />
          <Tooltip contentStyle={{ borderRadius: '10px', borderColor: "lightgray" }} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: '40px' }} />
          <Bar dataKey="absent" fill="#FAE27C" legendType='circle' radius={[10, 10, 0, 0]} />
          <Bar dataKey="present" fill="#C3EBFA" legendType='circle' radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart
