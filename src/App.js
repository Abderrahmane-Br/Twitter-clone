import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Browse from "./components/Browse";
import Home from "./components/feed/Home";
import NothingHere from "./components/NothingHere";
import "./styles/main.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />}>
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<NothingHere header="Explore" />} />
          <Route path="notifications" element={<NothingHere header="Notifications" />} />
          <Route path="messages" element={<NothingHere header="Messages" />} />
          <Route path="bookmarks" element={<NothingHere header="Bookmarks" />} />
          <Route path="lists" element={<NothingHere header="Lists" />} />
          <Route path="profile" element={<NothingHere header="Profile" />} />
          <Route index element={<Navigate to="/home" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
