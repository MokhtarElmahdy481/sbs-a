import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/Banner'

const RootLayout = () => {

  return (
    <div className='min-h-screen flex flex-col'>
      <Banner/>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout