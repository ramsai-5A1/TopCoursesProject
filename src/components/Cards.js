import Card from './Card';
import './Cards.css';

function Cards({courses, category}) {
     
    const getCourses = () => { 
        let allCourses = []; 
        if(category == "All") {
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        } else {
            return courses[category];
        }
    }
 

    return (
        <div className="cardsDiv">
            {getCourses().map((course) => (
                <Card key={course.id} course={course}/>
            ))}
            
        </div>
    );
}

export default Cards;