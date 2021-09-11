/*USANDO NODEMAILER LA ESTRUCTURA BASICA SE NOTARIA ASI


const nodemailer = require('nodemailer');
 
async function SendEmail(example1,example2,example3) {
    
// create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
   host:"smtp.gmail.com",
   port:465,
   secure:true, // true for 465, false for other ports
   auth:{
       user: process.env.VERIFIED_SENDER,
       pass: process.env.VERIFIED_PASSWORD,
   },
 });
 
 //send mail with defined transport object
 let info = ({
   from: process.env.VERIFIED_SENDER, // sender address
   to: process.env.VERIFIED_EMAIL, // list of receivers
   subject: "Contact from github", // Subject line
   html:`<h1>Detalles Del Mensaje</h1>
     <p>Nombre del Cliente:${example1}</p>
     <p>Edad del Cliente:${example2}</p>
     <p>Direccion Cliente:${example3}</p>
     `
 });
 
 return await transporter.sendMail(info);
 
}


module.exports = SendEmail;

*/



/* LA ESTRUCTURA USANDO SES(Amazon Simple Email)



const AWS = require('aws-sdk');
const ses = new AWS.SES();

function sendEmail(Example1,Example2,Example3,Example4) {
    const params = {
      Destination: {
          ToAddresses: [
              process.env.VERIFIED_EMAIL
          ]
        },
      Message: {
          Body: {
              Html: {
                  Data: `<h1>Details</h1>
                  <p>CLIENTE:${Example1}</p>
                  <p>CONTACTO:$Example2}</p>
                  <p>Asunto:${Example3}</p>
                  <p>MENSAJE DEL CLIENTE:${Example4}</p>
               `,
                  Charset: 'UTF-8'
              }
          },
          Subject: {
              Data: "Portfolio WebSite Contact",
              Charset: 'UTF-8'
          }
      },
      Source: process.env.VERIFIED_SENDER,
    }
    return ses.sendEmail(params).promise();
  }
   
  module.exports = sendEmail;


*/