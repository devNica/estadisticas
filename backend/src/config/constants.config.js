import 'dotenv/config'

export default {
    PREFIX: '/anuario/v1',
    SERVER_PORT: process.env.SERVER_PORT || 8200,
    DB: {
        NODE_ENV: process.env.NODE_ENV,
        DBNAME: process.env.DB_NAME,
        DBPORT: process.env.DB_PORT,
        DBUSER: process.env.DB_USER,
        DBPASSWORD: process.env.DB_PASSWORD,
        DIALECT: process.env.DIALECT,
        DBHOST: process.env.DB_HOST
      },
}