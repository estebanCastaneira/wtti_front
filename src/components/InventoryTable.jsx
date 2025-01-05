function InventoryTable({ data }) {
  return (
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
              <button className="w-5 relative mr-3 active:left-1 active:top-1">
                <img src="/icons/edit.png" alt="edit png icon" />
              </button>
              <button className="w-5 relative active:left-1 active:top-1">
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
            <button className="relative active:left-1 active:top-1">
              <img src="/icons/edit.png" alt="edit png icon" />
            </button>
            <button className="relative active:left-1 active:top-1">
              <img src="/icons/trashbin.png" alt="trash bin png icon" />
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  )
}

export default InventoryTable
