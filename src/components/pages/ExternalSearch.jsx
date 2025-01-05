import axios from "axios"
import { useEffect, useState } from "react"
import { storeApiData } from "../../redux_config/apiDataSlice"
import { useDispatch, useSelector } from "react-redux"
import ExternalTable from "../ExternalTable"
import SearchBar from "../SearchBar"
import LoadingModal from "../modals/LoadingModal"

function ExternalSearch() {
  const dispatch = useDispatch()
  const apiData = useSelector((state) => state.apiData)
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("") //TODO

  useEffect(() => {
    if (searchQuery) {
      setLoading(true)
      setError("")
      async function fetchBooks() {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}${searchQuery}`
          )
          dispatch(storeApiData(response.data.docs))
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      }

      fetchBooks()
    }
  }, [searchQuery, dispatch])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div className="flex justify-center">
      <div className="container my-10">
        <SearchBar onSearch={handleSearch} />
        <ExternalTable data={apiData} />
      </div>
      <LoadingModal isLoading={loading} />
    </div>
  )
}

export default ExternalSearch
