const mongoose = require('mongoose');

const uri = 'mongodb+srv://ashishyenurkar15:Ashish2000@cluster0.v6otvma.mongodb.net/quora-clone-mern'; // Replace with your MongoDB URI
module.exports.connect=()=>{
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start your application logic here
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
}