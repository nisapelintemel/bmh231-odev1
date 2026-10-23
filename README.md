# BMH231 Web Programlama - Ödev 1 (Node.js HTTP Sunucusu)

Bu proje, **Yozgat Bozok Üniversitesi Bilgisayar Mühendisliği Bölümü**, *BMH231 Web Programlama (2026–2027 Güz)* dersi Ödev 1 kapsamında geliştirilmiş basit ve harici web çatısı (Express vb.) kullanılmadan yalnızca Node.js çekirdek `http` modülü ve `dayjs` kütüphanesi kullanılarak inşa edilmiş bir HTTP sunucusudur.

## Geliştirici Bilgileri
- **Öğrenci Adı Soyadı:** Nisa Pelin Temel
- **Öğrenci Numarası:** 16008125084
- **Bölüm:** Bilgisayar Mühendisliği
- **Üniversite:** Yozgat Bozok Üniversitesi
- **E-posta:** 16008125084@ogr.bozok.edu.tr

---

## Projenin Amacı
- Node.js yerel `http` modülü ile HTTP istek/yanıt yaşam döngüsünü anlamak.
- REST ve HTTP standartlarına uygun başlıklar (`Content-Type`, `Allow`) ve durum kodları (`200 OK`, `404 Not Found`, `405 Method Not Allowed`) üretmek.
- `dayjs` paketi ile tarih farkı hesaplaması yaparak dinamik JSON yanıtı oluşturmak.
- Git üzerinde dallanma (`branch`), birleştirme (`merge`) ve çakışma çözme (`merge conflict resolution`) pratiklerini uygulamak.

---

## Kurulum ve Çalıştırma Adımları

Projeyi bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/nisapelintemel/bmh231-odev1.git
cd bmh231-odev1
```

### 2. Bağımlılıkları Yükleyin
Proje `dayjs` paketini kullanmaktadır. `node_modules` dizini depoya dahil edilmediğinden bağımlılıkları yüklemek için:
```bash
npm install
```

### 3. Sunucuyu Başlatın
`package.json` içerisinde tanımlı olan `start` betiği ile sunucuyu ayağa kaldırın:
```bash
npm start
```
Sunucu başarıyla başladığında konsolda şu çıktıyı göreceksiniz:
```text
Sunucu http://localhost:3000 adresinde çalışıyor...
```

---

## Desteklenen Rotalar ve Uç Noktalar

Sunucu `3000` numaralı bağlantı noktasında (port) çalışmakta olup aşağıdaki rotaları ve HTTP yöntemlerini destekler:

| Yol (Path) | Yöntem | Durum Kodu | İçerik Türü (Content-Type) | Açıklama |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `GET` | `200 OK` | `text/html; charset=utf-8` | Karşılama başlığı ve `/hakkimda` sayfasına bağlantı içeren HTML sayfası. |
| `/hakkimda` | `GET` | `200 OK` | `text/html; charset=utf-8` | Öğrencinin ad, soyad, numara ve üniversite bilgilerini içeren tanıtım sayfası. |
| `/api/ders` | `GET` | `200 OK` | `application/json; charset=utf-8` | Dersin kodu, adı ve gününü dönen JSON verisi (`BMH231`, `Web Programlama`, `Cuma`). |
| `/api/agep` | `GET` | `200 OK` | `application/json; charset=utf-8` | AGEP son teslim tarihi (`01.11.2026`) ve bugünden kalan gün sayısını (`dayjs` ile hesaplanan) dönen JSON verisi. |
| *Tanımsız yollar* | `GET` | `404 Not Found` | `text/plain; charset=utf-8` | Bulunamayan sayfalar için `"Sayfa bulunamadı"` düz metin yanıtı. |
| *GET dışı istekler* | `POST`, `PUT`, vb. | `405 Method Not Allowed` | `text/plain; charset=utf-8` | GET dışındaki istekler reddedilir; yanıtta `Allow: GET` başlığı ve `"Yönteme izin verilmiyor"` iletilir. |

Her istek geldiğinde, sunucu terminale gelen isteğin HTTP yöntemini ve istenen yolu anlık olarak loglar:
```text
[09:15:30] GET /api/ders
[09:15:35] POST /api/ders
```
