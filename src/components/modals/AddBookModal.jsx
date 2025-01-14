import { useDispatch } from "react-redux"
import { updateApiData } from "../../redux_config/apiDataSlice"
import { storeLocalData } from "../../redux_config/localDataSlice"
import { setError, setIsLoading, setSuccess } from "../../redux_config/uiSlice"
import { createBook } from "../../funcitons/api"

function AddBookModal({ openModal, setOpenModal, book }) {
  const dispatch = useDispatch()
  const handleOnClick = async () => {
    dispatch(setIsLoading(true))
    try {
      const processedBook = {
        _version_: book._version_,
        title: book.title,
        author_name: Array.isArray(book.author_name)
          ? book.author_name[0]
          : book.author_name || "...",
        first_publish_year: book.first_publish_year,
        publisher: Array.isArray(book.publisher)
          ? book.publisher[0]
          : book.publisher || "...",
        subject: Array.isArray(book.subject)
          ? book.subject[0]
          : book.subject || "...",
        stock: book.stock || 1,
      }
      const response = await createBook(processedBook)

      dispatch(storeLocalData(response))
      dispatch(updateApiData(book._version_))
      dispatch(
        setSuccess("The book has been successfully added to the inventory!")
      )

      setOpenModal(!openModal)
    } catch (error) {
      console.error("Error while creating book:", error)
      dispatch(
        setError("An error occurred while adding the book to the inventory.")
      )
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  return (
    openModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center ">
          <div className="flex flex-col items-center gap-6">
            <img src="/icons/info.png" alt="info icon png" className="w-10" />
            <h4 className="text-black">{`Do you want to add "${book.title}" to the Inventory?`}</h4>
            <div className="flex gap-6">
              <button
                className="p-2  bg-blue-900 border border-blue-300 rounded-xl relative active:top-1 active:left-1 hover:bg-purple-500"
                onClick={handleOnClick}
              >
                Yes
              </button>
              <button
                className="p-2  bg-blue-900 border border-blue-300 rounded-xl relative active:top-1 active:left-1 hover:bg-red-600"
                onClick={() => setOpenModal(!openModal)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default AddBookModal
