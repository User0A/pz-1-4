const express = require('express');
const app = express();
const color = require('chalk');

app.set('view engine', 'ejs');
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

let port = process.env.PORT;
if (port==null || port== ""){
    port = 3000;
}
app.listen(port, ()=>{
    console.log(color.green('Server is started!'));
});