import InventoryTable from "../InventoryTable"
import { useSelector } from "react-redux"
import { useState } from "react"
import CreateForm from "../forms/CreateForm"

function LocalTable() {
  const localData = useSelector((state) => state.localData)
  const [toCreate, setToCreate] = useState(false)

  const handleClickCreate = () => {
    setToCreate(!toCreate)
  }

  return (
    <div className="flex justify-center">
      <div className="container my-10">
        <div className="my-6">
          <button
            className=" bg-blue-900 border border-blue-300 p-2 rounded-2xl hover:bg-purple-500 relative active:top-1 active:left-1"
            onClick={handleClickCreate}
          >
            Create
          </button>
        </div>
        <InventoryTable data={localData} />
      </div>
      <CreateForm open={toCreate} setToCreate={setToCreate} />
    </div>
  )
}

export default LocalTable
