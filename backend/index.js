import express from 'express';
import mongoose, { mongo } from 'mongoose';
import bodyparser from 'body-parser';



const app = express();
const PORT = 3000;

// Mongo connection
// Mongoose is a library that simplifies connections to mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewURLParser: true,
    useUnifiedTopology: true
});

// bodyparse setup
// allows us to pass the request encoded properly
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());


app.get('/', (req, res) => {
    res.send(`Our Soccer application is running on port: ${PORT}`);

});

app.listen(PORT, () => {
    console.log(`Your soccer server is running on port: ${PORT}\n No errors encounter.`);
});






