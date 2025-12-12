import { Pool } from "pg";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.headers["x-admin-secret"] !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { rows } = await pool.query(
    "SELECT * FROM users ORDER BY created_at DESC"
  );

  res.status(200).json(rows);
}
