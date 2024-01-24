Trader-Edit Proje Readme
Proje Genel Bakış
Adı: trader-edit
Versiyon: 0.1.0
Özel (Private): true

Script'ler

**dev:** Next.js kullanarak geliştirme sunucusunu çalıştırın.

```
npm run dev
```

build: Next.js uygulamasını derleyin.

```
npm run build
```

start: Next.js kullanarak üretim sunucusunu başlatın.

```
npm start
```

lint: Next.js lint kullanarak projeyi lintleyin.

```
npm run lint
```

## Bağımlılıklar

### Temel Bağımlılıklar

- next: React uygulamaları oluşturmak için bir çerçeve.
- react: Kullanıcı arayüzleri oluşturmak için JavaScript kütüphanesi.
- react-dom: DOM ile çalışmak için React paketi.
- next-auth: Next.js uygulamaları için kimlik doğrulama kütüphanesi.
- mongoose: MongoDB için nesne modelleme kütüphanesi.
- node-fetch: Node.js fetch kullanarak kaynakları almak için hafif bir modül.

### UI ve Tasarım Bağımlılıkları

- @headlessui/react: React için bileşen tabanlı UI bileşenleri.
- @nextui-org/react: React uygulamaları için UI bileşenleri.
- framer-motion: React için animasyon kütüphanesi.
- react-icons: React uygulamaları için ikonlar.
- react-helmet: React için belge başlığı yönetimi.
- swiper: Modern dokunmatik kaydırıcı.
- tailwindcss: İlk olarak hizmete giren bir CSS çerçevesi.

### Veri İşleme ve API Bağımlılıkları

- axios: Promis tabanlı HTTP istemcisidir.
- cloudinary: Bulut tabanlı resim ve video yönetimi.
- coinpayments: Kripto ödeme işleme.
- mongodb: Node.js için resmi MongoDB sürücüsü.
- web3: Ethereum JavaScript API.

### Kimlik Doğrulama ve Yetkilendirme Bağımlılıkları

- @auth/mongodb-adapter: NextAuth için MongoDB adaptörü.
- @next-auth/mongodb-adapter: NextAuth için MongoDB adaptörü.
- jose: JavaScript Nesne İmzalama ve Şifreleme kütüphanesi.

### Metin ve HTML İşleme Bağımlılıkları

- @tiptap/extension-bold: Tiptap için kalın metin eklentisi.
- @tiptap/extension-image: Tiptap için resim eklentisi.
- @tiptap/extension-italic: Tiptap için eğik metin eklentisi.
- @tiptap/extension-link: Tiptap için bağlantı eklentisi.
- html-react-parser: HTML'den React çözümleyici.
- sanitize-html: HTML ve metin temizleme.

### Yardımcı Bağımlılıklar

- bcryptjs: Parolaları karmaşıklaştırmak için kütüphane.
- date-fns: Tarih yardımcı işlev kütüphanesi.
- moment: Tarih ve saat işleme kütüphanesi.
- node-cron: Node.js için Cron görevleri.
- node-schedule: Node.js için iş zamanlama.
- uid: Benzersiz ID oluşturma.

### Dosya İşleme Bağımlılıkları

- formidable: Form verisi ayrıştırma ve işleme.
- get-video-duration: Video dosyalarının süresini alın.
- multer: multipart/form-data işleme için ara yazılım.
- multer-storage-cloudinary: Cloudinary için multer depolama motoru.
- sharp: Resim işleme kütüphanesi.

### Grafik ve Görselleştirme Bağımlılıkları

- chart.js: Grafik oluşturma kütüphanesi.
- chartjs-plugin-annotation: Chart.js için açıklama eklentisi.
- react-chartjs-2: Chart.js için React sarıcısı.

### moment: Tarih ve saat işleme kütüphanesi.

- node-fetch: Node.js fetch kullanarak kaynakları almak için hafif bir modül.
- react-infinite-scroll-component: React uygulamaları için sonsuz kaydırma.
- react-toastify: React uygulamaları için toast bildirimleri.
- sweetalert2: Zarif uyarılar için SweetAlert2.
  ### Geliştirme Bağımlılıkları
