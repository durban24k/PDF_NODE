const express=require('express');
const PDFGenerator=require('pdfkit');
const fs=require('fs');
const Router=express.Router();

Router.post('/pdf',(req,res)=>{
     // instantiate the library
     let doc = new PDFGenerator();

     let {fileNo}=req.body;
     // console.log(fileNo);

     let pdfDoc = fs.createWriteStream(String(fileNo))
     // pipe to a writable stream which would save the result into the same directory
     doc.pipe(pdfDoc);

     doc.text('Some awesome example text', { bold: true,
     underline: true,
     align: 'center'
     })
     // write out file
     doc.end();
     res.redirect('/');
     
});
module.exports=Router;