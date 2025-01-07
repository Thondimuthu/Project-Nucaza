import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 // Add timeout
        });

        console.log(`MongoDB connected successfully: ${connection.connection.host}`);
        
        // Handle connection errors
        connection.connection.on('error', err => {
            console.error('MongoDB connection error:', err);
        });

        connection.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        // Give application chance to handle error rather than exiting
        throw error;
    }
};

export default connectDB;
