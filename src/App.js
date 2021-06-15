import React from "react";
import Input from "./Input";
import Display from "./Display";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route path="/create" component={Input} />
      <Route path="/display" component={Display} />
    </Router>
  );
}

export default App;
