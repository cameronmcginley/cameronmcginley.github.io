import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// Deployment via https://github.com/gitname/react-gh-pages
// npm run deploy

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
