const Course = require('../../models/Course')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/dbhelper')

class CourseController {

    //[GET] -> /courses
    index(req, res, next) {
        Course.find({})
            .then(courses => res.render('courses/courses', { courses: mutipleMongooseToObject(courses) }))
            .catch(next);
    }

    //[GET] -> /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => res.render('courses/courseDetail', { course: mongooseToObject(course) }))
            .catch(next);
    }

    //[GET] -> /courses/create
    create(req, res, next) {
        res.render('courses/courseCreate')
    }

    //[POST] -> /courses/store
    store(req, res, next) {
        const formData = req.body
        formData.thumbnail = `https://i.ytimg.com/an_webp/${req.body.videoId}/mqdefault_6s.webp?du=3000&sqp=CNCpz5YG&rs=AOn4CLCch7qcBtPlWFkzRG6mZSWWoPZUVg`
        const course = new Course(req.body);
        course.save();
        res.redirect('/courses');
    }

    //[GET] -> /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/coursesEdit', { course: mongooseToObject(course) }))
            .catch(next);
    }

    //[PUT] -> /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

     //[DELETE] -> /courses/:id
     delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController;