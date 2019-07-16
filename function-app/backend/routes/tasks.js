const tasks = require('../schema/tasks');

module.exports = (router) => {
    router.get('/tasks', (req, res) => {
        tasks.find((err, data) => {
            if (err) {
                return res.json({success: false, error: err});
            } else {
                return res.json({success: true, data: data});
            }
        });
    });

    router.post('/tasks', (req, res) => {
        let data = new tasks();
        const {message} = req.body;

        data.message = message;
        data.id = id;
        data.save((err) => {
            if (err) {
                return res.json({success: false, error: err});
            } else {
                return res.json({success: true});
            }
        });
    });

    router.put('/tasks', (req, res) => {
        const {id, update} = req.body;
        tasks.findByIdAndUpdate(id, update, (err) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true});
        });
    });
    router.delete('/tasks', (req, res) => {
        const {id} = req.body;
        tasks.findByIdAndRemove(id, (err) => {
            if (err) return res.send(err);
            return res.json({success: true});
        });
    });
}