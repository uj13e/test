const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url || !url.startsWith("https://www.youtube.com")) {
    res.status(400).json({ error: "Invalid YouTube URL" });
    return;
  }
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    const text = await response.text();
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.toString() }); // エラー内容を返す
  }
};
