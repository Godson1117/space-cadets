import Login from "./components/Login"
import './App.css'
import Home from "./components/Home"
import { Route, Routes } from "react-router"
import WaitListForm from "./components/WaitlistForm"
import Waitlist from "./components/Waitlist"
import PassReset from "./components/PassReset"
import Loader from "./components/BackdropLoader"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/waitlist" element={<WaitListForm />} />
        <Route path="/confirm" element={<Waitlist />} />
        <Route path="/password-reset" element={<PassReset /> } />
      </Routes>
    </>
  )
}

export default App
