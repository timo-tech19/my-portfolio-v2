import React from 'react'

interface Props {
  children?: React.ReactNode
  title: string
  num: string
  id: string
}
function Section({ children, title, num, id }: Props) {
  console.log(num)
  return (
    <section className="flex h-screen flex-col pt-8" id={id}>
      <div className="mb-8 flex items-center">
        <h3
          className={`relative px-2 text-4xl font-black uppercase tracking-wider`}
        >
          <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-primary to-secondary" />
          <span className="absolute -right-20 -top-8 text-8xl font-black opacity-10">
            {num}
          </span>
          <span className="relative z-10 inline-block">{title}</span>
        </h3>
        <div className="ml-24 grow border-t-2 border-t-white opacity-30" />
      </div>
      <div className="flex grow items-center justify-center">{children}</div>
    </section>
  )
}

export default Section
