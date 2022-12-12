import React from 'react'
import ChannelHeaders from './ChannelHeaders'
import ChannelVedios from './ChannelVedios'
import LiveVedios from './LiveVedios'
import PreLive from './PreLive'

const ChannelBody = () => {
  return (
    <div>
      <ChannelHeaders/>
      <ChannelVedios/>
      <LiveVedios/>
      <PreLive/>
    </div>
  )
}

export default ChannelBody
