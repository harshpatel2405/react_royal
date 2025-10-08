import React from "react";
import { Link } from "react-router-dom";

const NetflixShows = () => {
  const shows = [
    { id: 1001, name: "Legend Of Hanuman" },
    { id: 1002, name: "Breaking Bad" },
    { id: 1003, name: "Stranger Things" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Shows</h1>
      <ul >
        {shows.map((show) => (
          <li key={show.id}>
            <Link to={`/watch/${show.id}`} style={{ textDecoration: "none", color: "red", fontWeight: "bold" }}>
              {show.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NetflixShows;
