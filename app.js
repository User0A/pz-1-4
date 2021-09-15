const express = require('express');
const app = express();
const color = require('chalk');

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').app);
app.use(express.static(__dirname+'/'));
app.get('/', (req,res)=>{
    res.render(__dirname+'/index.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.post('/film.html', (req,res)=>{
    res.sendFile(__dirname+"/film.html");
});

app.post('/book.html', (req,res)=>{
    res.sendFile(__dirname+"/book.html");
})
app.listen(5000, ()=>{
    console.log(color.green('Server is started!'));
});