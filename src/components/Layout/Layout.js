import { Outlet } from 'react-router-dom'
import '../../App.scss'
import Footer from './Footer'
import NavBar from './NavBar.js'

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
