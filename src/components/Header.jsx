import { useLocation } from "react-router-dom"
import Anchor from "./Anchor"
function Header() {
  const { pathname: currentPage } = useLocation()

  return (
    <header className=" tracking-widest bg-blue-900 flex justify-center p-5 ">
      <nav className="container">
        <ul className="flex gap-10">
          <Anchor currentPage={currentPage} href={"/"} pageName={"Home"} />
          <Anchor
            currentPage={currentPage}
            href={"/external"}
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
