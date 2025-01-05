import { Routes, Route } from "react-router-dom"
import ExternalSearch from "./components/pages/ExternalSearch"
import Header from "./components/Header"
import Home from "./components/pages/Home"
import Inventory from "./components/pages/Inventory"
import "./App.css"

function App() {
  return (
    <main className="bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400 min-h-screen tracking-wider text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/external" element={<ExternalSearch />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </main>
  )
}

export default App
