import { useDispatch } from "react-redux"
import { deleteLocalData } from "../../redux_config/localDataSlice"
import { deleteBook } from "../../funcitons/api"
import { setIsLoading } from "../../redux_config/uiSlice"
import { setSuccess, setError } from "../../redux_config/uiSlice"

function DeleteBookModal({ open, setToDelete, book }) {
  const dispatch = useDispatch()

  const handleOnClick = async () => {
    dispatch(setIsLoading(true))
    try {
      await deleteBook(book._version_)
      dispatch(deleteLocalData(book._version_))
      dispatch(setSuccess("The book has been successfully deleted!"))
      setToDelete(!open)
    } catch (error) {
      console.error("Error deleting book:", error)
      dispatch(
        setError(
          "An error occurred while deleting the book from the inventory."
        )
      )
    } finally {
      dispatch(setIsLoading(false))
    }
  }
  return (
    open && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center ">
          <div className="flex flex-col items-center gap-6">
            <img src="/icons/info.png" alt="info icon png" className="w-10" />
            <h4 className="text-black">{`Do you want to delete "${book.title}" from the Inventory?`}</h4>
            <div className="flex gap-6">
              <button
                className="p-2  bg-blue-900 border border-blue-300 rounded-xl relative active:top-1 active:left-1 hover:bg-purple-500"
                onClick={handleOnClick}
              >
                Yes
              </button>
              <button
                className="p-2  bg-blue-900 border border-blue-300 rounded-xl relative active:top-1 active:left-1 hover:bg-red-600"
                onClick={() => setToDelete(!open)}
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

export default DeleteBookModal
