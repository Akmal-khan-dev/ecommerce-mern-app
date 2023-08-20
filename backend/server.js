const app=require('./app');
const connectDatabase = require('./db/Database');

// handling uncaght exception
process.on('uncaughtException', (err)=>{
    console.log(`Error:${err.message}`);
    console.log('shutting down the server for handling uncaght exception');
})

// config
if(process.env.NODE_ENV !=="PRODUCTION"){
    require('dotenv').config({
        path:'../backend/config/.env'
    });
}
 
// connect db
connectDatabase();

const server=app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})


process.on('unhandledRejection', (err)=>{
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server for unhandle promise rejection`);
  server.close(()=>{
    process.exit(1);
  });
})