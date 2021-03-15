
exports.mongoUrl = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00.fb1iv.mongodb.net:27017,cluster0-shard-00-01.fb1iv.mongodb.net:27017,cluster0-shard-00-02.fb1iv.mongodb.net:27017/ProjectRAS?ssl=true&replicaSet=atlas-9fbaww-shard-0&authSource=admin&retryWrites=true&w=majority`
exports.secret = `${process.env.JWT_SECRET}`;
exports.critTemp=23;
