import React from 'react'
import ReactLogo from '../icons/react.svg'
import JS from '../icons/js.svg'

function Logo() {
  return (
    <div className="flex flex-col text-white">
      <div className="">{/* <ReactLogo /> */}</div>
      <div className="">{/* <JS /> */}</div>
      <div className="absolute bottom-0 right-0 h-32 border-l-2 border-l-white opacity-30" />
    </div>
  )
}

export default Logo
