var express = require('express');
var router = express.Router();
const { routeController } = require("../controllers");

/* GET best route listing. */
router.get('/best/', async function (req, res) {
    const [error, response] =
        await routeController.bestRoute(req.query)
    if (error) {
        res.send(400).json({ message: error.message });
    } else {
        res.status(200).json(response);
    }
});

/* POST Create new route. */
router.post('/', function (req, res) {
    const [error, response] =
        routeController.createRoute(req.body)
    if (error) {
        res.send(400).json({ message: error.message });
    } else {
        res.status(200).json(response);
    }
});

module.exports = router;