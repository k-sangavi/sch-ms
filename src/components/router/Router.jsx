import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../About/About";

const Router = () => {
  const [data, setData] = useState([]);
  const [editTeacherData, setEditTeacherData] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
