import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiJavascript as JS } from 'react-icons/si'

function Logo() {
  return (
    <div className="fixed bottom-1/3 right-2 flex flex-col items-center">
      <JS className="mb-4 h-8 w-8 text-[#f7df1e] " />
      <FaReact className="mb-4 h-8 w-8 text-[#61DBFB]" />
    </div>
  )
}

export default Logo
