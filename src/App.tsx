import { Outlet } from "react-router"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { ToastContainer } from "react-toastify"


function App() {

  
 

  return (
    <>
    
     <Navbar/>
     <div className="">
      <Outlet/>
      <ToastContainer/>
     </div>
     <Footer/>
    </>
  )
}

export default App
