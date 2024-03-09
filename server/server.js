import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {config} from 'dotenv';
import router from './router/route.js';

/**import connection file */
import connect from './database/conn.js';

const app = express(); 

/**app middlewares */

app.use (morgan('tiny'));
app.use (cors());
app.use(express.json());
config();

/**application port */

const port = process.env.PORT || 8080;

app.use("/api" , router); /**APIS */





/**routes */

app.get ('/',(req,res)=>{
    try {
        res.json('Get Request')
    } catch (error) {
        res.json(error)
    }
})


/**start server only when we have valid connection */

connect().then(()=>{
    try {
        app.listen(port, ()=>{
            console.log(`Server connected to htttp://localhost:${port}`)
        });
    } catch (error) {
        console.log("cannot coonect to the server")
    } 
}).catch((error)=>{
    console.log("Invalid Database Connection")

})
