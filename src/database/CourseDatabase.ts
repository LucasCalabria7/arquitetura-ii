import { BaseDatabase } from "./BaseDatabase";

export class CourseDatabase extends BaseDatabase {
    public static TABLE_COURSES = "courses"

    public async getCourses() {
        const coursesDB = await BaseDatabase
            .connection(CourseDatabase.TABLE_COURSES)

        return coursesDB
    }
}