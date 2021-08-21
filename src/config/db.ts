import { connect } from "mongoose";
import { db } from "./general";

export const connectDB = async () => {
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
