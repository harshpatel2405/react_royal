import { Route, Routes } from "react-router-dom";
import NetflixHome from "./netflix/NetflixHome";
import NetflixMovies from "./netflix/NetflixMovies";
import NetflixShows from "./netflix/NetflixShows";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/netflixHome" element={<NetflixHome />}></Route>
        <Route path="/netflixMovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixShows" element={<NetflixShows />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
