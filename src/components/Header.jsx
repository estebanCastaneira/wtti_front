function Header() {
  return (
    <header className="text-white tracking-widest bg-blue-900 flex justify-center p-5 ">
      <nav className="container">
        <ul className="flex gap-10">
          <a href="#" className="hover:text-blue-400 active:text-blue-500">
            External
          </a>
          <a href="#" className="hover:text-blue-400 active:text-blue-500">
            Local
          </a>
        </ul>
      </nav>
    </header>
  )
}

export default Header
