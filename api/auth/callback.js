import fetch from "node-fetch";

export default async function (req, res) {
  const code = req.query.code;

  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  const tokenRes = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`,
    {
      method: "POST",
      headers: { Accept: "application/json" },
    }
  );

  const tokenJson = await tokenRes.json();

  res.redirect(
    `/?access_token=${tokenJson.access_token}`
  );
}
