/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

// eslint-disable-next-line react/prop-types
const Courses = ({handlerSelection}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('courses.json')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])


    return (
        <div >
            <h3 className='text-3xl font-bold'>Courses: {courses.length} </h3>
           <div className=' grid grid-cols-3 gap-8'>
                {
                    courses.map(course =><Course course={course}  handlerSelection={ handlerSelection}></Course>)
                }
           </div>
            {/* <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course> */}
        </div>
    );
};

export default Courses;