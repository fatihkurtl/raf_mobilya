// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import AppRoutes from "./routes/router"
// import RegisterForm from "./components/RegisterForm"
import FooterLayout from "./layouts/Footer"
import HeaderLayout from "./layouts/Header"
import NavbarLayout from "./layouts/Navbar"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <HeaderLayout />
    <NavbarLayout />
      {/* <RegisterForm /> */}
      <AppRoutes />
    <FooterLayout />
    </>
  )
}

export default App
