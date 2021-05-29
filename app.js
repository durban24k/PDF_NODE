require('dotenv').config({path:'./.env'});
const express=require('express');
const logger=require('morgan');
const path=require('path');

const app=express();
app.use(logger('combined'));

app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

const PDFRoutes=require('./routes/pdf.js');

app.use('/route',PDFRoutes);

app.get('/',(req,res)=>{
     res.render('index');
});

const port=process.env.PORT || 3000;

app.listen(port,()=>{
     console.log(`Listening on port ${port}`);
});