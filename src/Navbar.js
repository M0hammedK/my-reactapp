import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        <h1 className="navbar-brand text-white bg-danger p-0 rounded fs-1">
          K <span className="bg-white text-danger px-1 rounded">-log</span>
        </h1>
        <div className="d-flex">
          <Link className="nav-link btn btn-danger me-2" to="/">
            Home
          </Link>
          <Link className="nav-link btn btn-danger" to="/create">
            New Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;