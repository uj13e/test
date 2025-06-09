import fetch from 'node-fetch';

export default async (req, res) => {
  const { url } = req.query;
  if (!url || !url.startsWith("https://www.youtube.com")) {
    res.status(400).json({ error: "Invalid YouTube URL" });
    return;
  }
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  });
  const text = await response.text();
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(text);
};