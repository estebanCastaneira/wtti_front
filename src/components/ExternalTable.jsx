import AddBookModal from "./modals/AddBookModal"
import { useState } from "react"
function ExternalTable({ data }) {
  const [openModal, setOpenModal] = useState(false)
  const [book, setBook] = useState("")
  const handleOnClick = (book) => {
    setOpenModal(!openModal)
    setBook(book)
  }
  return (
    <>
      <table className="w-full  backdrop-blur-[20px] backdrop-saturate-[92%] bg-[#ffffff] bg-opacity-30 border border-white">
        <thead className="bg-blue-900 font-bold text-sm">
          <tr>
            <th scope="col" className="p-2 border border-white w-3/12">
              Title
            </th>
            <th scope="col" className="p-2 border border-white">
              Author
            </th>
            <th scope="col" className="p-2 border border-white">
              Year
            </th>
            <th scope="col" className="p-2 border border-white ">
              Publisher
            </th>
            <th scope="col" className="p-2 border border-white ">
              Subject
            </th>

            <th scope="col" className="p-2 border border-white w-1/12">
              Add to Inventory
            </th>
          </tr>
        </thead>
        <tbody className="font-light text-sm">
          {data.map((book, index) => (
            <tr key={index} className="">
              <th scope="row" className="p-2 border border-white">
                {book.title}
              </th>
              <th scope="row" className="p-2 border border-white">
                {book.author_name}
              </th>
              <th scope="row" className="p-2 border border-white">
                {book.first_publish_year}
              </th>
              <th scope="row" className="p-2 border border-white">
                {book.publisher?.[0]}
              </th>
              <th scope="row" className="p-2 border border-white">
                {book.subject ? book.subject[0] : "..."}
              </th>
              <th scope="row" className="p-2 border border-white ">
                <button
                  className="w-5 relative active:left-1 active:top-1"
                  onClick={() => handleOnClick(book)}
                >
                  <img src="/icons/plus.png" alt="plus png button" />
                </button>
              </th>
            </tr>
          ))}
          <tr className={`${data.length > 0 ? "hidden" : ""}`}>
            <th scope="row" className="p-2 border border-white"></th>
            <th scope="row" className="p-2 border border-white"></th>
            <th scope="row" className="p-2 border border-white"></th>
            <th scope="row" className="p-2 border border-white"></th>
            <th scope="row" className="p-2 border border-white"></th>
            <th scope="row" className="p-2 border border-white"></th>
          </tr>
        </tbody>
      </table>
      <AddBookModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        book={book}
      />
    </>
  )
}

export default ExternalTable
