import "./App.css";
import { Navbar, RequireAuth } from "./components";
import { Home, Login, Signup, SingleVideo, VideoListing } from "./pages";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<VideoListing />} />
        {/* <Route path="/video/:videoId" element={<SingleVideo />} /> */}
        <Route path="/video/:videoId" element={
          <RequireAuth>
            <SingleVideo />
          </RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </>
  );
}

export default App;
