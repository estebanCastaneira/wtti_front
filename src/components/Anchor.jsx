import { Link } from "react-router-dom"
function Anchor({ currentPage, href, pageName }) {
  return (
    <Link
      to={href}
      className={`hover:text-blue-400 active:text-blue-500 ${
        currentPage === href && "text-purple-500 font-bold"
      }`}
    >
      {pageName}
    </Link>
  )
}

export default Anchor
