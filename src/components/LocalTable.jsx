import Table from "./Table"

function LocalTable() {
  return (
    <div className="flex justify-center">
      <div className="container my-10">
        <div className="my-6">
          <button className="text-white bg-blue-900 border border-blue-300 p-2 rounded-2xl hover:bg-purple-500 relative active:top-1 active:left-1">
            Create
          </button>
        </div>
        <Table />
      </div>
    </div>
  )
}

export default LocalTable
