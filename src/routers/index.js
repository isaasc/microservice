const express = require('express');
const router = new express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        name: 'Attack on Titan',
        seasons: 3,
        isCompleted: true
    });
});

router.post('/', (req, res, next) => {
    console.log(req.body);

    const message = 'Successful post!'
    res.status(201).send(message);
});

router.put('/', (req, res, next) => {
    console.log(req.body);

    const message = 'Successful put!'
    res.status(200).send(message);
});


module.exports = router;