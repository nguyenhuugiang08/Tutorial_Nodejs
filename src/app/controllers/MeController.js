const Course = require('../../models/Course')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/dbhelper')

class MeController  {

    //[POST] -> /me/stored/courses
    index(req, res, next) {
        Course.find({})
        .then(courses => res.render('me/courses', {courses : mutipleMongooseToObject(courses)}))
        .catch(next);
     }

}

module.exports = new MeController;