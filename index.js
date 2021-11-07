const app = require('./app');
const dotenv = require('dotenv')
const connectionDatabase = require('./Config/database');
const connectDatabase = require('./Config/database');


dotenv.config({path:'./Config/config.env'})

// connections Data Base
connectDatabase();



app.listen(process.env.PORT,() => {console.log(`Server Runs On Port Number  ${process.env.PORT}`);})