import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./../student/Student";
import AddStudent from "./../addStudent/AddStudent";
import About from "./../about/About";

const Router = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student setData={setData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/addstudent" element={<AddStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
