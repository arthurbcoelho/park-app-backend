import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    database: 'parkapp',
    username: 'postgres',
    password: '5o2eje',
    port: 5432,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js']
}

export default new DataSource(dataSourceOptions);