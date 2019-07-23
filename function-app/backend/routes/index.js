const tasks = require('./tasks')
const users = require('./users')

module.exports=(router)=>{
    tasks(router);
    users(router);
}