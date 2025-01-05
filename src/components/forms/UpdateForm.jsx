import { updateLocalData } from "../../redux_config/localDataSlice"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
function UpdateForm({ open, setToUpdate, book }) {
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {
    if (book) {
      setValue("_version_", book._version_)
      setValue("title", book.title)
      setValue("author_name", book.author_name)
      setValue("first_publish_year", Number(book.first_publish_year))
      setValue("publisher", book.publisher)
      setValue("subject", book.subject)
      setValue("stock", book.stock)
    }
  }, [book, setValue])
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(updateLocalData(data))
    setToUpdate(!open)
  }

  return (
    open && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
        <div className="bg-white p-10 rounded-lg w-full m-20">
          <form
            className="p-8 flex flex-col gap-3 rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex items-center gap-3 mb-10">
              <img src="/icons/info.png" alt="info icon png" className="w-10" />
              <h2>Updating Book Inventory</h2>
            </div>
            <fieldset className="flex gap-3">
              <div className="flex flex-col gap-3 w-1/2">
                <label htmlFor="_version_">Version number</label>
                <p className="border border-gray-300 p-1 rounded-md">
                  {book._version_}
                </p>
              </div>
              {/* closing input */}
              <div className="flex flex-col gap-3 w-1/2">
                <label htmlFor="author_name">Author</label>
                <input
                  id="author_name"
                  {...register("author_name", {
                    required: "Author name is required",
                  })}
                  type="text"
                  placeholder="Author name..."
                  className="border border-gray-300 p-1 rounded-md"
                />
              </div>
              {/* closing input */}
            </fieldset>
            {/* Input group end */}
            <fieldset className="flex gap-3">
              <div className="flex flex-col gap-3 w-8/12">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  {...register("title", {
                    required: "Book title is required",
                  })}
                  type="text"
                  placeholder="Book title..."
                  className="border border-gray-300 p-1 rounded-md"
                />
              </div>
              {/* closing input */}
              <div className="flex flex-col gap-3 w-4/12">
                <label htmlFor="first_publish_year">Published Year</label>
                <input
                  id="first_published_year"
                  {...register("first_publish_year", {
                    required: "Published year is required",
                    min: 0,
                  })}
                  type="number"
                  placeholder="Type a Year..."
                  className="no-arrows border border-gray-300 p-1 rounded-md"
                />
              </div>
              {/* closing input */}
            </fieldset>
            {/* Input group end */}
            <fieldset className="flex flex-wrap lg:flex-nowrap gap-3">
              <div className="flex flex-col gap-3 w-4/12">
                <label htmlFor="publisher">Publisher</label>
                <input
                  id="publisher"
                  {...register("publisher", {
                    required: "Publisher is required",
                  })}
                  type="text"
                  placeholder="Publisher name..."
                  className="border border-gray-300 p-1 rounded-md"
                />
              </div>
              {/* closing input */}
              <div className="flex flex-col gap-3 w-4/12">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  {...register("subject", {
                    required: "A Main Subject is required",
                  })}
                  type="text"
                  placeholder="Main subject..."
                  className="no-arrows border border-gray-300 p-1 rounded-md"
                />
              </div>
              {/* closing input */}
              <div className="flex flex-col gap-3 w-4/12">
                <label htmlFor="stock">Stock</label>
                <input
                  id="stock"
                  {...register("stock", {
                    required: "Stock number is required",
                    min: 1,
                  })}
                  type="number"
                  placeholder="..."
                  className="border border-gray-300 p-1 rounded-md"
                />
              </div>
              {/* closing input */}
            </fieldset>
            {/* Input group end */}
            <div className="flex gap-10 self-end mt-10">
              <button
                type="submit"
                className="p-2 text-white bg-blue-900 border border-blue-300 rounded-xl relative active:top-1 active:left-1 hover:bg-purple-500"
              >
                Save
              </button>
              <button
                className="p-2 text-white bg-blue-900 border border-blue-300 rounded-xl relative active:top-1 active:left-1 hover:bg-red-600"
                onClick={() => setToUpdate(!open)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default UpdateForm