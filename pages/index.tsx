import React, { useState } from 'react'
import Layout from './components/Layout'
import Loading from './components/Loading'
import About from './containers/About'
import Contact from './containers/Contact'
import Hero from './containers/Hero'
import Projects from './containers/Projects'

function App() {
  const [loading, setLoading] = useState(true)

  if (loading) return <Loading onComplete={() => setLoading(false)} />

  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
