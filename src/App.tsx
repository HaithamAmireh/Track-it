import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Dashboard } from "./components/Dashboard";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

function App(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
