const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017',)
}

const school = new mongoose.Schema({
    district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'district'
    },
    name: {
        type: String
    },
    openSince: Number,
    students: Number,
    isGreat: Boolean,
    staff: [{ type: String }]
})

// set unique is true
school.index({
    district: 1,
    name: 1
}, {unique: true})


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