import { useSelector } from "react-redux"
import { useEffect } from "react"
import { clearUiState } from "../../redux_config/uiSlice"
import { useDispatch } from "react-redux"

function InformationModal() {
  const { error, success } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  const message = error || success
  const isError = Boolean(error)
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        dispatch(clearUiState())
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [message, dispatch])

  if (!message) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 flex justify-center items-center gap-6">
        <img
          className="w-10"
          src={isError ? "/icons/error.png" : "/icons/info.png"}
          alt={isError ? "Error icon" : "Info icon"}
        />
        <h4 className="text-black">{message}</h4>
      </div>
    </div>
  )
}

export default InformationModal
