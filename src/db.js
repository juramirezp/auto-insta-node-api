import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const connectionString = process.env.DB_HOST;
const connectToDB = async () => {
	try {
		await mongoose.connect(connectionString, {
			autoIndex: true,
			// useNewUrlParser: true,
			// useFindAndModify: false,
			// useUnifiedTopology: true,
		});
		console.log("Connected to Mongodb Atlas");
	} catch (error) {
		console.error(error);
	}
};
export default connectToDB;
