import express from 'express';
import { auth } from 'express-openid-connect';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router/route.js';

/**import connection file */
import connect from './database/conn.js';

dotenv.config();

const app = express(); 

// Auth0 configuration
const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: 'http://localhost:5000',
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(authConfig));

/**app middlewares */

app.use (morgan('tiny'));
app.use (cors());
app.use(express.json());

/**application port */

const port = process.env.PORT || 8080;

app.use("/api" , router); /**APIS */





/**routes */

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
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
