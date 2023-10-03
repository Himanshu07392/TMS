import sequelize from 'sequelize'
import { dbInst } from '../configs/database'

interface TaskAttributes {
    id?: number
    task_name: string
    start_time: Date
    end_time: Date
    estimate: number
    is_completed?: boolean
    created_at?: Date
    updated_at?: Date
    deleted_at?: Date
}

interface TaskCreationAttributes extends sequelize.Optional<TaskAttributes, 'id'> {}

interface TaskInstance
  extends sequelize.Model<TaskAttributes, TaskCreationAttributes>,
  TaskAttributes {
      created_at: Date
      updated_at: Date
    }

export const TaskManager = dbInst.define<TaskInstance>('tasks', {
    id: {
        type: sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    task_name: {
        type: sequelize.STRING(100),
        allowNull: false
    },
    start_time: {
        type: sequelize.DATE,
        allowNull: false
    },
    end_time: {
        type: sequelize.DATE,
        allowNull: false
    },
    estimate: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    is_completed: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    created_at: {
        type: sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW
    },
    updated_at: {
        type: sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW
    },
    deleted_at: {
        type: sequelize.DATE,
        allowNull: true
    }

})


