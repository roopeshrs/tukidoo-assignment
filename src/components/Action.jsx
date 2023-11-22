import React from 'react'

const Action = ({Icon, title}) => {
  return (
    <div className='flex flex-col items-center cursor-pointer'>
        <div className={`w-10 h-10 flex justify-center items-center rounded-xl ${title=='Leave' ? 'bg-blue-400' : 'bg-gray-200'}`}><Icon /></div>
        <p className='font-semibold'>{title}</p>
    </div>
  )
}

export default Action