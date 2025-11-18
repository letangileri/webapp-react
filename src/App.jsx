import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<h1>Movies page x</h1>} />
            <Route path="/admin" element={<h1>Admin page</h1>} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
