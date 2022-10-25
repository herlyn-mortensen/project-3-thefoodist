const { MongoClient } = require('mongodb')
//require('dotenv').config()


class MongoDB {
    async connectDatabase() {
        const client = new MongoClient("mongodb+srv://herlynmortensen:EBYB8LMXG4z3Kd3E@demo.m51ld.mongodb.net/?retryWrites=true&w=majority")
        return client
    }

    async collection(database, model) {
        const connection = this.connectDatabase()
        const db = (await connection).db(database)
        return db.collection(model)
    }
}

export default MongoDB