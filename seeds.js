import mongoose from "mongoose";
import 'dotenv/config'

import User from "./models/User.js";
import Award from "./models/Award.js";

mongoose.connect(
    process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).
    then(() => console.log("Connected to database.")).
    catch((err) => console.log(err))

const seedUsers = [
    {
        "name": "Spongebob SquarePants",
        "email": "spongebob@gmail.com"
    }
]

const seedAwards = [
    {
        "name": "Gift Card IDR 1.000.000",
        "type": "vouchers",
        "point": 500000,
    },
    {
        "name": "Gift Card IDR 500.000",
        "type": "vouchers",
        "point": 250000,
    },
    {
        "name": "Old Fashion Cake",
        "type": "products",
        "point": 100000,
    },
]

const seedDB = async () => {
    await User.deleteMany({})
    await Award.deleteMany({})

    await User.insertMany(seedUsers)
    await Award.insertMany(seedAwards)
}

seedDB().
    then(() => {
        console.log("Seeding success.")
        mongoose.connection.close()
    }).
    catch((err) => console.log(err)) 
