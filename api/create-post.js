import { Client } from "pg";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { title, description, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();

    await client.query(
      "INSERT INTO posts (title, description, content) VALUES ($1, $2, $3)",
      [title, description, content]
    );

    await client.end();

    return res.status(200).json({
      success: true,
      message: "Post saved",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
