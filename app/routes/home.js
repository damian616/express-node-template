const express = require('express');
const router = express.Router();


// Define routes that use EJS views
router.get('/', (req, res) => {
    res.render('app_a', { title: ' Home', tagline: 'config' });
});


module.exports = router;