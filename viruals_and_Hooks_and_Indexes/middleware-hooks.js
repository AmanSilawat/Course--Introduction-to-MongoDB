const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017',)
}

const school = new mongoose.Schema({
    name: String,
    openSince: Number,
    students: Number,
    isGreat: Boolean,
    staff: [{ type: String }]
})

// school.pre('save', function (params) {

// ! synchronous middleware functions
// school.pre('save', function (params) {
//     console.log('before save');
// })

// school.post('save', function (params) {
//     console.log('after save');
// })

// ! Asynchronous Middleware
school.post('save', function (doc, next) {
    setTimeout(() => {
        console.log('post save', doc);
        next();
    }, 300);
})

school.virtual('staffCount')
    .get(function () {
        console.log('in virtual')
        return this.staff.length
    });

const School = mongoose.model('school', school);

connect()
    .then(async connection => {
        const mySchool = await School.create({
            name: 'my school',
            staff: ['v', 'f', 'fsa']
        });

        console.log(mySchool.staffCount, '--')
    })
    .catch(e => console.error(e))