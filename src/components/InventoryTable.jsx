import UpdateForm from "./forms/UpdateForm"
import DeleteBookModal from "./modals/DeleteBookModal"
import { useState } from "react"

function InventoryTable({ data }) {
  const [toUpdate, setToUpdate] = useState(false)
  const [toDelete, setToDelete] = useState(false)
  const [book, setBook] = useState("")
  const handleOnClickUpdate = (book) => {
    setToUpdate(!toUpdate)
    setBook(book)
  }
  const handleOnClickDelete = (book) => {
    setToDelete(!toDelete)
    setBook(book)
  }
  return (
    data && (
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
                Stock
              </th>
              <th scope="col" className="p-2 border border-white w-1/12">
                Actions
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
                  {book.publisher}
                </th>
                <th scope="row" className="p-2 border border-white">
                  {book.subject}
                </th>
                <th scope="row" className="p-2 border border-white">
                  {book.stock}
                </th>
                <th scope="row" className="p-2 border border-white">
                  <button
                    className="w-5 relative mr-3 active:left-1 active:top-1"
                    onClick={() => handleOnClickUpdate(book)}
                  >
                    <img src="/icons/edit.png" alt="edit png icon" />
                  </button>
                  <button
                    className="w-5 relative active:left-1 active:top-1"
                    onClick={() => handleOnClickDelete(book)}
                  >
                    <img src="/icons/trashbin.png" alt="trash bin png icon" />
                  </button>
                </th>
              </tr>
            ))}
            <tr className={`${data.length > 0 && "hidden"}`}>
              <th scope="row" className="p-2 border border-white"></th>
              <th scope="row" className="p-2 border border-white"></th>
              <th scope="row" className="p-2 border border-white"></th>
              <th scope="row" className="p-2 border border-white"></th>
              <th scope="row" className="p-2 border border-white"></th>
              <th scope="row" className="p-2 border border-white"></th>
              <th scope="row" className="p-2 border border-white">
                <button className="w-7 relative active:left-1 active:top-1 mr-3">
                  <img src="/icons/edit.png" alt="edit png icon" />
                </button>
                <button className="w-7 relative active:left-1 active:top-1">
                  <img src="/icons/trashbin.png" alt="trash bin png icon" />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
        <UpdateForm open={toUpdate} setToUpdate={setToUpdate} book={book} />
        <DeleteBookModal
          open={toDelete}
          setToDelete={setToDelete}
          book={book}
        />
      </>
    )
  )
}

export default InventoryTable
