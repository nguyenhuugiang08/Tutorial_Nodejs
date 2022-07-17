const Course = require('../../models/Course');
const { zing } = require("zingmp3-api-next");

class SiteController {

    //[GET] -> /
    index(req, res, next) {
        res.render('home');

    }

    //[GET] -> /search
    search(req, res) {
        (async () => {
            const data = await zing.get_top_100();
            res.json(data);
        })();
    }

}

module.exports = new SiteController;