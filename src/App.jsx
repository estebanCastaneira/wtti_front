import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setLocalData } from "./redux_config/localDataSlice"
import { getBooks } from "./funcitons/api"
import ExternalSearch from "./components/pages/ExternalSearch"
import Header from "./components/Header"
import Home from "./components/pages/Home"
import Inventory from "./components/pages/Inventory"
import LoadingModal from "./components/modals/LoadingModal"
import "./App.css"
import InformationModal from "./components/modals/InformationModal"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await getBooks()
        dispatch(setLocalData(books))
      } catch (error) {
        console.error("Error loading books:", error)
      }
    }

    fetchBooks()
  }, [dispatch])

  return (
    <main className="bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400 min-h-screen tracking-wider text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/external" element={<ExternalSearch />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      <LoadingModal />
      <InformationModal />
    </main>
  )
}

export default App
