import Contacts from "./components/contactsBlock/Contacts";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Contacts />
      </Router>
    </>
  );
}

export default App;
