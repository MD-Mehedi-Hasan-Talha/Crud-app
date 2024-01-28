import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../style/Global.css";
import Create from "./Create";
import Home from "./Home";
import Nav from "./Nav";
import Update from "./Update";
import View from "./view";

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/create" Component={Create} />
          <Route path="/view/:id" Component={View} />
          <Route path="/update/:id" Component={Update} />
        </Routes>
      </Nav>
    </BrowserRouter>
  );
}

export default App;
