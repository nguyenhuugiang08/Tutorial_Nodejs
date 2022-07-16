const Course = require('../../models/Course');
const { zing } = require("zingmp3-api-next");

class SiteController {

    //[GET] -> /
    index(req, res) {

        Course.find({}, function (err, courses) {

            if (!err) {
                res.json(courses)
            } else {
                res.status(400).jsonp({ error: 'message' })
            }
        });

        // res.render('home')
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