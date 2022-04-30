import "./App.css";
import { Navbar } from "./components";
import { Home, VideoListing } from "./pages";
import { Route, Router, Routes } from 'react-router-dom';
// import { Home, VideoListing } from "./pages";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<VideoListing />} />
      </Routes>

    </>
  );
}

export default App;
