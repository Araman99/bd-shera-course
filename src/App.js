import React from 'react';
import Header from './component/Header/Header';
import CoursePreview from './component/CoursePreview/CoursePreview';
//import logo from './logo.svg';
import './App.css';
import Course from './component/Course/Course';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Header/>     
    <CoursePreview></CoursePreview>
    <Course></Course>
    <Footer></Footer>
    </div>
  );
}

export default App;
