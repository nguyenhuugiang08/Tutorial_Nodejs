const Course = require('../../models/Course');
const { zing } = require("zingmp3-api-next");

class SiteController {

    //[GET] -> /
    index(req, res, next) {
        res.render('home');

    }

    //[GET] -> /home
    home(req, res) {
        (async () => {
            const data = await zing.get_home();
            res.json(data);
        })();
    }

    //[GET] -> /search
    search(req, res, next) {
        Course.find({})
            .then(courses => res.json(courses))
            .catch(next);
    }


    //[GET] -> /detailplaylist?id
    detailPlaylist(req, res) {
        (async () => {
            const data = await zing.get_playlist(req.params.id);
            res.json(data);
        })();
    }

}

module.exports = new SiteController;