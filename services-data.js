const servicesData = {
    'pvc': {
        title: 'PVC Sistemleri',
        description: 'Yüksek yalıtımlı, uzun ömürlü ve estetik PVC kapı pencere çözümleri ile mekanlarınızı güvenceye alın. Enerji tasarrufu sağlayan, ses ve ısı yalıtımı yüksek profiller kullanıyoruz.',
        price: 'Metretül fiyatı ortalama 800 TL - 1200 TL arası (Kullanılan profil ve isıcam özelliklerine göre değişebilir). Lütfen net ölçü için iletişime geçin.',
        image: 'images/pvc_sample.png',
        gallery: [
            'images/pvc_sample.png',
            'images/hero_bg.png',
            'images/cambalkon_sample.png' // Örnek olması için
        ]
    },
    'aluminyum': {
        title: 'Alüminyum Doğrama',
        description: 'Hafif, dayanıklı ve modern görünümlü alüminyum profiller ile şık tasarımlar sunuyoruz. Ofis bölmeleri, mağaza vitrinleri ve estetik kapı sistemleri için idealdir.',
        price: 'm² fiyatı ortalama 1500 TL - 2500 TL arası (Sistem ve profil kalınlığına göre değişir).',
        image: 'images/hero_bg.png',
        gallery: [
            'images/hero_bg.png',
            'images/pvc_sample.png',
            'images/dusakabin_sample.png'
        ]
    },
    'korkuluk': {
        title: 'Korkuluk Sistemleri',
        description: 'Merdiven, balkon ve teraslarınız için paslanmaz, camlı ve alüminyum güvenli korkuluk imalatı. Paslanmaz malzemelerle mekanlarınıza şıklık katarken güvenliğinizi de ön planda tutuyoruz.',
        price: 'Metretül fiyatı ortalama 600 TL - 1500 TL arası (Camlı, kare veya yuvarlak boru tercihine göre).',
        image: 'images/hero_bg.png',
        gallery: [
            'images/hero_bg.png',
            'images/cambalkon_sample.png',
            'images/pvc_sample.png'
        ]
    },
    'isicam': {
        title: 'Isıcam',
        description: 'Isı ve ses yalıtımında maksimum performans sağlayan profesyonel ısıcam uygulamaları. Konfor cam, sinerji cam seçenekleri ile evinizin havasını koruyun.',
        price: 'm² fiyatı ortalama 700 TL - 1300 TL arası (Kalınlık ve niteliğe göre değişmektedir).',
        image: 'images/pvc_sample.png',
        gallery: [
            'images/pvc_sample.png',
            'images/hero_bg.png',
            'images/dusakabin_sample.png'
        ]
    },
    'cambalkon': {
        title: 'Cam Balkon',
        description: 'Dört mevsim kullanılabilir, şık tasarımlı katlanır ve sürme cam balkon sistemleri. Manzaranızı kapatmadan ekstra yaşam alanı yaratın.',
        price: 'm² fiyatı ortalama 1600 TL - 2800 TL arası (Kullanılan cam rengi, katlanır/sürme yapısına göre değişir).',
        image: 'images/cambalkon_sample.png',
        gallery: [
            'images/cambalkon_sample.png',
            'images/hero_bg.png',
            'images/pvc_sample.png'
        ]
    },
    'dusakabin': {
        title: 'Duşakabin',
        description: 'Banyonuza özel ölçü, kaliteli temperli cam ve paslanmaz profillerle modern duşakabin çözümleri. Sızdırmazlık garantili siyah, gold, krom profil seçenekleri.',
        price: 'Standart ölçüler ortalama 2500 TL - 4500 TL arası. L/U kabin ve cam desenine göre değişiklik gösterir.',
        image: 'images/dusakabin_sample.png',
        gallery: [
            'images/dusakabin_sample.png',
            'images/pvc_sample.png',
            'images/cambalkon_sample.png'
        ]
    },
    'sineklik': {
        title: 'Sineklik',
        description: 'Yaz aylarında sinek ve haşerelerden korunmak için pileli (akordeon), stor ve menteşeli sağlam sineklik sistemleri. Kapı ve pencerelere tam uyumludur.',
        price: 'Standart pencere 300 TL - 500 TL. Kapı ve pileli sistemler 600 TL - 900 TL.',
        image: 'images/pvc_sample.png',
        gallery: [
            'images/pvc_sample.png',
            'images/dusakabin_sample.png',
            'images/hero_bg.png'
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // URL'den id'yi al
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');

    if (serviceId && servicesData[serviceId]) {
        const data = servicesData[serviceId];
        
        document.getElementById('service-title').textContent = data.title;
        document.getElementById('service-desc').textContent = data.description;
        document.getElementById('service-price').textContent = data.price;
        
        // Ana resim ekleme
        const imgEl = document.createElement('img');
        imgEl.src = data.image;
        imgEl.alt = data.title;
        const mainGallery = document.getElementById('service-gallery');
        mainGallery.innerHTML = '';
        mainGallery.appendChild(imgEl);

        // Örnekler galerisi oluşturma
        const examplesGrid = document.getElementById('examples-grid');
        examplesGrid.innerHTML = ''; // Temizle
        
        // Lightbox elementleri
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxClose = document.getElementById('lightbox-close');

        // Lightbox açma fonksiyonu
        const openLightbox = (src) => {
            if (lightbox && lightboxImg) {
                lightboxImg.src = src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Arka plan kaydırmayı engelle
            }
        };

        // Lightbox kapatma fonksiyonu
        const closeLightboxModal = () => {
            if (lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto'; // Kaydırmayı geri aç
            }
        };

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightboxModal);
        }

        if (lightbox) {
            // Siyah alana tıklanınca da kapat
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightboxModal();
                }
            });
        }

        if(data.gallery && data.gallery.length > 0) {
            data.gallery.forEach(imgSrc => {
                const galleryImg = document.createElement('img');
                galleryImg.src = imgSrc;
                galleryImg.alt = data.title + ' Örneği';
                galleryImg.style.cursor = 'pointer'; // Tıklanabilir olduğunu belirt
                
                // Resme tıklanınca lightbox'ı aç
                galleryImg.addEventListener('click', () => openLightbox(imgSrc));
                
                examplesGrid.appendChild(galleryImg);
            });
        }

        // Ana resme tıklanınca da büyütülsün isterseniz
        imgEl.style.cursor = 'pointer';
        imgEl.addEventListener('click', () => openLightbox(data.image));

        // Sayfa Title guncelleme
        document.title = data.title + ' | Taştan Alüminyum';

    } else {
        document.getElementById('service-title').textContent = 'Hizmet Bulunamadı';
        document.getElementById('service-desc').textContent = 'Aradığınız hizmet için bilgi bulunamadı. Lütfen ana sayfaya dönün.';
        document.getElementById('service-price-box').style.display = 'none';
        document.getElementById('service-gallery').style.display = 'none';
        document.querySelector('.examples-section').style.display = 'none';
    }
});
