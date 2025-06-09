// サーバーサイド（Node.js）で youtube-dl-exec を使う
const youtubedl = require('youtube-dl-exec');

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "URL required" });
  try {
    const info = await youtubedl(url, {
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      addHeader: ['referer:youtube.com', 'user-agent:googlebot']
    });
    // 最も高画質なmp4のURLを返す
    const mp4 = info.formats.find(f => f.ext === 'mp4' && f.acodec !== 'none' && f.vcodec !== 'none');
    if (!mp4) return res.status(404).json({ error: "No MP4 found" });
    res.json({ videoUrl: mp4.url });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};