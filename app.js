const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
		
}, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Database connection successful")
    }
});
    // .then(
	// 	() => console.log(`mongoose version: ${mongoose.version}`),
	// 	console.log("Database connection successful")
    // ).catch((err) => console.error("Database connection error", err));
    
const fruitSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please check your data entry, no name specified!"]
        },
        rating: {
            type: Number,
            min: 1,
            max: 10
        },
        review: String
    }
);

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit(
    {
        name: "Apple",
        rating: 10,
        review: "Pretty Decent Fruit"
    }
);
 
//  fruit.save();

const mango = new Fruit({
    name: "mango",
    rating: 9,
    review: "Amazing fruit!"
})

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: mango
});

// person.save();

const pineapple = new Fruit({
	name: "pineapple",
	rating: 10,
	review: "Amazing fruit",
});


// Person.updateOne({ name: "John" }, { favouriteFruit: pineapple }, function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Success")
//     }
// });

// Person.deleteOne({ name: "Amy" }, function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Success")
//     }
// });
// const kiwi = new Fruit({
//     name: "kiwi",
//     rating: 10,
//     review: "Amazing fruit"
// });

// const orange = new Fruit({
//     name: "orange",
//     rating: 8,
//     review: "Oreety great fruit"
// });


//  Fruit.insertMany([kiwi, orange, pineapple], function (err) {
//      if (err) {
//         console.log("There was an error")
//     } else {
//         console.log("Successfully saved all the fruits to our fruitsDB!")
//      }
//  });

Fruit.find(function (err, fruits) {
	if (err) {
		console.log(err);
	} else {
		mongoose.connection.close();
		fruits.forEach(function (fruit) {
			console.log(fruit.name);
		});
	}
});


// Fruit.updateOne({ _id: "5ecc353081f5572f709d2c6a" }, { name: "Peaches" }, function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully updated the name to Peaches")
//     }
// });

// Fruit.deleteMany({ rating: { $gt: 4 } }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Deleted");
//     }
// });




