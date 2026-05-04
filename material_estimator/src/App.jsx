import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Header from './header'
import Col_BeamDetails from './col_beamDetails'
import SlabDetails from "./slabDetails"
import CulvertDetails from "./culvertDetails"
import LinedrainDetails from "./linedrain_Details"
import Guide from "./guide"
import Contact from "./contact"

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/colandbeam' element={<Col_BeamDetails />} />
          <Route path="/slab" element={<SlabDetails />} />
          <Route path="/culvert" element={<CulvertDetails />} />
          <Route path="/linedrain" element={<LinedrainDetails />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
