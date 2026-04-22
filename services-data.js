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

        if (data.gallery && data.gallery.length > 0) {
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

        // Cam Balkon Özel: Hesaplayıcıyı göster ve başlat
        if (serviceId === 'cambalkon') {
            const calcSection = document.getElementById('cambalkon-calculator');
            if (calcSection) calcSection.style.display = 'block';

            initCamBalkonCalculator();
        }

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

// Cam Balkon simülasyonu için özel fonksiyon
// Cam Balkon simülasyonu için özel fonksiyon
function initCamBalkonCalculator() {
    const widthEl = document.getElementById('cb-genislik');
    const heightEl = document.getElementById('cb-yukseklik');
    const glassCountEl = document.getElementById('cb-camsayisi');
    const cornerEl = document.getElementById('cb-kose');
    const cornerDegreeEl = document.getElementById('cb-kose-derece');
    const cornerPosEl = document.getElementById('cb-kose-bolen');
    const viewModeEl = document.getElementById('cb-gorunum');

    const infoC = document.getElementById('info-c');
    const infoCW = document.getElementById('info-cw');

    const dimWText = document.getElementById('dim-w-text');
    const dimHText = document.getElementById('dim-h-text');

    // Fiyat text
    const priceEstimateValue = document.getElementById('price-estimate-value');

    const simContainer = document.getElementById('sim-container');
    const colorOptions = document.querySelectorAll('#color-options .color-btn');
    const glassOptions = document.querySelectorAll('#glass-color-options .glass-btn');
    const cornerWrap = document.getElementById('kose-derece-wrap');
    const cornerKanatWrap = document.getElementById('kose-kanat-wrap');

    if (!simContainer) return; // güvenlik kontrolü

    let activeColor = '#9ca3af';
    let activeGlass = 'seffaf';

    // Alüminyum Renk seçimi
    colorOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            colorOptions.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeColor = btn.getAttribute('data-color');
            updateSimulation();
        });
    });

    // Cam Renk seçimi
    glassOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            glassOptions.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeGlass = btn.getAttribute('data-glass');
            updateSimulation();
        });
    });

    // Form input değişiklikleri
    const inputs = [widthEl, heightEl, glassCountEl, cornerEl, cornerDegreeEl, cornerPosEl, viewModeEl];
    inputs.forEach(input => {
        if (input) {
            input.addEventListener('input', updateSimulation);
            input.addEventListener('change', updateSimulation);
        }
    });

    // Serbest Bakış Fare/Dokunmatik Etkileşimi
    const simWrapper = document.querySelector('.sim-wrapper');
    if (simWrapper) {
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        const startDragging = (e) => {
            if (viewModeEl && viewModeEl.value !== 'free') return;
            e.preventDefault(); // Varsayılan sürüklemeyi/metin seçimini iptal et
            isDragging = true;
            previousMousePosition = {
                x: e.touches ? e.touches[0].clientX : e.clientX,
                y: e.touches ? e.touches[0].clientY : e.clientY
            };
            simContainer.style.transition = 'none'; // Sürüklerken animasyonu kapat
        };

        const stopDragging = () => {
            isDragging = false;
            if (viewModeEl && viewModeEl.value === 'free' && simContainer) {
                simContainer.style.transition = 'all 0.3s ease-out';
            }
        };

        const drag = (e) => {
            if (!isDragging) return;

            const currentX = e.touches ? e.touches[0].clientX : e.clientX;
            const currentY = e.touches ? e.touches[0].clientY : e.clientY;

            const deltaMove = {
                x: currentX - previousMousePosition.x,
                y: currentY - previousMousePosition.y
            };

            window.freeViewRotY += deltaMove.x * 0.4;
            window.freeViewRotX -= deltaMove.y * 0.4;

            // X ekseni (yukarı/aşağı) sınırlandır
            window.freeViewRotX = Math.max(-20, Math.min(85, window.freeViewRotX));

            const yOff = window.currentYOffset || 'translateY(-20px) ';
            const cTrans = window.currentCornerTransform || '';
            simContainer.style.transform = yOff + `rotateX(${window.freeViewRotX}deg) rotateY(${window.freeViewRotY}deg)` + cTrans;

            previousMousePosition = { x: currentX, y: currentY };
        };

        simWrapper.addEventListener('mousedown', startDragging);
        window.addEventListener('mouseup', stopDragging);
        window.addEventListener('mousemove', drag);

        simWrapper.addEventListener('touchstart', startDragging, { passive: false });
        window.addEventListener('touchend', stopDragging);
        window.addEventListener('touchmove', drag, { passive: false });
        // İmleci serbest modda tutarken hissettirmek için
        simWrapper.addEventListener('mouseenter', () => {
            if (viewModeEl && viewModeEl.value === 'free') {
                simWrapper.style.cursor = 'grab';
            } else {
                simWrapper.style.cursor = 'default';
            }
        });
        simWrapper.addEventListener('mousedown', () => {
            if (viewModeEl && viewModeEl.value === 'free') {
                simWrapper.style.cursor = 'grabbing';
            }
        });
        window.addEventListener('mouseup', () => {
            if (viewModeEl && viewModeEl.value === 'free') {
                simWrapper.style.cursor = 'grab';
            }
        });
    }

    // Genişlik değiştiğinde cam sayısını otomatik hesapla (manuel değiştirmedikleri durum için)
    if (widthEl && glassCountEl) {
        widthEl.addEventListener('change', () => {
            const w = parseInt(widthEl.value) || 300;
            // 1 cam genişliği 30cm - 50cm arasında olacak şekilde hedeflenir (ortalama 40cm)
            const count = Math.max(2, Math.round(w / 40));
            glassCountEl.value = count;
            updateSimulation();
        });
    }

    // Fiyat ve Formatlama fonksiyonu
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(amount);
    };

    function updateSimulation() {
        if (!simContainer) return;

        const width = parseInt(widthEl.value) || 300;
        const height = parseInt(heightEl.value) || 200;
        const panes = parseInt(glassCountEl.value) || 5;
        const isCorner = cornerEl.value === 'kose';
        const cornerDegree = cornerDegreeEl.value;
        const cornerPos = parseInt(cornerPosEl.value) || 3;
        const viewMode = viewModeEl ? viewModeEl.value : '3d';

        // Tek cam genişliği
        const singlePaneWidth = (width / Math.max(1, panes)).toFixed(1);

        // Overlay ve Bilgi değerlerini güncelle
        if (infoC) infoC.textContent = panes;
        if (infoCW) infoCW.textContent = singlePaneWidth;
        if (dimWText) dimWText.textContent = width + ' cm';
        if (dimHText) dimHText.textContent = height + ' cm';

        // Fiyat Hesaplama
        // (En(m) x Boy(m)) * 3500 TL
        const areaRes = (width * height) / 10000;
        const calculatedPrice = areaRes * 3500;
        if (priceEstimateValue) {
            priceEstimateValue.innerHTML = `~ ${formatCurrency(calculatedPrice)} <span style="font-size: 1rem; color: #aeb8c4;">TL</span>`;
        }

        simContainer.className = 'sim-container'; // Temizle
        simContainer.style.transform = ''; // Temizle

        // Köşe ofsetlerini hesapla (Tüm görünümlerde modeli kendi merkezinde döndürmek için)
        let cornerTransform = '';
        if (isCorner) {
            const sideRatio = (panes - Math.min(panes - 1, Math.max(1, cornerPos))) / panes;
            const wPix = simContainer.offsetWidth || 500;
            const sideW = wPix * sideRatio;

            if (cornerDegree === '90') {
                cornerTransform = ` translateX(${sideW / 2}px) translateZ(${-sideW / 2}px)`;
            } else if (cornerDegree === '135') {
                const xOffset = sideW * (1 - Math.cos(Math.PI / 4)) / 2;
                const zOffset = -sideW * Math.sin(Math.PI / 4) / 2;
                cornerTransform = ` translateX(${xOffset}px) translateZ(${zOffset}px)`;
            }
        }

        // Serbest Bakış (drag) sırasında kullanabilmek için global'e kaydet
        window.currentCornerTransform = cornerTransform;

        // Görünüm Modlarına Göre CSS Transform Uygula
        if (viewMode === 'top') {
            simContainer.classList.add('view-top');
            // Üstten görünümü ekran boyutuna göre yukarıya al (mobilde daha az kaydır)
            const topOffset = window.innerWidth <= 768 ? -80 : -190;
            window.currentYOffset = `translateY(${topOffset}px) `;
            simContainer.style.transform = window.currentYOffset + `scale(0.85) rotateX(85deg)` + cornerTransform;
        } else if (viewMode === 'free') {
            simContainer.classList.add('view-free');
            // Serbest bakışta modelin kendi etrafında dönmesi için ofsetleri uyguluyoruz
            window.currentYOffset = `translateY(-20px) `;
            if (window.freeViewRotX === undefined) {
                window.freeViewRotX = 10;
                window.freeViewRotY = -20;
            }
            simContainer.style.transform = window.currentYOffset + `rotateX(${window.freeViewRotX}deg) rotateY(${window.freeViewRotY}deg)` + cornerTransform;
        } else {
            // normal 3d
            window.currentYOffset = `translateY(-20px) `;
            simContainer.style.transform = window.currentYOffset + `rotateX(5deg) rotateY(-15deg)` + cornerTransform;
        }

        // Köşe/Düz durumuna göre görünürlükler
        if (isCorner) {
            simContainer.classList.add('corner-' + cornerDegree);
            if (cornerWrap) cornerWrap.style.display = 'flex';
            if (cornerKanatWrap) cornerKanatWrap.style.display = 'flex';
        } else {
            simContainer.classList.add('duz');
            if (cornerWrap) cornerWrap.style.display = 'none';
            if (cornerKanatWrap) cornerKanatWrap.style.display = 'none';
        }

        // Alüminyum rengini ana çerçeveye uygula
        if (activeColor === 'wood') {
            simContainer.style.setProperty('--rail-color', '#5c3a21');
        } else {
            simContainer.style.setProperty('--rail-color', activeColor);
        }

        // HTML'i yeniden renderla
        simContainer.innerHTML = '';

        if (isCorner) {
            const groupFront = document.createElement('div');
            groupFront.className = 'group-front';
            const groupSide = document.createElement('div');
            groupSide.className = 'group-side';

            // Köşe nereden dönüyor?
            const splitIndex = Math.min(panes - 1, Math.max(1, cornerPos));
            groupFront.style.flex = splitIndex;
            groupSide.style.flex = panes - splitIndex;

            // Köşe profilinin boyası kaldırıldı, artık CSS değişkenleri hallediyor

            for (let i = 0; i < splitIndex; i++) {
                groupFront.appendChild(createPaneEl(activeColor, activeGlass));
            }
            for (let i = splitIndex; i < panes; i++) {
                groupSide.appendChild(createPaneEl(activeColor, activeGlass));
            }

            simContainer.appendChild(groupFront);
            simContainer.appendChild(groupSide);
        } else {
            const groupFront = document.createElement('div');
            groupFront.className = 'group-front';
            groupFront.style.flex = 1;
            for (let i = 0; i < panes; i++) {
                groupFront.appendChild(createPaneEl(activeColor, activeGlass));
            }
            simContainer.appendChild(groupFront);
        }
    }

    function createPaneEl(color, glassType) {
        const pane = document.createElement('div');
        pane.className = 'glass-pane glass-' + glassType;
        return pane;
    }

    // Başlangıç render'ı
    setTimeout(updateSimulation, 50); // DOM fully ready olduktan sonra
}
