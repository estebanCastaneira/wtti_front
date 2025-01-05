import { Routes, Route } from "react-router-dom"
import ExternalSearch from "./components/ExternalSearch"
import Header from "./components/Header"
import Home from "./components/Home"
import LocalTable from "./components/LocalTable"
import "./App.css"

function App() {
  return (
    <main className="bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400 min-h-screen tracking-wider text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/external" element={<ExternalSearch />} />
        <Route path="/inventory" element={<LocalTable />} />
      </Routes>
    </main>
  )
}

export default App
