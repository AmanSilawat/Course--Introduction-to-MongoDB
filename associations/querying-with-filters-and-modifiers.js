const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017',)
}

const student = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        unique: true
    },
    faveFoods: [{ type: String }],
    info: {
        school: {
            type: String
        },
        shoeSize: {
            type: Number
        }
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'school'
    }
}, { timestamps: true });

const school = new mongoose.Schema({
    name: String,
    openSince: Number,
    students: Number,
    isGreat: Boolean
})

const School = mongoose.model('school', school);
const Student = mongoose.model('student', student);

connect()
    .then(async connection => {
        const schoolConfig = {
            name: 'mlk elementary',
            openSince: 2009,
            students: 1000, 
            isGreat: true,
            staff: ['a', 'b', 'c']
        }

        const school2 = {
            name: 'Larry Middle',
            openSince: 1980,
            students: 600,
            isGreat: false,
            staff: ['v', 'b', 'g']
        }

        const schools = await School.create([schoolConfig, school2])
        const match = await School.findOne({
            students: { $gt: 600, $lt: 1500 },
            isGreat: true
        })
        .sort({ openSince: -1}) // -1 for descending
        .limit(2)
        .exec();

        // const match = await School.find({
        //     staff: 'b'
        // })
        console.log(match)
        
    })
    .catch(e => console.error(e))