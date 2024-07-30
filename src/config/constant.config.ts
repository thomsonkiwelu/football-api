import {  config as dotEnvConfig } from 'dotenv';
dotEnvConfig({ path: '.env' });

interface IConstants {
    APP_PORT: number,
    APP_ENV: string,
    API_NAME: string,
    API_VERSION: string,
    API_TAG: string,
    API_DESCRIPTION: string,
    DB_HOST: string,
    DB_PORT: number,
    DB_USERNAME: string,
    DB_PASSWORD: string,
    DB_DATABASE: string,
    DB_SYNC: boolean,
    DB_LOG: boolean,
};

const constants: IConstants = {
    //Application
    APP_PORT: parseInt(process.env.APP_PORT),
    APP_ENV: process.env.APP_ENV,

    //API
    API_NAME: process.env.API_NAME,
    API_VERSION: process.env.API_VERSION,
    API_TAG: process.env.API_TAG,
    API_DESCRIPTION: process.env.API_DESCRIPTION,

    //Database
    DB_HOST: process.env.DB_HOST,
    DB_PORT: parseInt(process.env.DB_PORT) || 3000,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_SYNC: Boolean(process.env.DB_SYNC),
    DB_LOG: Boolean(process.env.DB_LOG),
};

export default constants;