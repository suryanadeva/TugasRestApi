import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan'; 
import router from './router.js';

const app = express();

// Connect to DB
const connectDB = async () => {
    try {
     await mongoose.connect(process.env.MONGODB_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });

        if(result) {
            console.log('Connect to DB Success');
        } else {
            console.log('Connect to DB failed')
        }
        
    } catch (err) {
        console.log(err);
    }
}

connectDB;


// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'success',
    });
});

app.use('/api', router); 

const PORT = process.env.PORT ||'4000';

app.listen('3000',() => {
    console.log(`App Listens to port ${PORT}`);
});