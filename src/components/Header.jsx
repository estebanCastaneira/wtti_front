import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import Anchor from "./Anchor"
function Header() {
  const { pathname: currentPage } = useLocation()

  return (
    <header className="text-white tracking-widest bg-blue-900 flex justify-center items-center p-5 ">
      <nav className="container">
        <ul className="flex items-center  gap-10">
          <div>
            <Link to={"/"}>
              <img
                src="/icons/book.png"
                alt="book png icon image"
                className="w-10 align-middle self-center block h-auto center relative bottom-2"
              />
            </Link>
          </div>
          <Anchor currentPage={currentPage} href={"/"} pageName={"Home"} />
          <Anchor
            currentPage={currentPage}
            href={"/search"}
            pageName={"Search Online Books"}
          />
          <Anchor
            currentPage={currentPage}
            href={"/inventory"}
            pageName={"Internal Book Inventory"}
          />
        </ul>
      </nav>
    </header>
  )
}

export default Header
