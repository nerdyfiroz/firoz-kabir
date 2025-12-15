import { Client } from "pg";

export default async function handler(req, res) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    const result = await client.query(
      "SELECT * FROM posts ORDER BY created_at DESC"
    );
    await client.end();

    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
