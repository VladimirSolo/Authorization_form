import { Request, Response, NextFunction } from 'express';
import { IValidation } from './types';
    // TODO not working 
const validation = (params: IValidation [] = []) => 
    (req: Request, res: Response, next: NextFunction) => {
        for (const param of params) {
            const requestBody = { ...req[param.payload], ...req.params };

            if (Object.keys(requestBody).includes(param.name)) {
                if (typeof requestBody[param.name] !== param.type) {
                    return res.status(400).json({
                        message: `${param.name} is of type ${typeof requestBody[param.name]} but should be ${param.type}`
                    });
                }

                if (param.validator) {
                    if (!param.validator(requestBody[param.name])) {
                        return res.status(400).json({
                            message: `Validation failed for ${param.name}`
                        });
                    }
                }
            } else if (param.required) {
                return res.status(400).json({
                    message: `Missing parameter ${param.name}`
                });
            }
        }

        next();
    };

export default validation;