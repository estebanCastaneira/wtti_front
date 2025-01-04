import { useLocation } from "react-router-dom"
import Anchor from "./Anchor"
function Header() {
  const { pathname: currentPage } = useLocation()

  return (
    <header className="text-white tracking-widest bg-blue-900 flex justify-center p-5 ">
      <nav className="container">
        <ul className="flex gap-10">
          <Anchor currentPage={currentPage} href={"/"} pageName={"Home"} />
          <Anchor
            currentPage={currentPage}
            href={"/external"}
            pageName={"External"}
          />
          <Anchor
            currentPage={currentPage}
            href={"/local"}
            pageName={"Local"}
          />
        </ul>
      </nav>
    </header>
  )
}

export default Header
