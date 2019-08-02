const express = require('express');
const router = express.router();

router.get('/', (req, res) => {
    console.log("Request for home received.");
    res.render('index');
});

router.get('/about', (req, res) => {
    console.log("Request for about received.");
    res.render('about');
});

module.exports = router;