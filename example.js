// // Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })



// //Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })

// //Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send(`Your is is : ${req.params.id}`)
// })

// //Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

// //Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })



// ``
// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// mongoose.connect(process.env.DATA_BASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// const db= mongoose.connection;

// db.on('error',(error)=>{ console.error(error)});
// db.once('open',()=>{ console.log('connected to database')})


// app.listen(3000 , ()=>{ console.log('Server ST...')});

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const PORT = 3000;
// mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true, useUnifiedTopology: true });

// const db= mongoose.connection;

// db.on('error',(error)=>{ console.error(error)});
// db.once('open',()=>{ console.log('connected to database')})

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });
