import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/HomePage";
import ClassesPage from "./Pages/Classes/ClassesPage";
import News from "./Pages/News/News";
import Events from "./Pages/Events/Events&Parties";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/news" element={<News />} />
                <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;