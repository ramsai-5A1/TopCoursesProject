import Card from './Card';
import './Cards.css';

function Cards({courses}) {
     
    const getCourses = () => { 
        let allCourses = []; 
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
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