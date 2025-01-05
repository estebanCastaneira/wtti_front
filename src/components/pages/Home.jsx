function Home() {
  return (
    <div className="flex justify-center text-center">
      <div className="container my-10">
        <section className="backdrop-blur-[20px] backdrop-saturate-[92%] bg-[#ffffff] bg-opacity-30 border border-opacity-20 border-white my-0 mx-auto p-16 lg:py-16 lg:px-56 rounded-lg flex flex-col gap-10">
          <h1 className="text-2xl font-bold">
            Welcome to your Book Inventory Manager!
          </h1>
          <p>
            Our tool is designed to make it easy for you to keep your book
            inventory updated and organized. With this app, you'll be able to
            quickly and easily manage your bookstore:
          </p>
          <p>
            <strong>1. Search for books :</strong> Use our search function to
            quickly find any title you wish to add to your inventory.
          </p>
          <p>
            <strong>2. Add books to your inventory :</strong> If the book you're
            looking for isn't in the system, you can easily add it with relevant
            information such as title, author, publishing year, and more.
          </p>
          <p>
            <strong>3. Edit details: </strong>
            If you need to update any book details, such as its title, author,
            or publisher, you can do so at any time with ease.
          </p>
          <p>
            <strong>4. Manage stock:</strong> Adjust the number of available
            units for each book with just one click, keeping your inventory up
            to date.
          </p>

          <p>
            With our user-friendly and intuitive interface, you can manage your
            inventory in no time, without complications, and in a very efficient
            manner. Make your bookstore management simpler and more organized!
          </p>
        </section>
      </div>
    </div>
  )
}

export default Home
