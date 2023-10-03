import { Router } from 'express'
import { taskControllerInst } from '../controllers/TaskController'
import { taskValidation } from '../validators/taskValidate'

export const router = Router({
    mergeParams: true
})

router.route('/v1/task')
    .get(taskControllerInst.getAllTask)
    .post(taskValidation.makeValidation('store'), taskControllerInst.createTask)

router.route('/v1/task/:id')
    .get(taskValidation.makeValidation('view'), taskControllerInst.getTaskById)
    .put(taskValidation.makeValidation('update'), taskControllerInst.updateTask)
    .delete(taskValidation.makeValidation('delete'), taskControllerInst.deleteTask)