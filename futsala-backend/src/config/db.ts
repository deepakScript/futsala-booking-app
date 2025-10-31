import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Neon requires SSL
});

pool
  .connect()
  .then(() => console.log("✅ Connected to Neon PostgreSQL"))
  .catch((err) => console.error("❌ Database connection error:", err));

export default pool;
