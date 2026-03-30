# Domena craftdev.pl — HTTPS (nie HTTP)

Aplikacja w Dockerze nasłuchuje na **8009** (`http://127.0.0.1:8009`).  
**HTTPS robi nginx na hoście:** certyfikat Let’s Encrypt + przekierowanie **HTTP → HTTPS**.

Pliki w tym katalogu:

| Plik | Kiedy |
|------|--------|
| `craftdev.nginx.phase1-http.conf` | **Start:** tylko port **80**, proxy do **8009** (bez SSL). |
| `craftdev.nginx.conf` | **Po certyfikacie:** port **80** tylko przekierowuje na **https://**, port **443** serwuje stronę + **HSTS**. |

---

## 1. DNS

| Typ | Host | Wartość |
|-----|------|---------|
| **A** | `@` | `192.67.197.185` |
| **A** | `www` | `192.67.197.185` |

Sprawdź: `dig +short craftdev.pl A`

---

## 2. Firewall

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

---

## 3. Etap A — tylko HTTP (żeby certbot miał co zweryfikować)

Skopiuj **`craftdev.nginx.phase1-http.conf`** na serwer, np.:

```bash
sudo nano /etc/nginx/sites-available/craftdev.pl
# wklej zawartość phase1
sudo ln -sf /etc/nginx/sites-available/craftdev.pl /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Sprawdź w przeglądarce: **http://craftdev.pl** (bez s) — strona jak na **:8009**.

---

## 4. Etap B — certyfikat Let’s Encrypt

```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d craftdev.pl -d www.craftdev.pl
```

Certbot często **sam** dopisze SSL i przekierowanie. Sprawdź: **https://craftdev.pl**

---

## 5. Etap C — sztywne HTTPS + HSTS (zalecane)

Jeśli chcesz mieć **pełną kontrolę** (zawsze **301** na HTTPS, nagłówek **Strict-Transport-Security**):

1. Zrób kopię zapasową obecnego pliku:  
   `sudo cp /etc/nginx/sites-available/craftdev.pl /etc/nginx/sites-available/craftdev.pl.bak`
2. Zastąp zawartość **`craftdev.nginx.conf`** z repozytorium (ścieżki do certyfikatów muszą istnieć — po certbot są w `/etc/letsencrypt/live/craftdev.pl/`).
3. Jeśli `nginx -t` zgłosi błąd przy `include /etc/letsencrypt/options-ssl-nginx.conf;` — **zakomentuj** tę jedną linię i dodaj ręcznie (minimalnie):

```nginx
ssl_protocols TLSv1.2 TLSv1.3;
```

4. `sudo nginx -t && sudo systemctl reload nginx`

Od tej chwili **http://** → **https://** (301), ruch idzie tylko po szyfrowanym połączeniu.

---

## 6. Odnowienie certyfikatu

Certbot zwykle dodaje **cron** / **timer** (`systemctl list-timers | grep certbot`).  
Test: `sudo certbot renew --dry-run`

---

## 7. Repo (już ustawione)

W **`package.json`** jest `"homepage": "https://craftdev.pl"` — build CRA jest pod HTTPS.

Po zmianach na VPS zrób normalny deploy z GitHuba, żeby zbudować najnowszą wersję.
