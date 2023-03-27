import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import HowItWorks from "./Pages/HowItWorks/HowItWorks";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import AdminProtected from "./AdminProtected";
import AdminDashboard from "./Pages/AdminDashboard";
import Cars from "./Pages/Cars/Cars";
import UserDashboard from "./Pages/UserDashboard";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import UserProtected from "./UserProtected";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/login" element={<Login />} />
          <Route index path="/admin/login" element={<AdminLogin />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />

          <Route element={<UserProtected />}>
            <Route path="/user/*" element={<UserDashboard />} />
          </Route>

          <Route element={<AdminProtected />}>
            <Route path="/dashboard/*" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
