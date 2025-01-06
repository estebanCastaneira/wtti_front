import axios from "axios"

export const getBooks = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}`)
    return response.data
  } catch (error) {
    console.error("Error fetching books:", error)
    throw error
  }
}

export const updateBook = async (book) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/${book._version_}`,
      book
    )
    return response.data // Devuelve la respuesta del backend si es necesario
  } catch (error) {
    console.error("Error updating book:", error)
    throw error
  }
}
