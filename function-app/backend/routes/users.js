const {createResponse, createSuccessResponse, createFailureResponse} = require("../util/functions");

const User = require('../schema/users');
const baseSchemaPath = '/users';

module.exports = (router) => {
    router.get(`${baseSchemaPath}`, (req, res) => {
        res.json(User.find(createResponse));
    });

    router.get(`${baseSchemaPath}/:id`, (req, res) => {
        User.findOne({_id: req.params.id})
            .then(item => {
                return res.json(createSuccessResponse(item));
            })
            .catch(err => {
                return res.json(createFailureResponse(err));
            });
    });

    router.get(`${baseSchemaPath}/byGoogleProfileId/:googleId`, (req, res) => {
        User.findOne({googleId: req.params.googleId})
            .then(item => {
                return res.json(createSuccessResponse(item));
            })
            .catch(err => {
                return res.json(createFailureResponse(err));
            });
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