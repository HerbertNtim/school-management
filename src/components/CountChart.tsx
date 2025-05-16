import Image from 'next/image';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#C3EBFA',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#FAE27C',
  },
];


const CountChart = () => {
  return (
    <div className='bg-white rounded-xl p-4 h-full'>
      {/* TITLE */}
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src='/moreDark.png' alt='more dark' width={20} height={20} />
      </div>
      {/* CHART */}
      <div className='relative w-full h-[75%]'>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={30} data={data}>
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src={'/maleFemale.png'} alt='students' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      </div>
      {/* BOTTOM */}
      <div className='flex items-center justify-between mt-4'>
        <div className='flex flex-col items-center gap-1'>
          <div className='w-5 h-5 rounded-full bg-sky' />
          <h1 className='text-lg font-bold'>1,243</h1>
          <h2 className='text-xs font-semibold text-gray-300'>Boys[45%]</h2>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <div className='w-5 h-5 rounded-full bg-customYellow' />
          <h1 className='text-lg font-bold'>1,243</h1>
          <h2 className='text-xs font-semibold text-gray-300'>Girls[45%]</h2>
        </div>
      </div>
    </div>
  )
}

export default CountChart
