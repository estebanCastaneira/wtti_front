import { Routes, Route } from "react-router-dom"
import ExternalTable from "./components/ExternalTable"
import Header from "./components/Header"
import Home from "./components/Home"
import LocalTable from "./components/LocalTable"
import "./App.css"

function App() {
  return (
    <main className="bg-gradient-to-b from-blue-800 via-blue-600 to-blue-300 h-screen">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/external" element={<ExternalTable />} />
        <Route path="/local" element={<LocalTable />} />
      </Routes>
    </main>
  )
}

export default App
