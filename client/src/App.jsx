import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Login from "./Components/Auth/Login";
import AuthRoute from "./Routes/AuthRoute";
import Signup from "./Components/Auth/Signup";
import Dashboard from "./Components/User/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/" />
        {/* <Route element={<PrivateRoute />}>
            <Route element={<Dashboard />} path="/" />
          </Route>
          <Route element={<AuthRoute />}>
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
          </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
