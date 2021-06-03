const express=require('express');
const PDFGenerator=require('pdfkit');
const fs=require('fs');
const Router=express.Router();

Router.post('/pdf',(req,res)=>{
     // instantiate the library
     // let doc = new PDFGenerator();

     // let {fileNo}=req.body;
     // // console.log(fileNo);

     // let pdfDoc = fs.createWriteStream(String(fileNo))
     // // pipe to a writable stream which would save the result into the same directory
     // doc.pipe(pdfDoc);

     // doc.text('Some awesome example text', { bold: true,
     // underline: true,
     // align: 'center'
     // })
     // // write out file
     // doc.end();

     let {
          id,
          fileNo
     } = req.body;
     let time= new Date();
     let data=`\n${id} submitted ${fileNo} at ${time}`;
     fs.appendFile('logs/SessionLog.txt',data,(err)=>{
          if (err) throw err;
     })

     res.redirect('/');

     
});
module.exports=Router;