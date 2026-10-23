const http = require('http');
const url = require('url');
const dayjs = require('dayjs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Her istegin yontemini ve yolunu ucbirime yazdir
  console.log(`[${new Date().toLocaleTimeString('tr-TR')}] ${req.method} ${req.url}`);

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // GET disindaki yontemler icin 405 Method Not Allowed
  if (req.method !== 'GET') {
    res.writeHead(405, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Allow': 'GET'
    });
    res.end('Yönteme izin verilmiyor');
    return;
  }

  // Rotalar
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>Ana Sayfa</title>
</head>
<body>
  <h1>BMH231 Web Programlama Sunucusuna Hos Geldiniz (baslik dali)</h1>
  <p><a href="/hakkimda">Hakkımda sayfasına git</a></p>
</body>
</html>`);
  } else if (pathname === '/hakkimda') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>Hakkımda - Nisa Pelin Temel</title>
</head>
<body>
  <h1>Hakkımda</h1>
  <p><strong>Ad Soyad:</strong> Nisa Pelin Temel</p>
  <p><strong>Öğrenci No:</strong> 16008125084</p>
  <p><strong>Bölüm:</strong> Bilgisayar Mühendisliği</p>
  <p><strong>Üniversite:</strong> Yozgat Bozok Üniversitesi</p>
  <p><strong>E-posta:</strong> 16008125084@ogr.bozok.edu.tr</p>
  <p><a href="/">Ana Sayfaya Dön</a></p>
</body>
</html>`);
  } else if (pathname === '/api/ders') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    const dersBilgisi = {
      kod: 'BMH231',
      ad: 'Web Programlama',
      gun: 'Cuma'
    };
    res.end(JSON.stringify(dersBilgisi, null, 2));
  } else if (pathname === '/api/agep') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    const bugun = dayjs().startOf('day');
    const hedefTarih = dayjs('2026-11-01');
    const kalanGun = hedefTarih.diff(bugun, 'day');
    const agepBilgisi = {
      sonTeslimTarihi: '01.11.2026',
      kalanGun: kalanGun
    };
    res.end(JSON.stringify(agepBilgisi, null, 2));
  } else {
    // Diger tum tanimsiz yollar icin 404
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Sayfa bulunamadı');
  }
});

server.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});
