import React from 'react'
import Sidebar from './components/Sidebar'
import Title from './components/Title'
import Sections from './components/Sections'
import UserCard from './components/UserCard'
import Actions from './components/Actions'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col p-4 gap-6'>
        <Title />
        <Sections />
        <div className='flex gap-4'>
          <div className='w-[15%] flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
              <UserCard image="https://www.visionhelpdesk.com/wp-content/uploads/2018/01/finding-helpdesk.jpg" name="Ridha" />
              <UserCard image="https://www.medallia.com/wp-content/uploads/2021/06/AgentConnect_BlogHeader-1024x576-13.jpg" name="Ms. Kaur" />
            </div>
            <Actions />
          </div>
          <div className='flex-1'>
            <iframe width="100%" height="433" src="https://www.youtube.com/embed/JbhBdOfMEPs?si=Xv20kw2RKtXLCMl_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App