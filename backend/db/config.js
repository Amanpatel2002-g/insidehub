require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const databaseURL = `${process.env.DATABASE}`;
console.log(databaseURL);
mongoose.connect(
    `${process.env.DATABASE}`,
    {
        dbName: 'inquera',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => (err ? console.log(err) :
        console.log('Connected to inquera database')),
);


// const uri = "mongodb+srv://apofficial2002:aman1234@cluster0.0s9nkqc.mongodb.net/?retryWrites=true&w=majority";
// const databaseURL = process.env.DATABASE;
// console.log(databaseURL);
// You can then use databaseURL in your code, e.g., for connecting to a database.

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// mongoose.connect(uri).then(()=>{
//     console.log("Database Connected");
// }).catch((e)=>{
//     console.log({"The error is":e});
// });


