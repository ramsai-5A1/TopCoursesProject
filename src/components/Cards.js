import { useEffect } from "react";
import Card from './Card';

function Cards({courses}) {
    let allCourses = [];
    const getCourses = () => { 
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        console.log(allCourses);
        return allCourses;
    }
 

    return (
        <div>
            {getCourses().map((course) => {
                return <Card key={course.id} course={course}/>
            })}
            
        </div>
    );
}

export default Cards;