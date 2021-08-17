import { connect } from "mongoose";
import { db } from "./general";

const connectDB = async () => {
  try {
    await connect(db.host, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Conneted");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export { connectDB };
