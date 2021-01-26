const express = require("express");
const path = require('path') ;
const app = express();
var bodyParser = require('body-parser');
const connectDB = require("./config/connectDB");
const logger = require("./middlewares/logger");
const authRouter = require("./routes/authRouter");
const tshirtRouter = require("./routes/tshirtRouter")
const shoesRouter = require("./routes/shoesRouter")
const jeansRouter = require("./routes/jeansRouter")



 // middlewares
 app.use(express.json());
 app.use(bodyParser.json());
 app.use("/api/auth",logger);


//  connect the db 
connectDB();
app.use("/api/auth",authRouter)
app.use("/api/tshirt" ,tshirtRouter )
app.use("/api/shoes" ,shoesRouter )
app.use("/api/jeans" ,jeansRouter )

//serve Static assets if in production 
if(process.env.NODE_ENV === 'production'){
  //set a static folder
  app.use(express.static('frontend/build')),
  app.get('*' , (req,res)=>{
  res.sendFile(path.resolve(__dirname,'frontend','build' , 'index.html'))
  });
}

// start the server
const port = process.env.port || 5000;
app.listen(port, (err) => err ? console.error(err) : console.log(
    `the server is running on port${port}`
));