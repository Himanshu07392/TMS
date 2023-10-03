import { Sequelize } from 'sequelize'

const dbName: string = 'postgres'
const dbUser: string = 'TMS_Database'
const dbPassword: string = '12345678'

export const dbInst = new Sequelize(dbUser, dbName, dbPassword, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    define: {
        freezeTableName: true,
        timestamps: false
    },
    logging: false
})
