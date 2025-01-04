import { useState } from "react"

function SearchBar({ onSearch }) {
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
          placeholder="Search for a book..."
          value={query}
          onChange={handleChange}
          className="p-2 rounded-2xl"
        />
        <button
          type="submit"
          className="text-white bg-blue-900 border border-blue-300 p-2 rounded-2xl hover:bg-purple-500 relative active:top-1 active:left-1"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
