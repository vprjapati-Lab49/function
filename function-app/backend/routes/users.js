const {createResponse, createSuccessResponse} = require("../util/functions");

const User = require('../schema/users');

module.exports = (router) => {
    router.get('/users', (req, res) => {
        res.json(Task.find(createResponse));
    });

    router.post('/users', (req, res) => {
        let data = new User(req.body);
        data.save()
            .then(item => {
                return res.json(createSuccessResponse(item));
            })
            .catch(err => {
                return res.json({success: false, error: err});
            });
    });
}