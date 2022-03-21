import Link from 'next/link'
import React from 'react'
import Section from '../components/Section'

function Contact() {
  return (
    <Section title="About" num="04">
      <div className="mx-auto mt-16 w-1/2 text-center ">
        <h2 className="mb-4 text-3xl font-black uppercase">
          Let's work together!
        </h2>
        <p className="mb-8">
          Looking for a front end dev for your team? You can reach out to me via
          email by clicking the button below. I'm also open to making friends
          and meeeting awesome people. Be sure to check out my socials below.
        </p>
        <Link href="mailto:timoheman16@gmail.com">
          <button
            type="button"
            className="mx-auto mt-8 cursor-pointer rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-2xl uppercase text-white"
          >
            Work With Me
          </button>
        </Link>
      </div>
    </Section>
  )
}

export default Contact
