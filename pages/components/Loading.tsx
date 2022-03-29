import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

// const letterVariant = {
//   start: {
//     opacity: 0,
//     y: 50,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//   },
// }

type Props = {
  onComplete: () => void
}

function Loading({ onComplete }: Props) {
  const animation = useAnimation()
  const letters = useAnimation()

  async function sequence() {
    await letters.start({ opacity: 1, x: 0 })
    await letters.start({ x: -100, opacity: 0 })
    onComplete()
  }

  useEffect(() => {
    sequence()
  }, [])

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <motion.h1 className="flex h-full w-full items-center justify-center text-9xl font-black tracking-wide ">
        {'timotech'.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={letters}
            transition={{ delay: i * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default Loading
