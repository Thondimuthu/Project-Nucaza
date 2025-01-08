import { connect } from "mongoose";


async function connectDB(DB_URL) {
    connect(DB_URL)
}


// Example usage
export default connectDB;