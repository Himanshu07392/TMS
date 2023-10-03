import { check, param } from 'express-validator'
import { Validator } from './validator'

class TaskValidation extends Validator {
  constructor() {
    super({
        view: [
            param('id')
                .notEmpty()
                .withMessage('estimate is required')
                .isInt()
                .withMessage('id should be Number')
        ],
        store: [
            check('task_name')
                .notEmpty()
                .withMessage('task_name is required')
                .isString()
                .withMessage(`customer_name  should be string`),

            check('start_time')
                .notEmpty()
                .withMessage('start Time is required')
                .isISO8601()
                .withMessage('start_time should be a valid date in ISO 8601 format'),

            check('end_time')
                .notEmpty()
                .withMessage('end_time is required')
                .isISO8601()
                .withMessage('end_time should be a valid date in ISO 8601 format'),

            check('estimate')
                .notEmpty()
                .withMessage('estimate is required')
                .isInt()
                .withMessage('estimate should be Number')
        ],
        update: [
            param('id')
                .notEmpty()
                .withMessage('estimate is required')
                .isInt()
                .withMessage('id should be Number'),

            check('task_name')
                .optional()
                .isString()
                .withMessage(`customer_name  should be string`),

            check('start_time')
                .optional()
                .isISO8601()
                .withMessage('startDate should be a valid date in ISO 8601 format'),

            check('end_time')
                .optional()
                .isISO8601()
                .withMessage('end_time should be a valid date in ISO 8601 format'),

            check('estimate')
                .optional()
                .isInt()
                .withMessage('estimate should be Number'),

            check('is_completed')
                .optional()
                .isBoolean()
                .withMessage('is_completed should be Boolean')
        ],
        delete: [
            param('id')
                .notEmpty()
                .withMessage('estimate is required')
                .isInt()
                .withMessage('id should be Number')
        ]
    })
  }
}

export let taskValidation = new TaskValidation()
