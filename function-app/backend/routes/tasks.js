const Task = require('../schema/tasks');

module.exports = (router) => {
    router.get('/tasks', (req, res) => {
        Task.find((err, data) => {
            if (err) {
                return res.json({success: false, error: err});
            } else {
                return res.json({success: true, data: data});
            }
        });
    });

    router.post('/tasks', (req, res) => {
        let data = new Task(req.body);
        data.save()
            .then(item => {
                return res.json({success: true, data: item});
            })
            .catch(err => {
                return res.json({success: false, error: err});
            });
    });

    router.put('/tasks', (req, res) => {
        const {id, update} = req.body;
        Task.findByIdAndUpdate(id, update, (err) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true});
        });
    });

    router.delete('/tasks', (req, res) => {
        const {id} = req.body;
        Task.findByIdAndRemove(id, (err) => {
            if (err) return res.send(err);
            return res.json({success: true});
        });
    });
}