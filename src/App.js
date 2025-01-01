import { createContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "./Api/axiosConfig";
import Landing from "./pages/Landing/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Ask from "./pages/Ask/Ask";
import Answer from "./pages/Answer/Answer";

export const AppState = createContext();

function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  async function checkUser() {
    try {
      const { data } = await axios.get("/users/checkUser", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
    } catch (error) {
      console.log(error.response);
      navigate("/");
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AppState.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/question/:questionid" element={<Answer />} />
      </Routes>
    </AppState.Provider>
  );
}

export default App;
