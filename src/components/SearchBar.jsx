import { useState } from "react"
import { useDispatch } from "react-redux"
import { clearApiData } from "../redux_config/apiDataSlice"
function SearchBar({ onSearch }) {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <div className="mb-10">
      <form onSubmit={handleSubmit} className="flex gap-10">
        <input
          type="text"
          placeholder="Search for a book title..."
          value={query}
          onChange={handleChange}
          className="p-2 rounded-2xl text-black"
        />
        <button
          type="submit"
          name="search"
          className=" bg-blue-900 border border-blue-300 p-2 rounded-2xl hover:bg-purple-500 relative active:top-1 active:left-1"
        >
          Search
        </button>
        <button
          type="submit"
          name="clear"
          className=" bg-blue-900 border border-blue-300 p-2 rounded-2xl hover:bg-red-500 relative active:top-1 active:left-1"
          onClick={() => {
            setQuery(""), dispatch(clearApiData())
          }}
        >
          Clear
        </button>
      </form>
    </div>
  )
}

export default SearchBar
