# Course--Introduction-to-MongoDB

Course Reference: [frontendmasters.com](https://frontendmasters.com/courses/mongodb/)

## Course Setup
MongoDB Git profile [mongodb](https://github.com/mongodb/mongo)
MongoDB [Atlas](https://www.mongodb.com/cloud/atlas)


### Install MongoDB

Download Link [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)

After installation verify the installation.
Type in terminal and If there is no error, it means everything is correct.
```bash
$ mongod
```

<br />

#### Start MongoDB
```bash
$ sudo systemctl start mongod
```
This is a open an interactive shell. This shell is a MongoDB environment.


<br />

#### Show list of all databases.
```bash
> show dbs
```

`dbs` for databases.

<br />

#### Create & switch a database
```bash
> use todos
```

<br />

#### Show all tables
```bash
> show collections
```

<br />

#### MongoDB help
```bash
> db.help()
```

<br />

#### Create Table
```bash
> db.createCollection('items')
{ "ok" : 1 }
```

<br />

#### Download MongoDB Compass for GUI Interface
Download link [MongoDB Compass](https://www.mongodb.com/try/download/compass)


## Mongoose
How to we connect to a mongo database from a node.js application.
basically two options
1. Native MongoDB driver
2. Package called [Mongoose](https://mongoosejs.com/)

ORM: Object Relational Mapper
ODM: Object Data Mapper

### Creating a Mongo Document with Mongoose

Install some node package
```bash
npm i mongoose mongodb
```

Create a `test.js` file

```js
const { MongoServerSelectionError } = require('mongodb');
const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017',)
}

const student = new mongoose.Schema({
    firstName: String
});

const Student = mongoose.model('student', student);

connect()
    .then(async connection => {
        const student = await Student.create({ firstName: 'Aman' });
        console.log(student);
    })
    .catch(e => console.error(e))
```

Start a mongoDB server than run this file.
```bash
$ node test.js
{ _id: 6030d1b71c2ce33430cf2462, firstName: 'Aman', __v: 0 }
```

`_id` is a unique id.
`first name` is a accept string value.
`__v` is a SCHEMA version.