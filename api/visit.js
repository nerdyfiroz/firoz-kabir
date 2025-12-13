import pkg from "pg";
const { Pool } = pkg;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    });

    await pool.query("INSERT INTO visitors DEFAULT VALUES");

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("API INSERT ERROR:", err);
    res.status(500).json({ error: err.message });
  }
}
