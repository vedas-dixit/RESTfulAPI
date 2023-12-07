//! usual Promises
// const func=()=>{
//     return fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((data)=>{
//         return data.json()
//     })
// }


// const promise = new Promise((resolve,reject)=>{
//     resolve(func());
// })

// promise
// .then((result)=>{
//     return result;
// })
// .then((res)=>{ console.log(res)})
// .catch((err)=>{
//     console.log(err);
// })


// !We could've used Https like
// !const http = require('http');
// !createserver

// const express = require('express');
// const app = express();
// //*middleware

// app.use('/post',()=>{
    
// })


// //*routes
// app.get('/',(req,res)=>{
//     res.send("on home")
// })


// app.get('/post',(req,res)=>{
//     res.send("on post")
// })



// app.listen(3000);

//* new
// const express = require('express');
// const app = express();
// const PORT= 3000;

// app.get('/',(req,res)=>{
//     res.send('hello');
// })

// app.listen(PORT,()=>{
//     console.log(`server running at port ${PORT}`)
// })


const express = require('express');
const PORT = 3000;

const bodyparser = require('body-parser');
const { setTimeout } = require('timers');

const app = express();

app.use(bodyparser.json());

// app.get('/',(req,res)=>{
//     res.send("Sending Response");
// })



// app.listen(PORT,()=>{
//     console.log("HOME")
// })

let books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
];

app.get('/books', (req,res)=>{
    res.json(books);
})


app.get('/books/:id',(req,res)=>{
    const bookID = parseInt(req.params.id);
    const book = books.find(book => book.id==bookID);
    if (book) {
        res.json(book);
    }
    else{
        res.status(404).json({error: 'book not found'});
    }
})

app.post('/books',(req,res)=>{
    const newBook = req.body;
    newBook.id = books.length +1;
    books.push(newBook);
    res.status(201).json(newBook);
});


app.put('/books/:id',(req,res)=>{
    const bookId = parseInt(req.params.id);
    const Updatedbook= req.body;
    books = books.map((book) => (book.id==bookId ? Updatedbook : book));
    res.json(Updatedbook);
})


app.delete('/books/:id',(req,res)=>{
    const bookId = parseInt(req.params.id);
    books = books.filter(book => book.id!=bookId);
    res.json({message: 'Book deleted Sucessfully!'})
})




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });


