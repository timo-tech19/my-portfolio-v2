import React from 'react'
import { motion } from 'framer-motion'
import { FaReact } from 'react-icons/fa'
import { SiJavascript as JS } from 'react-icons/si'

function Logo() {
  return (
    <div className="fixed bottom-1/3 right-2 flex flex-col items-center">
      <motion.div
        initial={{ x: 100, opacity: 0, rotate: 180 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
      >
        <JS className="mb-4 h-8 w-8 text-[#f7df1e] " />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0, rotate: 180 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
      >
        <FaReact className="mb-4 h-8 w-8 text-[#61DBFB]" />
      </motion.div>
    </div>
  )
}

export default Logo
