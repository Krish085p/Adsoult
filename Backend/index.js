const express = require('express');
const mongoose = require('mongoose');
const { connectToDb } = require("./connection");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

connectToDb();

const userRoute = require('./Routes/User');
const eventRoute = require('./Routes/Event');
const ticketRoute = require('./Routes/Tickets');

app.use("/api", userRoute);
app.use("/api", eventRoute);
app.use("/api", ticketRoute);

const dbconnect = async(req, res) => {
  await mongoose.connect('mongodb+srv://krishpatel085:krish31620@cluster0.lzsbfto.mongodb.net/Adsoult?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));
}


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
