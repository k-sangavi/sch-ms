import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./../student/Student";
import Teacher from "./../teacher/Teacher";
import About from "../About/About";
import AddStudent from "../AddStudent/AddStudent";
import AddTeacher from "./../AddTeacher/AddTeacher";

const Router = () => {
  const [data, setData] = useState([]);
  const [editTeacherData, setEditTeacherData] = useState([]);
  //console.log(editTeacherData);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student setData={setData} />} />
          <Route path="/teacher" element={<Teacher setEditTeacherData={setEditTeacherData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/addteacher" element={<AddTeacher />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
