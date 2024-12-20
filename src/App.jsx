import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
