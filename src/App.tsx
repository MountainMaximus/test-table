import { Routes, Route } from "react-router-dom";
import React from "react";
import { Wrapper } from "./layout/Wrapper";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
