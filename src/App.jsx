import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import ComputerNetworks from './pages/ComputerNetworks'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cn" element={<ComputerNetworks />} />
        <Route path="/cn/" element={<ComputerNetworks />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
