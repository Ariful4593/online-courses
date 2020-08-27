import React from 'react';
import './Courses.css'

const Courses = (props) => {
    const {img, title, description, price} = props.course
    return (
        <div className="single-course card ">
           <img className="card-img-top" src={img} alt=""/>
            <div className="card-body">
            <h6 className="course-title card-text">{title}</h6>
                <p className="course-description card-text">{description}</p>
                <h6 className="course-price">Price : {price} $</h6>
                <button onClick={()=>props.enrolBtn(props.course)} className="btn btn-sm btn-info">Enroll Now</button>
            </div>
        </div>
    );
};

export default Courses;