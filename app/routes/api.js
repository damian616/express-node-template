const express = require('express');
const router = express.Router();


// Define routes that use EJS views
router.get('/config', (req, res) => {
    res.render('app_b', { title: ' Config',tagline: 'home'});
});



module.exports = router;