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
export const createBook = async (bookData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}`,
      bookData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return response.data
  } catch (error) {
    console.error("Error creating book:", error)
    throw error
  }
}

export const updateBook = async (bookData) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}`,
      bookData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return response.data
  } catch (error) {
    console.error("Error updating book:", error)
    throw error
  }
}

export const deleteBook = async (version) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/${version}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return response.data
  } catch (error) {
    console.error("Error deleting book:", error)
    throw error
  }
}
