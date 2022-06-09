import "./App.css";
import { Navbar, PlaylistContainer, RequireAuth } from "./components";
import { History, Home, LikedVideo, Login, Playlist, Signup, SingleVideo, VideoListing, WatchLater } from "./pages";
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
        <Route path="/playlist" element={
          <RequireAuth>
            <Playlist />
          </RequireAuth>
        } />
        <Route path="/playlist/:playlistId" element={<PlaylistContainer/>}
        />
        <Route path="/watchlater" element={
          
            <WatchLater />
         
        } />
        <Route path="/likedvideos" element={
          <RequireAuth>
            <LikedVideo />
          </RequireAuth>
        } />
        <Route path="/history" element={
          <RequireAuth>
            <History />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </>
  );
}

export default App;
