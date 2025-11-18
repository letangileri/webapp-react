import { NavLink } from "react-router";

export default function Header() {
  const menu = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Movies",
      link: "/movies",
    },
    {
      id: 3,
      name: "Admin",
      link: "/admin",
    },
  ];
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            MoviesReviews
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavId"
            aria-controls="mainNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              {menu.map((menuItem) => (
                <li className="nav-item" key={menuItem.id}>
                  <NavLink
                    className="nav-link"
                    to={menuItem.link}
                    aria-current="page"
                  >
                    {menuItem.name}
                    <span className="visually-hidden">(current)</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
