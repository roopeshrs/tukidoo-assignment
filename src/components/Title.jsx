import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const Title = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-4'>
        <div className='bg-gray-100 w-10 flex justify-center items-center p-1 rounded cursor-pointer'><ArrowBackIosIcon /></div>
        <h1 className='text-3xl font-bold'>Basic Mathematics 101</h1>
      </div>
      <div className='flex gap-4'>
        <div className='flex items-center gap-2 cursor-pointer'>
          <div className='bg-blue-400 rounded-full p-1'><CallOutlinedIcon /></div>
          <p className='font-semibold'>Call Teacher</p>
        </div>
        <div className='flex items-center gap-2 cursor-pointer'>
          <div className='bg-orange-400 rounded-full p-1'><SupportAgentOutlinedIcon /></div>
          <p className='font-semibold'>Support</p>
        </div>
      </div>
    </div>
  )
}

export default Title