const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017')
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
    name: String
})

const School = mongoose.model('school', school);
const Student = mongoose.model('student', student);

connect()
    .then(async connection => {
        const school = await School.findOneAndUpdate({ name: 'mlk1 elementary' }, { name: 'sahil khan' }, { upsert: true, new: true }).exec()
        // const school = await School.create({ name: 'Eva' }).exec();
        const student = await Student.create({ firstName: 'Trisha', school: school._id });
        // const match = await Student.findById(student.id)
        const match = await Student.findById(student.id)
            .populate('school ')
            .exec();
        
        console.log(match, '--')
    })
    .catch(e => console.error(e))