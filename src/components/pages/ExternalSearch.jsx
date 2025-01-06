import axios from "axios"
import { useEffect, useState } from "react"
import { storeApiData } from "../../redux_config/apiDataSlice"
import { setIsLoading } from "../../redux_config/uiSlice"
import { useDispatch, useSelector } from "react-redux"
import ExternalTable from "../ExternalTable"
import SearchBar from "../SearchBar"

function ExternalSearch() {
  const dispatch = useDispatch()
  const apiData = useSelector((state) => state.apiData)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (searchQuery) {
      dispatch(setIsLoading(true))

      async function fetchBooks() {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}${searchQuery}`
          )
          dispatch(storeApiData(response.data.docs))
        } catch (err) {
          console.log(err)
        } finally {
          dispatch(setIsLoading(false))
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
    </div>
  )
}

export default ExternalSearch
