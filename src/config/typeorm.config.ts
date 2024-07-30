import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import constants from "./constant.config";

const {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_PASSWORD,
    DB_USERNAME,
    DB_SYNC,
    DB_LOG,
} = constants;

const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: ['dist/modules/**/*.entity.{ts,js}'],
    synchronize: DB_SYNC,
    logging: DB_LOG,
};

export default TypeOrmConfig;