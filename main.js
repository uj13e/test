document.getElementById('proxyForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const url = document.getElementById('ytUrl').value;
  const src = `/api/proxy?url=${encodeURIComponent(url)}`;
  document.getElementById('player').src = src;
});