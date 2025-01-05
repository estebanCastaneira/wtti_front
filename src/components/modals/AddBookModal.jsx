import { useDispatch } from "react-redux"
import { updateApiData } from "../../redux_config/apiDataSlice"
import { storeLocalData } from "../../redux_config/localDataSlice"

function AddBookModal({ openModal, setOpenModal, book }) {
  const dispatch = useDispatch()
  const handleOnClick = () => {
    dispatch(updateApiData(book._version_))
    dispatch(storeLocalData(book))
    setOpenModal(!openModal)
  }
  return (
    <div
      className={`${
        openModal
          ? "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center ">
        <div className="flex flex-col items-center gap-6">
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
}

export default AddBookModal
