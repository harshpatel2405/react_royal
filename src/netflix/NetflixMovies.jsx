import React from 'react'
import { Link } from 'react-router-dom'

const NetflixMovies = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1>NetFlix Movies</h1>
      <ul style={{ textDecoration: "none", color: "red", fontWeight: "bold" }}>
        <li>
          <Link to='/watch/animal'>Animal</Link>
        </li>
        <li>
          <Link to='/watch/kantara'>Kantara</Link>
        </li>
        <li>
          <Link to='/watch/Mahavtar_Narsimha'>Mahavatara Narsimha</Link>
        </li>
      </ul>
    </div>
  )
}

export default NetflixMovies
