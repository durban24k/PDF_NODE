const express=require('express');
const PDFGenerator=require('pdfkit');
const fs=require('fs');
const Router=express.Router();

Router.get('/pdf',(req,res)=>{
     // instantiate the library
     let theOutput = new PDFGenerator 

     // pipe to a writable stream which would save the result into the same directory
     theOutput.pipe(fs.createWriteStream('TestDocument.pdf'));
     
     // theOutput.image('./logo.png', { fit: [500,155] });

     theOutput.text('Some awesome example text', { bold: true,
     underline: true,
     align: 'center'
     })
     // write out file
     theOutput.end();
});

module.exports=Router;