import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
//import '../../css/style.css'

export default function Layouts() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  )
}
