import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>

      <BrowserRouter>
        <div className="App">
          <Navbar />
          
          {/* Pages exist in the content div */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
