import { useSelector } from "react-redux"

function LoadingModal() {
  const isLoading = useSelector((state) => state.ui.isLoading)
  return (
    isLoading && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 flex justify-center items-center gap-6">
          <img className="w-10" src="/icons/Book.gif" alt="book gif" />
          <h4 className="text-black">Loading...</h4>
        </div>
      </div>
    )
  )
}

export default LoadingModal
