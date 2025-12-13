import { Client } from "@neondatabase/serverless";

export default async function handler(req, res) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    const result = await client.query("SELECT COUNT(*) FROM visitors");
    await client.end();
    res.status(200).json({ count: Number(result.rows[0].count) });
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
}
