import axios from "axios"
import { useEffect, useState } from "react"
import ExternalTable from "./ExternalTable"
import SearchBar from "./SearchBar"

function ExternalSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("") //TODO

  useEffect(() => {
    if (searchQuery) {
      setLoading(true)
      setError("")
      async function fetchBooks() {
        try {
          const response = await axios.get(
            `https://openlibrary.org/search.json?q=${searchQuery}`
          )
          console.log(response.data.docs)
          setSearchResults(response.data.docs)
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      }

      fetchBooks()
    }
  }, [searchQuery])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div className="flex justify-center">
      <div className="container my-10">
        <SearchBar onSearch={handleSearch} />
        <ExternalTable data={searchResults} />
      </div>
    </div>
  )
}

export default ExternalSearch
