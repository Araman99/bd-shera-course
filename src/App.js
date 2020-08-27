import React from 'react';
import Header from './component/Header/Header';
import CoursePreview from './component/CoursePreview/CoursePreview';
//import logo from './logo.svg';
import './App.css';
import Course from './component/Course/Course';
function App() {
  return (
    <div className="App">
    <Header/>     
    <CoursePreview></CoursePreview>
    <Course></Course>
    </div>
  );
}

export default App;
