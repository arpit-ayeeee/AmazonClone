const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")
const stripe = require("stripe")("sk_test_51IAHl0IByyUUBEu0pbqu9aaJTdIyPR79QyTSqhiuDXbb9P5C75qpV2MVLVzfvBqyb8qR55WmsatTBbVREViVIh8w00C78PmBAU") 

//API
//App config
const app = express();


//Middlewares
app.use(cors({origin: true}));
app.use(express.json());


//API Routes
app.get('/', (req, res) => {
    res.status(200).send("Hello world");
})
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;   //Just like req.params
    console.log("Payment request recieved", + total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})



//Listen
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-ed18e/us-central1/api