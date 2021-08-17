import dotenv from "dotenv";

dotenv.config();

const db = {
  host: process.env.DB_HOST ?? "",
  name: process.env.BD_NAME ?? "",
};

const PORT = process.env.PORT || 3000;

export { db, PORT };
