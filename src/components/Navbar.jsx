import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {/* ✅ Netflix Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Netflix
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark" 
              aria-labelledby="navbarDropdown1"
            >
              <li>
                <Link className="dropdown-item" to="/netflixHome">
                  Home
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/netflixShows">
                  Shows
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/netflixMovies">
                  Movies
                </Link>
              </li>
            </ul>
          </li>

          {/* ✅ Tasks Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tasks
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark"  
              aria-labelledby="navbarDropdown2"
            >
              <li>
                <Link className="dropdown-item" to="/employees">
                  Task 1 - Employee (Props)
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/student">
                  Task 2 - Student (Props)
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


// <li class="nav-item active">
//         <Link class="nav-link" to="/netflixHome">Home <span class="sr-only">(current)</span></Link>
//       </li>
//       <li class="nav-item">
//         <Link class="nav-link" to="/netflixMovies">Movies</Link>
//       </li>
//       <li class="nav-item">
//         <Link class="nav-link" to="/netflixShows">Shows</Link>
//       </li>

/*
! Formatted Version :: use only when css is needed......
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // to detect current route

  return (
    <div className="netflix-navbar">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        .netflix-navbar {
          width: 100%;
          background: linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 100%);
          color: #fff;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 10px rgba(0,0,0,0.6);
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 3rem;
        }

        .navbar-brand {
          font-size: 2rem;
          font-weight: 700;
          color: #e50914;
          text-decoration: none;
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 1px;
          text-shadow: 0 0 20px rgba(229, 9, 20, 0.6);
          transition: 0.3s;
        }

        .navbar-brand:hover {
          color: #ff0a16;
          text-shadow: 0 0 30px rgba(229, 9, 20, 0.9);
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: #b3b3b3;
          font-size: 1rem;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s, transform 0.3s;
          position: relative;
        }

        .nav-link:hover {
          color: #fff;
          transform: translateY(-2px);
        }

        .nav-link.active {
          color: #fff;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          right: 0;
          height: 3px;
          background-color: #e50914;
          border-radius: 2px;
          animation: fadeIn 0.4s ease;
        }

        .right-icons {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .icon {
          cursor: pointer;
          font-size: 1.3rem;
          transition: transform 0.3s, color 0.3s;
          color: #b3b3b3;
        }

        .icon:hover {
          transform: scale(1.2);
          color: #fff;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scaleX(0); }
          to { opacity: 1; transform: scaleX(1); }
        }

       
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            gap: 1rem;
          }

          .navbar-links {
            gap: 1rem;
          }

          .navbar-brand {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <nav>
        <Link className="navbar-brand" to="/">
          NETFLIX
        </Link>

        <div className="navbar-links">
          <Link
            className={`nav-link ${
              location.pathname === "/netflixHome" ? "active" : ""
            }`}
            to="/netflixHome"
          >
            Home
          </Link>

          <Link
            className={`nav-link ${
              location.pathname === "/netflixMovies" ? "active" : ""
            }`}
            to="/netflixMovies"
          >
            Movies
          </Link>

          <Link
            className={`nav-link ${
              location.pathname === "/netflixShows" ? "active" : ""
            }`}
            to="/netflixShows"
          >
            Shows
          </Link>
        </div>

        <div className="right-icons">
          <span className="icon" title="Search">🔍</span>
          <span className="icon" title="Favourites">❤️</span>
          <span className="icon" title="Profile">👤</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

*/
