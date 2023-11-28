const express = require('express');
const data = require('./data.js')
const app = express();
const port = 8080

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/v1/pets', (req,res) => {
    res.send(data)
})

app.get('/api/v1/pets/:name', (req,res) => {
    let petName;
    data.forEach((pet) => {
       if(pet.name === req.params.name) petName = pet
    });
    res.send(petName)
})


app.get('/api/v1/pets/owner', (req, res) => {
   let petOwner;
   data.forEach((pet) => {
    if(pet.owner === req.query.name) petOwner = pet;
   });
   res.send(petOwner)
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

