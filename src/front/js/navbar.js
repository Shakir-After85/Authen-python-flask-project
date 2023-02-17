import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <div>
        <nav className="navbar navbar-dark ">
          <div className="container-fluid">
            <button
              className="navbar-toggler bg-warning"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>

      <div className="container">
        <Link to="/city-selector">
          <span className="navbar-brand mb-0 h1">iEatToLive </span>
        </Link>

        <div className="ml-auto">
          <button onClick={() => logOut()} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>

      <div className="collapse" id="navbarToggleExternalContent">
        <div className="p-4">
          <ul>
            <li>
              <Link to="/recipes">
                <span className="text-muted">Recipes</span>
              </Link>
            </li>
            <li>
              <Link to="/foodNews">
                <span className="text-muted">Food News</span>
              </Link>
            </li>
            <li>
              <Link to="/informVids">
                <span className="text-muted">Informative Videos</span>
              </Link>
            </li>
            <li>
              <Link to="/motivation">
                <span className="text-muted">Keep Going!</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
