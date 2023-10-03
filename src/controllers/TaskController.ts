import { Request, Response } from 'express'
import { TaskManager } from '../models/task'

class TaskController {

    constructor(){

    }

    async getTaskById(req: Request, res: Response){

        try{

            let id = req.params.id

            let task = await TaskManager.findByPk(id)

            res.status(200).json({
                sc: 1,
                data: task
            })

        }catch(error){
            console.log('error in getting tasks by Id::', error)
            res.status(500).json({
                sc: 0,
                error: error
            })
        }

    }

    async getAllTask(req: Request, res: Response){
        try{
            let tasks = await TaskManager.findAll()
            res.status(200).json({
                sc: 1,
                data: tasks
            })
        }catch(error){
            console.log('error in getting tasks ::', error)
            res.status(500).json({
                sc: 0,
                error: error
            })
        }

    }

    async createTask(req: Request, res: Response){

        try{

            let { task_name, start_time, end_time, estimate } = req.body

            let tasks = await TaskManager.create({
                task_name: task_name,
                start_time: start_time,
                end_time: end_time,
                estimate: estimate
            })

            res.status(200).json({
                sc: 1,
                data: tasks
            })

        }catch(error){
            console.log('error in creating tasks ::', error)
            res.status(500).json({
                sc: 0,
                error: error
            })
        }
        
    }

    async updateTask(req: Request, res: Response){

        try{
            let id = req.params.id

            let {task_name, start_time, end_time, estimate, is_completed}= req.body

            let task = await TaskManager.update({
                task_name: task_name,
                start_time: start_time,
                end_time: end_time,
                estimate: estimate,
                is_completed: is_completed
            }, {
                where: {
                    id: id
                },
                returning: true
            })

            res.status(200).json({
                sc: 1,
                updated: task[1][0]
            })

        }catch(error){
            console.log('error in updating tasks by Id::', error)
            res.status(500).json({
                sc: 0,
                error: error
            })
        }
    }

    async deleteTask(req: Request, res: Response){

        try{

            let id = req.params.id

            let task = await TaskManager.destroy({
                where: {
                    id: id
                }
            })

            res.status(200).json({
                sc: 1,
                data: task
            })

        }catch(error){
            console.log('error in deleting tasks by Id::', error)
            res.status(500).json({
                sc: 0,
                error: error
            })
        }
        
    }

}

export const taskControllerInst = new TaskController()