import type { NextPage } from 'next'
import Logo from './Logo'
import Navbar from './Navbar'

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <div className="no-scrollbar relative mx-auto h-screen max-w-[1270px] snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth bg-dark px-2">
        {children}
      </div>
      <Navbar />
      <Logo />
    </>
  )
}

export default Layout
