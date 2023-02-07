import { Request, Response } from "express"
import { CourseBusiness } from "../business/CourseBusiness"
import { BaseError } from "../errors/BaseError"

export class CoursesController {
    public getCourses = async (req: Request, res: Response) => {
        try {
            const courseBusiness = new CourseBusiness()
            const output = await courseBusiness.getCourses()
    
            res.status(200).send(output)
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}