- autoprefixer: CSS vendor ön ek aracı.
- postcss: JS eklentileri ile stilleri dönüştürme aracı.
- sass: Sözdizimi açısından harika stil tabanlı dil.
- tailwindcss: İlk olarak hizmete giren bir CSS çerçevesi.

## Kurulum Nasıl Yapılır

### Deposu klonlayın:

```
git clone <depo-url>
cd trader-edit
```

### Bağımlılıkları yükleyin:

```
npm install
```

### Geliştirme sunucusunu başlatın:

```
npm run dev
```

Tarayıcınızı açın ve uygulamayı görmek için http://localhost:3000 adresine gidin.

### Ek Notlar

- Bu proje Next.js çerçevesi kullanılarak oluşturulmuştur.
- Konfigürasyon için gerekli olan çevresel değişkenleri uygun şekilde ayarladığınızdan emin olun.
- Kimlik doğrulama için, gerekli anahtarları ve sırları kimlik doğrulama adaptörlerinde yapılandırın.
- Kullanım hakkında daha detaylı bilgi için lütfen bireysel paket belgelerine başvurun.
- Güvenlik ve uyumluluk nedeniyle bağımlılıkları güncel tutun.

## Trader-Edit Proje Environment (Env) Dosyası Kılavuzu

Bu dokümantasyon, Trader-Edit projesinin çevresel değişkenlerini yapılandırmak ve kullanmak için basit bir rehber sunmaktadır.

### Çevresel Değişkenler

**NEXTAUTH_URL**

> NextAuth.js kimlik doğrulama kütüphanesinin uygulama URL'si.

**NEXTAUTH_SECRET**

> NextAuth.js için kullanılan gizli anahtar (secret key).

**APP_URL**

> Uygulamanın ana URL'si.

**NEXT_PUBLIC_APP_URL**

> Next.js uygulamasının genel olarak erişilebilir olan URL'si.

**MONGO_URL**

> MongoDB veritabanına bağlanmak için kullanılan URL.

**NEXT_PUBLIC_TO_ADDRESS**

> Genel uygulama URL'si için belirlenmiş bir alıcı adresi.

**JWT_SECRET**

> JSON Web Token (JWT) oluşturmak ve doğrulamak için kullanılan gizli anahtar.

**JWT_SIGNING_KEY**

> JWT'nin imzalanması için kullanılan anahtar.

**JWT_ENCRYPTION_KEY**

> JWT'nin şifrelenmesi için kullanılan anahtar.

**CLOUDINARY_CLOUD_NAME**

> Cloudinary hesabınızın bulut adı.

**CLOUDINARY_API_KEY**

> Cloudinary API için kullanılan anahtar.

**CLOUDINARY_API_SECRET**

> Cloudinary API için kullanılan gizli anahtar.

**NODE_ENV**

> Uygulamanın çalıştığı ortam (development, production, vs.).

## Kullanım

- **.env** adında yeni bir dosya oluşturun.
- Yukarıdaki çevresel değişkenleri **.env** dosyasına ekleyin.

```
NEXTAUTH_URL=https://trader-edit-app.com
NEXTAUTH_SECRET=mysecretkey123
APP_URL=https://trader-edit-app.com
NEXT_PUBLIC_APP_URL=https://www.trader-edit-app.com
MONGO_URL=mongodb://localhost:27017/trader-edit
NEXT_PUBLIC_TO_ADDRESS=info@trader-edit-app.com
JWT_SECRET=myjwtsecretkey
JWT_SIGNING_KEY=myjwtsigningkey
JWT_ENCRYPTION_KEY=myjwtencryptionkey
CLOUDINARY_CLOUD_NAME=mycloudname
CLOUDINARY_API_KEY=mycloudinaryapikey
CLOUDINARY_API_SECRET=mycloudinaryapisecret
NODE_ENV=development
```
