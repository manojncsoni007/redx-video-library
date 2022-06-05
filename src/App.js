import "./App.css";
import { Navbar, RequireAuth } from "./components";
import { Home, Login, Signup, SingleVideo, VideoListing, WatchLater } from "./pages";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<VideoListing />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="/watchlater" element={
          <RequireAuth>
            <WatchLater />
          </RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </>
  );
}

export default App;
