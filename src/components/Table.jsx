function Table() {
  return (
    <table className="w-full text-white backdrop-blur-[20px] backdrop-saturate-[92%] bg-[#ffffff] bg-opacity-30 border border-white">
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
        <tr className="">
          <th scope="row" className="p-2 border border-white"></th>
          <th scope="row" className="p-2 border border-white"></th>
          <th scope="row" className="p-2 border border-white"></th>
          <th scope="row" className="p-2 border border-white"></th>
          <th scope="row" className="p-2 border border-white"></th>
          <th scope="row" className="p-2 border border-white"></th>
          <th
            scope="row"
            className="p-2 border border-white flex justify-around gap-1"
          >
            <button className="w-5">
              <img src="./public/icons/edit.png" alt="edit png icon" />
            </button>
            <button className="w-5">
              <img src="./public/icons/trashbin.png" alt="trash bin png icon" />
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
