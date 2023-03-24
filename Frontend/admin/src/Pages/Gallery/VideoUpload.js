import React from 'react'
import Main from "../../components/Video/Video"
import Table from "../../components/Video/VideoTable"

function VideoUpload() {
  return (
    <div className="flex flex-col gap-[60px]">
      <Main/>
      <Table/>
    </div>
  )
}

export default VideoUpload
