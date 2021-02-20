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

