document.getElementById('proxyForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const url = document.getElementById('ytUrl').value;
  if (!url.startsWith("https://www.youtube.com")) {
    alert("YouTubeのURLを入力してください。");
    return;
  }
  const src = `/api/proxy?url=${encodeURIComponent(url)}`;
  document.getElementById('player').src = src;
});
