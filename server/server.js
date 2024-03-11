import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router/route.js';
import connectDB from './database/conn.js';

dotenv.config();

const app = express();

// auth router attaches /login, /logout, and /callback routes to the baseURL

/**app middlewares */

app.use (morgan('tiny'));
app.use (cors());
app.use(express.json());

/**application port */

const port = process.env.PORT || 5000;

app.use("/api" , router); /**APIS */





/**routes */

// Original routes before Auth0 integration


/**start server only when we have valid connection */

connectDB().then(()=>{
    try {
        app.listen(port, ()=>{
            console.log(`Server connected to http://localhost:${port}`)
        });
    } catch (error) {
        console.log("cannot connect to the server")
        console.log("cannot coonect to the server")
    } 
}).catch((error)=>{
    console.log("Invalid Database Connection")

})
