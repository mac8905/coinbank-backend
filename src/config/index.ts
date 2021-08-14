import dotenv from "dotenv";

dotenv.config();

const db = {
  host: process.env.DB_HOST,
  name: process.env.BD_NAME,
  password: process.env.DB_PASS,
  username: process.env.DB_USER,
};

export { db };
