const mongoose = require('mongoose')
const express = require('express');
const app = express();



//const db = require('./persistence');




app.use(express.json());
app.use(express.static(__dirname + '/static'));

app.listen(3000)

//Show all database entries
app.get('/', (req, res) => {
    res.json({message: "Here are all database entries "})
})

//Show one database entry
app.get('/get/:id', (req, res) => {
    res.json({message: `Here is the database entry for id: ${req.params.id}`})
})

//Update one database entry
app.patch('/update/:id', (req, res) => {
    res.send({success: "true"});
})
//Delete one database entry 
app.delete ('/delete:id', (req, res) => {

})

app.post('/', (req, res) => {
    req.body
    res.json({message: `Here is the database entry for id: ${req.body}`})

});



/*db.init().then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});*/



/*const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};


process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon*/
