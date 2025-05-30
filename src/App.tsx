import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Router basename="/dreamzone/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <h1 className="text-5xl font-bold text-black dark:text-white">
                404 not found
              </h1>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
