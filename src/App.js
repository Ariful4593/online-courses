import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import CourseData from './CourseData/CourseData';
import Courses from './components/Courses/Courses';
function App() {
  const [enroled, setEnroled] = useState([]);
  const enrolBtn = (product) => {
    
    const newEnroled = [...enroled, product];
    setEnroled(newEnroled);
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        <div>
          {
            CourseData.map((course) => {
            return (
              <Courses key={course.id} course={course} enrolBtn={enrolBtn}></Courses>
              
            );
          })
          }
        </div>
        
      </div>
      <div className="cart-container">
        <Cart cart={enroled} ></Cart>
      </div>
    </div>
  );
}

export default App;
