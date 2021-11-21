//jshint esversion:6
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        minlength: [3, 'Name must be at least 3 characters'],
        maxlength: [50, 'Name can not be more than 50 characters']

    },
    rating:{
        type: Number,
        min: 1,
        max: 10
    },
    age: Number,
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: 'Apple',
    rating: 7,
    review: 'Pretty solid'
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const person = mongoose.model('Person', personSchema);

const person1 = new person({
    name: 'John',
    age: 30
});
person1.save();

const kiwi = new Fruit({
    name: 'Kiwi',
    score: 10,
    review: 'Great fruit'
});

const orange = new Fruit({
    name: 'Orange',
    score: 4,
    review: 'Too sour'
});
Fruit.updateOne({_id: '6198f9af8b3a43b10fd8d850'}, {name: 'Apple'}).then(result => {
// Fruit.insertMany([kiwi, orange], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Successfully saved all fruits');
//     }
// });

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        
        // mongoose.connection.close();
        fruits.forEach(function (fruit) {
            console.log(fruit.name);

        });
    }
        
});

// fruit.save();
// const insertDocuments = function (db, callback) {
//     const collection = db.collection("fruits");
//     collection.insertMany(
//         [
//             {
//                 name: "Apple",
//                 score: 8,
//                 review: "Great Fruit"
//             },
//             {
//                 name: "Orange",
//                 score: 6,
//                 review: "Yuckss"
//             },
//             {
//                 name: "Banana",
//                 score: 5,
//                 review: "Makes me Fat"
//             },

//         ], function (err, result) {
//             assert.equal(err, null);
//             // assert.equal(3, result.result.n);
//             // assert.equal(3, result.ops.length);
//             assert.equal(3, result.insertedCount);
//             assert.equal(3, Object.keys(result.insertedIds).length);
//             console.log("Inserted 3 documents into the collection")
//             callback(result)

//         }
//     )
// }