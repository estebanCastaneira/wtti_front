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
