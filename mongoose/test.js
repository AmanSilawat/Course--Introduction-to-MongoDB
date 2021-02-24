const { MongoServerSelectionError } = require('mongodb');
const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/myDB',)
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
}, {timestamps: true});

const Student = mongoose.model('student', student);

connect()
    .then(async connection => {
        const student = await Student.create({ firstName: 'Aman' });
        // const found = await Student.find({ firstName: 'thi' });
        // const foundAll = await Student.find({}); // WILD CARD
        // const foundById = await Student.findById('idksdfjlijfilj');
        // const updated = await Student.findByIdAndUpdate('idksdfjlijfilj', {});
        console.log(student)
    })
    .catch(e => console.error(e, 'Error'))