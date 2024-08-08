import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.DATABASE_URL) return console.log('No database URL provided');

    if (isConnected) {
        return console.log('Using existing database connection');
    }

    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            dbName: 'devoverflow',
        });
        isConnected = true;
        console.log('Database connected');
    } catch (error) {
        console.error('Error connecting to database: ', error);
    }
}