import Login from "./components/Login"
import './App.css'
import Home from "./components/Home"
import { Route, Routes } from "react-router"
import WaitListForm from "./components/WaitlistForm"
import Waitlist from "./components/Waitlist"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/waitlist" element={<WaitListForm />} />
        <Route path="/confirm" element={<Waitlist />} />
      </Routes>
    </>
  )
}

export default App
