import "./App.css";
import { Navbar } from "./components";
import { Home, SingleVideo, VideoListing, WatchLater } from "./pages";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<VideoListing />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="/watch-later" element={<WatchLater />} />
      </Routes>

    </>
  );
}

export default App;
