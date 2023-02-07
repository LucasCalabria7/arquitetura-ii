import { CourseDatabase } from "../database/CourseDatabase"
import {Course} from '../models/Courses'

export class CourseBusiness {
    public getCourses = async () => {
        const coursesDatabase = new CourseDatabase()
        const coursesDB = await coursesDatabase.getCourses()

        const courses = coursesDB.map((courseDB) => new Course(
            courseDB.id,
            courseDB.name,
            courseDB.lessons,
        ))

        return courses
    }
}