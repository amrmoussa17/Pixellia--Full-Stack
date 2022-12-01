import "./App.css"
import { useState } from "react"
import Main from "./components/Main"
import Image from "./components/Image"
import { Route, Routes } from "react-router-dom"

function App() {
  const [imgUrl, setImgUrl] = useState("amr")
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Main setImgUrl={setImgUrl} />} />
        <Route path="/img" element={<Image imgUrl={imgUrl} />} />
      </Routes>
    </>
  )
}

export default App
