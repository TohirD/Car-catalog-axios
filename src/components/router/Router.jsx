import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import CarDetail from "../car-detail/CarDetail"

const Router = () => {
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/car/:id" element={<CarDetail/>}/>
    <Route path="*" element={<div>Not Found</div>}/>
  </Routes>
  
  </BrowserRouter>
  )
}

export default Router