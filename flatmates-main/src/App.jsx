import "./styles/index.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OpenCardPage from "./pages/OpenCardPage";
import ListingPage from "./pages/ListingPage";
import NeedRoommatePage from "./pages/NeedRoommatePage";
import ImagesCards from "./components/ImagesCards";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element = {<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/:id" element={<OpenCardPage/>} />
          <Route path="/listing" element={<ListingPage/>}/>
          <Route path="/need-roommate" element={<NeedRoommatePage/>}/>
          <Route path="/images" element={<ImagesCards/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App;

