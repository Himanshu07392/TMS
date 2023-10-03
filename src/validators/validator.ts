import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export class Validator {
    rules: any

    constructor(rules: any) {
        this.rules = rules
    }

    makeValidation(validatorKey: any){

        // try {
            if (!validatorKey) {
                throw new Error(`Invalid validator key '${validatorKey}' supplied.`)
            }

            this.rules[validatorKey]

            return [
                ...this.rules[validatorKey],
                (req: Request, res: Response, next: NextFunction) => {
                    const errors = validationResult(req)
                    if (!errors.isEmpty()) {
                        return res.status(400).send({
                            errors: errors.array()
                        })
                    }
                    next()
                }
            ]
        // } catch (err) {
        //     //resHndlr.sendError(res,err);
        //     return console.log(err)
        // }
    }
}