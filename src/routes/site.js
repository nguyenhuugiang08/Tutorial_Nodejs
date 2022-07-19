const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/home', siteController.home);
router.get('/search', siteController.search);
router.get('/detailplaylist/:id', siteController.detailPlaylist);

router.get('/', siteController.index);

module.exports = router;