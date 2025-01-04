function Table() {
  return (
    <table className="w-full text-white backdrop-blur-[20px] backdrop-saturate-[92%] bg-[#ffffff] bg-opacity-30 border border-white">
      <thead className="bg-blue-900 font-bold text-sm">
        <tr className="border border-main">
          <th scope="col" className="p-2 border border-white">
            Column
          </th>
          <th scope="col" className="p-2 border border-white">
            Column
          </th>
          <th scope="col" className="p-2 border border-white">
            Column
          </th>
          <th scope="col" className="p-2 border border-white ">
            Column
          </th>
          <th scope="col" className="p-2 border border-white ">
            Column
          </th>
          <th scope="col" className="p-2 border border-white ">
            Column
          </th>
          <th scope="col" className="p-2 border border-white ">
            Column
          </th>
          <th scope="col" className="p-2 border border-white ">
            Column
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
          <th scope="row" className="p-2 border border-white"></th>
          <th scope="row" className="p-2 border border-white"></th>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
