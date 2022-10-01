module.exports = {
    
    HOST: "localhost",
    USER: "root",
    PASSWORD: "19812019",
    DB: "musica",
    dialect:"mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000

    }

};