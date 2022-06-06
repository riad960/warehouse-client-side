const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dsjl7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const watchCollection = client.db('watchWorld').collection('watch');
        const AddNewItemCollection = client.db('watchWorld').collection('AddNewItem');

        app.get('/watch', async (req, res) => {
            const email = req.query;
            console.log(email);
            const query = {};
            const cursor = watchCollection.find(query);
            const watches = await cursor.toArray();
            res.send(watches);
        })

        app.get('/watch/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const watch = await watchCollection.findOne(query);
            res.send(watch);
        })


        app.put('/watch/:id', async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = { 
                $set: data,
                     
                };
            const result = await watchCollection.updateOne(filter, updateDoc, options);
            res.send(result);


        })

        app.post('/watch', async (req, res) => {
            const newWatch = req.body;
            const result = await watchCollection.insertOne(newWatch);
            res.send(result);
        })

        app.delete('/watch/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await watchCollection.deleteOne(query);
            res.send(result);
        })

        // app.get('/addItem', async (req, res) => {
        //     const query = {};
        //     const cursor = AddNewItemCollection.find(query);
        //     const watches = await cursor.toArray();
        //     res.send(watches);

        // })

        app.post('/addItem', async (req, res) => {
            const newItem = req.body;
            const result = await AddNewItemCollection.insertOne(newItem);
            res.send(result);
        })


    }
    finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('server is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
