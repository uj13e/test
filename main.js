async function playVideo() {
  const ytUrl = document.getElementById('ytUrl').value;
  const res = await fetch(`/api/get-youtube-url?url=${encodeURIComponent(ytUrl)}`);
  const data = await res.json();
  if (data.videoUrl) {
    document.getElementById('player').src = data.videoUrl;
  } else {
    alert('取得失敗');
  }
}