// process.env is an object that stores all the environment variables as key-value pairs.
module.exports = {
    mongoURI: process.env.MONGO_URI,
    isProduction: process.env.NODE_ENV === 'production'
}