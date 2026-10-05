import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/HomePage";
import ClassesPage from "./Pages/Classes/ClassesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<ClassesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;