var Account = require("../models/account.model");
var Course = require("../models/course.model");
var CourseCategory = require("../models/courseCategory.model")
var Topic = require("../models/topic.model");
var TraineeToCourse = require("../models/traineeToCourse.model");
var TrainerToCourse = require("../models/trainerToCourse.model");
module.exports = {
    // Create=====================================================================================================================
    postCreateAccountAdmin: async function (req, res, next) {
        var username = req.body.username
        var account = await Account.findOne({ username: username });
        console.log(account);
        console.log(username);
        var error = [];
        if (!req.body.name) {
            error.push('Name is required!')
        }
        if (!req.body.username) {
            error.push('Username is required!')
        }
        if (account) {
            error.push('Account already exists')
        }
        if (!req.body.password) {
            error.push('Password is required!')
        }
        if (error.length) {
            res.render('admin/createAccountAdmin', {
                errors: error,
                values: req.body
            });
            return;
        }
        next();
    },
    postCreateAccountStaff: async function (req, res, next) {
        var username = req.body.username
        var account = await Account.findOne({ username: username });
        console.log(account);
        console.log(username);
        var error = [];
        if (!req.body.name) {
            error.push('Name is required!')
        }
        if (!req.body.username) {
            error.push('Username is required!')
        }
        if (account) {
            error.push('Account already exists')
        }
        if (!req.body.password) {
            error.push('Password is required!')
        }
        if (error.length) {
            res.render('admin/createAccountStaff', {
                errors: error,
                values: req.body
            });
            return;
        }
        next();
    },
    postCreateAccountTrainer: async function (req, res, next) {
        var username = req.body.username
        var account = await Account.findOne({ username: username });
        console.log(account);
        console.log(username);
        var error = [];
        if (!req.body.name) {
            error.push('Name is required!')
        }
        if (!req.body.username) {
            error.push('Username is required!')
        }
        if (account) {
            error.push('Account already exists')
        }
        if (!req.body.password) {
            error.push('Password is required!')
        }
        if (error.length) {
            res.render('admin/createAccountTrainer', {
                errors: error,
                values: req.body
            });
            return;
        }
        next();
    },
    postCreateAccountTrainee: async function (req, res, next) {
        var username = req.body.username
        var account = await Account.findOne({ username: username });
        console.log(account);
        console.log(username);
        var error = [];
        if (!req.body.name) {
            error.push('Name is required!')
        }
        if (!req.body.username) {
            error.push('Username is required!')
        }
        if (account) {
            error.push('Account already exists')
        }
        if (!req.body.password) {
            error.push('Password is required!')
        }
        if (error.length) {
            res.render('admin/createAccountTrainee', {
                errors: error,
                values: req.body
            });
            return;
        }
        next();
    },
    
    postCreateCourseCategory: async function (req, res, next) {

        var category = await CourseCategory.findOne({ category: req.body.category });
        var error = [];
        if (!req.body.category) {
            error.push('Category name is required!')
        }
        if (category) {
            error.push('Category already exists')
        }
        if (error.length) {
            res.render('admin/createCourseCategory', {
                errors: error,
                values: req.body
            });
            return;
        }
        console.log(category);
        next();
    },
    postCreateCourse: async function (req, res, next) {
        var error = [];
        if (!req.body.courseName) {
            error.push('Name of Course is required !')
        }
        if (req.body.courseCategory == 'Choose a category') {
            error.push('Course Category is required !')
        }
        if (error.length) {
            var categorys = await CourseCategory.find({})
            res.render('admin/createCourse', {
                categorys: categorys,
                errors: error,
                values: req.body
            });
            return;
        }
        next();
    },
    postAddTrainer: async function (req, res, next) {
        var error = [];
        if (req.body.courseName == 'Choose a Course') {
            error.push('Name of Course is required !')
        }
        if (req.body.trainer == 'Choose a Trainer') {
            error.push('Course Category is required !')
        }
        if (error.length) {
            var course = await Course.find({});
            var trainer = await Account.find({ role: "trainer" });
            res.render('admin/trainerCourse', {
                courses: course, trainers: trainer, errors: error, values: req.body
            });
            return;
        }
        next();

    }
}