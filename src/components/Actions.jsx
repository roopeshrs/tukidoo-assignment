import React from 'react'
import Action from './Action'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Actions = () => {
  return (
    <div className='flex flex-wrap gap-8'>
      <Action Icon={CameraAltOutlinedIcon} title="Cam" />
      <Action Icon={MicNoneOutlinedIcon} title="Mic" />
      <Action Icon={SendToMobileOutlinedIcon} title="Share" />
      <Action Icon={ChatOutlinedIcon} title="Chat" />
      <Action Icon={LogoutOutlinedIcon} title="Leave" />
    </div>
  )
}

export default Actions