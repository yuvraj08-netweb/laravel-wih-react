import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <ul className="flex justify-center items-end py-4 bg-slate-600 gap-5 text-white">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
