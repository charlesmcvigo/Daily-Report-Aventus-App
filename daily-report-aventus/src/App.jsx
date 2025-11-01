import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup"
import Homepage from "./pages/Homepage.jsx"
import Dashboard from "./pages/Dashboard.jsx"



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/dashboard" element = {<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
