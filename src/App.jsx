import { Route, Routes } from "react-router-dom";
import NetflixHome from "./netflix/NetflixHome";
import NetflixMovies from "./netflix/NetflixMovies";
import NetflixShows from "./netflix/NetflixShows";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Watch from "./netflix/Watch";
import Users from "./components/Users";
import Employee from "./tasks/Employee";
import Student from "./tasks/Student";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>

        {/* Info : Netflix Home, Netflix Shows, Netflix Movies */}
        <Route path="/netflixHome" element={<NetflixHome />}></Route>
        <Route path="/netflixMovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixShows" element={<NetflixShows />}></Route>
        <Route path="/watch/:name" element={<Watch />}></Route>


        <Route path="/users" element={<Users title={"User_Props"} />}></Route>
        <Route path="/employees" element={<Employee/>}></Route>
        <Route path="/student" element={<Student/>}></Route>

        {/* Info : Universal Route */}
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;