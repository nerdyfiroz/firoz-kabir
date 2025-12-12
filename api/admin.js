import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export default async function handler(req, res) {
  const secret = req.headers["x-admin-secret"];

  if (secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { rows } = await pool.query(
    "SELECT * FROM users ORDER BY created_at DESC"
  );

  res.status(200).json(rows);
}
