import mongoose from 'mongoose';

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://ronatkumarmuni42:qao7zGYpp9wXIDp6@cluster0.esim2.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
}
export default connectToMongoDB;

