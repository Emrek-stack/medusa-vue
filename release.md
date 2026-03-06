# Minima Vue Release Rehberi (Step by Step)

Bu doküman `@minima-vue/toolbox`, `@minima-vue/icons`, `@minima-vue/ui-preset`, `@minima-vue/ui` paketleri için release sürecini anlatır.

## 0) Bir kere yapılacak ayarlar

### 0.1 GitHub Actions izinleri
GitHub repo:
- `Settings` -> `Actions` -> `General`

Aşağıdakileri aç:
- `Workflow permissions`: **Read and write permissions**
- `Allow GitHub Actions to create and approve pull requests`: **Enabled**

### 0.2 Secret ayarları
GitHub repo:
- `Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`

Eklenmesi gereken secret'lar:
- `NPM_TOKEN`: npm publish yetkili token
- `CHANGESETS_GH_PAT`: PR oluşturma yetkili GitHub token (fallback için)

Not:
- `changesets-version.yml` artık şu sırayla token kullanır:
  1. `CHANGESETS_GH_PAT`
  2. `GITHUB_TOKEN`

## 1) Development branch'inde changeset oluştur

```bash
git checkout development
git pull origin development
npm install
npx changeset
```

`npx changeset` sırasında:
- Etkilenen paketleri seç
- Sürüm tipini seç (`patch` / `minor` / `major`)
- Changelog özetini yaz

## 2) Lokal doğrulama yap

```bash
npm run build:packages
npm run pack:packages
```

Beklenen:
- Build hatasız tamamlanmalı
- `.tgz` paketleri üretilmeli

İsteğe bağlı temizlik:
```bash
rm -f minima-vue-*.tgz
```

## 3) Changeset'i commit ve push et

```bash
git add .changeset/*.md
git commit -m "chore: add changeset for package release"
git push origin development
```

## 4) development -> main merge

- GitHub'da `development` -> `main` PR aç
- PR'ı merge et

Bu merge, `Changesets Version PR` workflow'unu tetikler.

## 5) Version Packages PR'ını merge et

`Changesets Version PR` workflow'u başarılıysa otomatik bir PR açar:
- Başlık: `Version Packages`
- İçerik: package version bump + changelog güncellemeleri

Yapılacak:
- `Version Packages` PR'ını merge et

Bu merge, `Changesets Release` workflow'unu tetikler.

## 6) Otomatik publish'i kontrol et

`Changesets Release` workflow aşağıdakileri yapar:
- build
- git tag oluşturma
- GitHub Release oluşturma
- npm publish

GitHub -> `Actions` altında job'ların yeşil tamamlandığını doğrula.

## 7) Yayın sonrası doğrulama

```bash
npm view @minima-vue/ui version
npm view @minima-vue/icons version
npm view @minima-vue/ui-preset version
npm view @minima-vue/toolbox version
```

Beklenen:
- Versiyonlar yeni release ile artmış olmalı.

Ayrıca GitHub'da:
- `Releases` sekmesinde yeni release kayıtlarını
- `Tags` altında `@minima-vue/<paket>@<versiyon>` etiketlerini kontrol et.

## Sorun Giderme

### Hata: "GitHub Actions is not permitted to create or approve pull requests"
Kontrol et:
- `Settings` -> `Actions` -> `General`
  - `Read and write permissions`
  - `Allow GitHub Actions to create and approve pull requests`

Alternatif:
- `CHANGESETS_GH_PAT` secret'ının doğru scope ile tanımlı olduğundan emin ol.

### Version Packages PR açılmadı
Kontrol et:
- `main` branch'e gerçekten changeset içeren commit geldi mi?
- `Changesets Version PR` workflow log'larında token/permission hatası var mı?

### Publish çalışmadı
Kontrol et:
- `NPM_TOKEN` geçerli mi?
- npm'de package publish yetkisi var mı?
- `Changesets Release` workflow log'larında `npm publish` adımı.

## Hızlı Komut Özeti

```bash
# 1) changeset
npm install
npx changeset

# 2) doğrulama
npm run build:packages
npm run pack:packages

# 3) commit/push
git add .changeset/*.md
git commit -m "chore: add changeset for release"
git push origin development
```
